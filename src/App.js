import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { ToastContainer, toast, Slide } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Loading from '../src/components/Loading';

import "./App.css"

export default function App() {


  const form = useRef();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [fromEmail] = useState("");
  const [fromName, setFromName] = useState("");
  const [titulo, setTitulo] = useState("");

  const [isLoading, setIsLoading] = useState(false)



  const cardEntrega = "https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/890277_874524/editor_images/92a169cb-3300-40b5-b148-80dbdb39c1bb.png"
  const cardCaixa = "https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/890277_874524/editor_images/65874763-2a9c-4bbb-a369-cf2a6ff23400.png"
  const cardResultado = "https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/890277_874524/editor_images/3e04a3b3-94b1-4fe1-81b5-483654387a07.png"
  const cardAtendimento = "https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/890277_874524/editor_images/30e2e3ca-58cd-486b-8a95-fe93313ed02c.png"

  const [cardBg, setCardBg] = useState(cardAtendimento);



  const sendParams = {
    to_email: email,
    to_name: name,
    message: message,
    fromName: fromName,
    from_email: fromEmail,
    html: `<head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
    <style>
      * {
        box-sizing: border-box;
      }
  
      body {
        margin: 0;
        padding: 0;
      }
  
      a[x-apple-data-detectors] {
        color: #2d5551 !important;
        text-decoration: inherit !important;
      }
  
      #MessageViewBody a {
        color: #2d5551;
        text-decoration: none;
      }
  
      p {
        line-height: inherit
      }
  
      .desktop_hide,
      .desktop_hide table {
        mso-hide: all;
        display: none;
        max-height: 0px;
        overflow: hidden;
      }
  
      @media (max-width:500px) {
        .desktop_hide table.icons-inner {
          display: inline-block !important;
        }
  
        .icons-inner {
          text-align: center;
        }
  
        .icons-inner td {
          margin: 0 auto;
        }
  
        .row-content {
          width: 100% !important;
        }
  
        .mobile_hide {
          display: none;
        }
  
        .stack .column {
          width: 100%;
          display: block;
        }
  
        .mobile_hide {
          min-height: 0;
          max-height: 0;
          max-width: 0;
          overflow: hidden;
          font-size: 0px;
        }
  
        .desktop_hide,
        .desktop_hide table {
          display: table !important;
          max-height: none !important;
        }
      }
    </style>
  </head>
  
  <body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
    <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; background-image: url(${cardBg}); background-position: top center; background-size: auto; background-repeat: no-repeat;">
      <tbody>
        <tr>
          <td>
            <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
              <tbody>
                <tr>
                  <td>
                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 450px;" width="450">
                      <tbody>
                        <tr>
                          <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                            <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                              <tr>
                                <td class="pad" style="text-align:center;width:100%;padding-top:60px;">
                                  <h1 style="margin: 0; color:#003c3b ; direction: ltr; font-family: Helvetica, Helvetica Neue, Helvetica, sans-serif; font-size: 24px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">${titulo}</span></h1>
                                </td>
                              </tr>
                            </table>
                            <table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                              <tr>
                                <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px;">
                                  <div style="color:#003c3b;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:justify;mso-line-height-alt:19.2px;">
                                    <p style="margin: 0;">${message}</p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table class="paragraph_block block-5" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                              <tr>
                                <td class="pad">
                                  <div style="color:#003c3b;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:15px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:16.8px;">
                                    <p style="margin: 0;">&nbsp; &nbsp; &nbsp;Abraços, ${fromName} da Manual!&nbsp;</p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table class="paragraph_block block-7" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                              <tr>
                                <td class="pad" style="padding-top:25px;">
                                  <div style="color:#031900;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:justify;mso-line-height-alt:19.2px;"></div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
              <tbody>
                <tr>
                  <td>
                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 450px;" width="450">
                      <tbody>
                        <tr>
                          <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                            <div class="spacer_block" style="height:415px;line-height:55px;font-size:1px;">&#8202;</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
              <tbody>
                <tr>
                  <td>
                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 450px;" width="450">
                      <tbody>
                        <tr>
                          <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                            <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                              <tr>
                                <td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                    <tr>
                                      <td class="alignment" style="vertical-align: middle; text-align: center;">
                                        <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                        <!--[if !vml]><!-->
                                        <table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation">
                                          <!--<![endif]-->
                                          <tr>
                                            <td style="font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 15px; color: #9d9d9d; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="https://www.designedwithbee.com/" target="_blank" style="color: #9d9d9d; text-decoration: none;"></a></td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table><!-- End -->
  </body>
  
  `

  }

  const sendEmail = (e) => {
    const notify = () =>
      toast.error("Houve um erro no envio", {
        position: "top-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    const notifySuccess = () =>
      toast.success("E-mail com o card enviado!", {
        position: "top-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });


    e.preventDefault();
    setIsLoading(true);
    emailjs.send('service_26q3uhg', 'template_i0zxgbl', sendParams, 'al70E8s8MFY9LLhTe')

      .then(

        (result) => {
          setIsLoading(false);
          console.log(result.text);
          notifySuccess();

        }, (error) => {
          setIsLoading(false);
          console.log(error.text);
          notify();
        });
  };

  return (

    <body>
      <ToastContainer transition={Slide} />


      <Container className='mt-0 d-flex justify-content-center '>

        <form className='bg-white w-75 d-flex flex-column p-4' ref={form} onSubmit={sendEmail}>
          <h1 className='mt-3 mb-3 w-100 text-center'>Fábrica de WOW Card </h1>
          <div className='d-flex justify-content-between'><div className='forminput w-50'><label className="">Nome do Cliente</label>
          <input className="w-100" value={name}
            onChange={(event) => {
              setName(event.target.value);
            }} type="text" required />
          <label className="mt-3">Título do Card</label>
          <input className="w-100" value={titulo}
            onChange={(event) => {
              setTitulo(event.target.value);
            }} type="text" maxLength={36} required />
          <label className="mt-3">E-mail do Agente</label>
          <input className="w-100" value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }} type="email" required />
          <label className="mt-3">Nome do Agente</label>
          <input className="w-100" value={fromName}
            onChange={(event) => {
              setFromName(event.target.value);
            }} type="text" name='fromName' required /></div>
          <img className='img-fluid logoverde align-self-center'src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjcyMSAzNS42MTFjLS42NzkgMC0xLjEwMy0uNTE1LTEuMTAzLTEuMzU4IDAtMy45ODUgNy45MDYtMTMuMDM2IDE1Ljc5My0yMC43MDgtMS4zMzMgOC42MTYtMTAuMTQ1IDIyLjA2Ni0xNC42OSAyMi4wNjZNMzkuMDI0LjAwM2MtMS4wODUuMDI2LTMuMzEyLjExLTUuMjY1LjEzOC0uNjg3LjAxLS45NjEuMzE5LS44NzMuNzYyLjEwMy41MjIuNDQ3LjkwOS45NjUuOTIyLjY2Ny4wMTggMS41Ni0uMDkzIDIuNzA1LS4xNS0yLjYwMyAyLjAwMy01Ljc1MiA0LjYzNS05LjAwMSA3LjU2NC0uMzgyLTIuOTQ3LTEuNzQ4LTUuMzAzLTQuNDM1LTUuMzAzLTMuOTA3IDAtNy44MTMgNS45NDUtOS41MTEgOS4yNTYtLjE3LTIuNzE3LTEuMzU5LTUuMjY1LTMuOTA3LTUuMjY1QzQuNDA2IDcuOTI3IDAgMTkuOTggMCAyMS43ODRjMCAuNjE2LjcwNSAxLjA5IDEuMTMgMS4wOS41MSAwIC42NzUtLjI1NS44NDUtLjg1IDIuMjA4LTcuMjE4IDUuNTItMTIuMjI4IDcuNzI3LTEyLjIyOCAxLjEwNCAwIDEuOTU0IDEuMjczIDEuOTU0IDQuMjQ2IDAgMi4xODYtLjM3MyAzLjUxNC0uMzczIDQuMDMyIDAgLjgxLjcxMiAxLjIzMyAxLjEzNyAxLjIzMy41MSAwIC42OC0uMjU1LjkzNC0uODUgMi41NDgtNi4yODQgNi43MDktMTIuNTY4IDkuNjgtMTIuNTY4IDEuNDY0IDAgMi40NiAxLjg3IDIuNTQyIDUuMTYtOC45MSA4LjI2Ny0xNy44ODkgMTguMjMtMTcuODg5IDIzLjEzIDAgMi4wNCAxLjEyNSAzLjIxNiAyLjk1IDMuMjE2IDYuNTUxIDAgMTYuODA0LTE2LjI4MyAxNy4wMjgtMjYuMDA2IDMuNjQ1LTMuNDMgNy4xMjItNi40MjYgOS42MjQtOC4zMzItLjM4Ni45NTYtLjc3NCAxLjg4Ni0uOTcxIDIuNTgtLjE0NS41MDctLjA1NyAxLjA2NS41NjcgMS4zMDguMzk1LjE1My43NDYtLjA3LjktLjUxLjk0MS0yLjY4MyAxLjQyNS0zLjc4MyAyLTUuMzE4LjM3Ny0xLjAwNC4zMzYtMS4xNC0uNzYtMS4xMTQiIGZpbGw9IiMwQjNCM0MiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==' alt=''/>
           </div>
         <div className=' mt-5'> <label className="mt-3">Texto do Card</label></div>
          <textarea className="w-100 message" value={message}
            maxLength={360}
            onChange={(event) => {
              setMessage(event.target.value);
            }} name="message" required />

          <div className='d-flex align-items-center justify-content-between'>
            <div className='forminput w-50'> <label className="mt-3" for="exampleFormControlSelect1">Card WOW</label>
              <select role="button" className="form-control w-100" id="exampleFormControlSelect1" onChange={(event) => { setCardBg(event.target.value); console.log(cardBg) }}>
                <option value={cardAtendimento}>Atendimento</option>
                <option value={cardEntrega}>Entrega</option>
                <option value={cardCaixa}>Caixa</option>
                <option value={cardResultado}>Resultado</option>
              </select></div>
            <img src={cardBg} alt='' className='img-fluid cardicone w-25 mt-4' /></div>

          {isLoading ? <Loading /> : <div className='mt-3 w-100 d-flex justify-content-center'>
            <input className='mr-2 botoes rounded-4 mt-3 w-25 align-self-center' type="submit" value="Enviar" />
            <input onClick={(event) => {
              setName("");
              setEmail("");
              setFromName("");
              setTitulo("");
              setMessage("");
            }} className='botoes rounded-4 mt-3 w-25 align-self-center' type="reset" value="Limpar" />
          </div>}
        </form>
      </Container></body>
  );
};