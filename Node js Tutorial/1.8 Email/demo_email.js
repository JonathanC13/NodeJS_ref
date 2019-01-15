// works but google security will block

var nodemailer = require('./node_modules/nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jonnyuchan@gmail.com',
    pass: 'R0berA01?'
  }
});

var mailOptions = {
  from: 'jonnyuchan@gmail.com',
  to: 'jonhschan@hotmail.com',
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
