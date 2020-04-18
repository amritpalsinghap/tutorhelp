let express = require("express");
var multer = require('multer')();
let config = require("./config/config.json");
let nodemailer = require('./nodemailer');
let app = express();
let node_port = config.developement.port;


app.use(express.json());


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//routes
app.get('/', (req, res) => res.send("Hello World from port 3000"));
app.post('/', multer.single('doc'), (req, res) => {

  let formData = req.body;
  formData.doc = req.file;
  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);

  // current month
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

  // current year
  let year = date_ob.getFullYear();

  // current hours
  let hours = date_ob.getHours();

  // current minutes
  let minutes = date_ob.getMinutes();

  // current seconds
  let seconds = date_ob.getSeconds();

  // intiate variable "dateAndTime" to save date & time in YYYY-MM-DD HH:MM:SS format
  let dateAndTime = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
  let subject = "New Student info" + dateAndTime;
  let emailAddress = formData.emailAddress;
  let fullName = formData.fullName;
  let language = formData.language;
  let description = formData.description;

  // intiate studentInfo object for nodemailer
  let studentInfo = {
    "subject": subject,
    "text": "New Student Info",
    "html": `<!doctype html>
    <html ⚡4email>
          <head>
          <meta charset="utf-8">
          </head>
          <body><h2>
          <label>Name : ${fullName}</label><br>
          <label>Email Address : ${emailAddress}</label><br>
          <label>Language : ${language}</label><br>
          <label>Description : ${description}</label><br>
          </h2></body>
          </html>`
  };

  //check if the user attach any file 
  if (!(typeof formData.doc == 'undefined')) {
    let attachment = {
      filename: formData.doc.originalname,
      content: formData.doc.buffer,
      contentType: formData.doc.mimetype
    };
    studentInfo.attachments = [attachment];
  }

  // call nodemailer to send email
  nodemailer.sendMessage(studentInfo, (err, message) => {
    let resultMessage, statusCode = 0;
    if (err) {
      statusCode = 500;
      resultMessage = 'Error While sending data: ' + err;
    } else {
      statusCode = 200;
      resultMessage = "Email sent Successfully: " + message;
    }
    res.status(statusCode).send(resultMessage);
  });
})

//server runing on port
app.listen(node_port, () => console.log('app listening on port 3000'));



