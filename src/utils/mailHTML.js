export const mailHTML =
`
<head>
    <style type="text/css" nonce="ttLM1KSStHbTYiv1YRCYpA">
      body,td,div,p,a,input {font-family: arial, sans-serif;}
    </style>
    <style type="text/css" nonce="ttLM1KSStHbTYiv1YRCYpA">
      body, td {font-size:13px} a:link, a:active {color:#1155CC; text-decoration:none} a:hover {text-decoration:underline; cursor: pointer} a:visited{color:##6611CC} img{border:0px} pre { white-space: pre; white-space: -moz-pre-wrap; white-space: -o-pre-wrap; white-space: pre-wrap; word-wrap: break-word; max-width: 800px; overflow: auto;} .logo { left: -7px; position: relative; }
        th{
          padding: 5px;
        }
    </style>
</head>
<body>
  <div class="bodycontainer">
    <div class="maincontent" style="font-family:Helvetica;font-size:13px;font-style:normal;font-weight:normal;letter-spacing:1px;line-height:130%;">
      <div style="background-color:#e5e5e5">
        <div style="display: flex; margin: auto; width:80%; max-width: 1400px; flex-direction: column; align-items: center;">
        <div style="background-color:#49546fa6; width:100%; height: 200px; display: flex; flex-direction: column;">
          <img src="cid:capju"  style="width:130px; height:80; margin-top: 20px; margin-left:20px; margin-bottom: 60px;"/>
          <div style="color: #ffffff; font-family:Helvetica;font-size:15px;font-style:normal;font-weight:normal;letter-spacing:1px; margin-left:20px;">
            Existem processos próximos de vencer e/ou vencidos.
          </div>
        </div>
        <div style="background-color:#ffffff; color:#555555; width: 100%; display: flex; flex-direction:column; padding-bottom: 60px;">
          <div style="margin-top:50px; margin-left: 37px; font-size: 15px;">
            Olá, [NOME]
          </div>
          <div style="margin-top:30px; margin-left: 37px; font-size: 15px;">
            Segue a lista de processos atrasados até a data de envio deste e-mail:
          </div>
          <div style="align-self: center; align-self:center;margin-top:30px;">

          <table class="fl-table" style="font-family:Helvetica;font-size:10px;font-style:normal;font-weight:normal; border:1px;">
                  <thead>
                  <tr>

                  <th style="background: #363c7a; color: #ffffff">Fluxo</th>
                  <th style="background: #363c7a; color: #ffffff">Processo</th>
                  <th style="background: #363c7a; color: #ffffff">Etapa</th>
                  <th style="background: #363c7a; color: #ffffff">Data de inicio</th>
                  <th style="background: #363c7a; color: #ffffff"> Duração (em dias) </th>
                  <th style="background: #363c7a; color: #ffffff">
                    Tempo atrasado (em dias)
                  </th>
                </tr>
                  </thead>
                  <tbody>
                  [TABELA] 
                  </tbody>
                </table>
                
          </div>
        </div>
        <div style="font-family:Helvetica;font-size:13px;font-style:normal;font-weight:normal;letter-spacing:1px;line-height:130%;text-align:left;color:#191919; align-self: flex-start; margin-left: 15px; margin-top: 15px;"> 
        <b style="font-size: 14px; font-family:Helvetica;">
          Abraços,<br>
            Equipe CAPJu
        </b>
        </div>
        <div style="font-family:Helvetica;font-size:13px;font-style:normal;font-weight:normal;letter-spacing:1px;line-height:130%;text-align:left;color:#191919; align-self: flex-start; margin-left: 15px; margin-top: 15px; margin-bottom: 15px;">
          Por favor, pedimos que você não responda esse e-mail, pois se trata de uma mensagem automática e não é possível dar continuidade com seu atendimento por aqui.
        </div>
        <div>
        </div>
      </div>
      </div>
    </div>
  </div>
</body>`;