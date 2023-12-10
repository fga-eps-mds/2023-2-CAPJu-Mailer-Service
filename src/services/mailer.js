import * as nodemailer from "nodemailer";
import path from "path";
import { QueryTypes } from "sequelize";
import { config } from "dotenv";
import { queryMailContents } from "../utils/queryMailContents.js";
import db from "../config/database.js";
import { mailHTML } from "../utils/mailHTML.js";

config();

class Mailer {
  constructor() {
    this.email_port = process.env.EMAIL_PORT;
    this.email_host = process.env.EMAIL_HOST;
    this.email_user = process.env.EMAIL_USER;
    this.email_password = process.env.CAPJU_EMAIL_PASSWORD;
  }

  async getMailContents() {
    try {
      const mailContents = await db.query(queryMailContents, {
        type: QueryTypes.SELECT,
      });
      return mailContents;
    } catch (error) {
      return {
        error,
        message: "Failed to query mail contents",
      };
    }
  }

  formatDate(date) {
    date = new Date(date);
    var day = date.getDate().toString().padStart(2, "0");
    var month = (date.getMonth() + 1).toString().padStart(2, "0");
    var year = date.getFullYear();
    return day + "/" + month + "/" + year;
  }

  async sendEmail() {
    const emails = [];
    let json;

    json = await this.getMailContents();

    if (json.length == 0) {
      return true;
    }

    json.forEach((item) => {
      emails.push(item.email);
    });

    let emailFilter = emails.filter(
      (email, idx) => emails.indexOf(email) === idx
    );

    for (let i = 0; i < emails.length; i++) {
      let process = [];

      json.forEach((item) => {
        if (emailFilter[i] === item.email) {
          process.push(item);
        }
      });

      const transport = nodemailer.createTransport({
        host: this.email_host,
        port: this.email_port,
        secure: false,
        auth: {
          user: this.email_user,
          pass: this.email_password,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      const __dirname = path.resolve();

      let html = mailHTML;

      let table = process.map((flow) => {
          return `
        <tr>
          <td>${flow.flow}</td>
          <td>${flow.process_record}</td>
          <td>${flow.stage}</td>
          <td>${this.formatDate(flow.start_date)}</td>
          <td>${flow.stage_duration}</td>
          <td>${flow.delay_days}</td>
        </tr>
        `;
        }).join("")

      html = html.replace("[NOME]", process[0].name);
      html = html.replace("[TABELA]", table);

      const message = {
        from: this.email_user,
        to: emailFilter[i],
        subject: "CAPJU - relatório de processos atrasados",
        text: "Olá, esse é um e-mail automático para informar os processos atrasados.",
        html: html,
        attachments: [
          {
            filename: "capju.png",
            path: __dirname + "/assets/capju.png",
            cid: "capju",
          },
          {
            filename: "justica_federal.png",
            path: __dirname + "/assets/justica_federal.png",
            cid: "justica_federal",
          },
          {
            filename: "UnB.png",
            path: __dirname + "/assets/UnB.png",
            cid: "UnB",
          },
        ],
      };
      try {
        transport.sendMail(message);
        process = [];
      } catch (err) {
        console.log("Error occurred. " + err.message);
        return false;
      }
    }
    return true;
  }
}

export default Mailer;
