const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handler');
const  nodemailer = require('nodemailer');
var path    = require("path");
var urlencodedParser = bodyParser.urlencoded({ extended: true });

const app = express();


app.post('/you', urlencodedParser, function (req, res){
  var total = req.body.paisa;
  
  
  
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'useremail',
      pass: 'userpass'
    }
  });
  
  var mailOptions = {
    from: 'useremail',
    to: 'clientemail',
    subject: 'Sending Email using Node.js',
    html: '<h1>total to pay '+ total +' </h1>',
    text: 'Your invoice Thank u !'
  };
  
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

 });



   
  app.use(express.static('public'));
  app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
   
  });
  

app.listen(3000, () => console.log('server started...'));
