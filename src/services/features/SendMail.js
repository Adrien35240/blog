import { init } from "emailjs-com";
import emailjs from "emailjs-com";
 async function SendMail (name, email, message) {
  init("user_BBzkjhkdtbK7YRIDepEkk");
    var templateParams = {
    name,
    email,
    message,
  };

  await emailjs.send("service_esm769a", "template_1zfdb5a", templateParams).then(
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