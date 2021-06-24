import { init } from "emailjs-com";
import emailjs from "emailjs-com";
exports.modules = function SendMail(name, email, message) {
  init("user_BBzkjhkdtbK7YRIDepEkk");
    var templateParams = {
    name,
    email,
    message,
  };
  console.log(name);
  console.log(message);
  emailjs.send("service_esm769a", "template_1zfdb5a", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      if (response.status === 200) {
        console.log("setTransmission ok");
        return 
      }
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
};
