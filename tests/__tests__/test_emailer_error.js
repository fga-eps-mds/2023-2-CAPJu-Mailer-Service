import db from "../../src/config/database.js";
import Mailer from "../../src/services/mailer.js";
import path from "path";

jest.mock('nodemailer', () => ({
  createTransport: jest.fn().mockReturnValue({
    sendMail: jest.fn().mockImplementation(
      () => { throw new Error({ message: 'Internal Server Error'}) }
      ),
  }),
}));

const mockGetMailContents = [
  {
    id_flow: 4,
    flow: "fluxo b",
    process_record: "testeemail",
    process: "123456",
    id_stage: 3,
    stage: "etapa c",
    start_date: "2023-01-21T01:06:14.465Z",
    stage_duration: 2,
    email: "pedrozinho@email.com\n",
    delay_days: "4",
  },
  {
    id_flow: 4,
    flow: "fluxo b",
    process_record: "testeemail",
    process: "123456",
    id_stage: 3,
    stage: "etapa c",
    start_date: "2023-01-21T01:06:14.465Z",
    stage_duration: 2,
    email: "pedro@email.com\n",
    delay_days: "4",
  },
  {
    id_flow: 4,
    flow: "fluxo b",
    process_record: "testeemail",
    process: "123456",
    id_stage: 3,
    stage: "etapa c",
    start_date: "2023-01-21T01:06:14.465Z",
    stage_duration: 2,
    email: "gdbbdb@email.com\n",
    delay_days: "4",
  },
];

const mockCreateTransport = jest.fn(() => ({
  sendMail: jest.fn(),
}));

beforeEach(() => {
  jest.resetModules();
});

jest.mock("../../src/config/database.js", () => {
  const connection = {
    query: jest.fn(),
  };

  return {
    connection,
  };
});

describe("Tests mailer functions", () => {
  
  describe("Tests for functions sendEmail", () => {  
    it("should return true if sends processes", async () => {
      let mailer = new Mailer();
      mailer.getMailContents = jest.fn(() => mockGetMailContents);
      const result = await mailer.sendEmail();
      expect(result).toBe(false);

    })
  });
      
});