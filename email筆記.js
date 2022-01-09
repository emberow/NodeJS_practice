var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'c107151149@nkust.edu.tw',
    pass: 'E125852470'
  }
});

var mailOptions = {
  from: 'c107151149@nkust.edu.tw',
  to: 'chin45630@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});