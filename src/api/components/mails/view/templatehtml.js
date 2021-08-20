const mjml2html = require('mjml');

exports.templateMessage = ({ data }) => {
  console.log("data", data);
  const htmlOutput = mjml2html(`
    <mjml>
      <mj-body>
        <mj-section>
          <mj-column>
            <mj-image width="270px" src="https://bluesensor-assets.s3-us-west-2.amazonaws.com/LOGO_H_Negativ.png"></mj-image>
            <mj-divider border-color="#002447"></mj-divider>
            <mj-text >
              <h2>Solicitud de información</h2>
              <p>Hola,<p>
              <br/>
              <p>Hemos recibido una solicitud de información del siguiente cliente: </p>
              <p><b>Nombre:</b> ${data.name}</p>
              <p><b>Correo:</b> ${data.email}</p>
              <p><b>Telefono:</b> ${data.phone}</p>
              <p><b>Mensaje:</b> ${data.message}</p>
              <p><b>Número de Hectáreas:</b> ${data.hectares}</p>
              <p><b>Buscando:</b> ${data.searching} </p>
              <p><b>Tipo:</b> ${data.type}</p>
              <br/>
            </mj-text>
          </mj-column>
        </mj-section>

        <mj-section background-color="#f7f7f7">
          <mj-column>
            <mj-social font-size="15px" icon-size="30px" mode="horizontal">
              <mj-social-element name="facebook" href="https://www.facebook.com/BlueSensor-224470588308799">
              </mj-social-element>
              <mj-social-element  name="instagram" href="https://www.instagram.com/bluesensor">
              </mj-social-element>
              <mj-social-element name="web" href="https://bluesensordata.com/">
              </mj-social-element>
            </mj-social>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  `);
  return htmlOutput.html;
};
