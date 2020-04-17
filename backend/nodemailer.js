const nodemailer = require('nodemailer');
let fs = require('fs');
let config;


fs.readFile('config/config.json', (err, content) => {
  if (err) return console.log('Error loading config file: ', err);
  config = JSON.parse(content);
});



function sendMessage(studentInfo, callback) {
  const { service, from, to, password } = config.credantials.email;

  try {

    const transporter = nodemailer.createTransport({
      service: service,
      auth: {
        user: from,
        pass: password
      }
    });

    const message = {
      from: from,
      to: to,
      subject: studentInfo.subject,
      text: studentInfo.text,
      html: studentInfo.html,
      attachments: studentInfo.attachments
    };

    transporter.sendMail(message, function (error, info) {
      if (error) {
        callback(error);
      } else {
        callback(null, "Email sent: " + info.response);

      }
    })
  }
  catch (error) {
    return callback(error, "Error");
  }

}


module.exports.sendMessage = sendMessage;