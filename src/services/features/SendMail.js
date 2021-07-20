import { init } from "emailjs-com";
import emailjs from "emailjs-com";
 async function SendMail (name, email, message) {
     const prism_user = process.env.REACT_APP_PRISM_USER
     const prism_serviceId=process.env.REACT_APP_PRISM_SERVICE_ID
     const prism_templateId=process.env.REACT_APP_PRISM_TEMPLATE_ID
  init(prism_user);
    let templateParams = {
    name,
    email,
    message,
  };

  await emailjs.send(prism_serviceId, prism_templateId, templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      if (response.status === 200) {
          console.log("setTransmission ok");
      }
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
};
export default SendMail