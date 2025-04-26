import express from 'express'
import nodemailer from 'nodemailer'
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail', // Use Gmail (or any other SMTP service)
  auth: {
    user: 'siddharth.official.swe@gmail.com', // Your email address
    pass: '$1dd4u@SWE',  // Your email password or app-specific password
  },
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'your-email@gmail.com', // Your email address where you want to receive notifications
    subject: `Message from ${name}`,
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Failed to send message');
    }
    console.log('Email sent: ' + info.response);
    return res.status(200).send('Message sent successfully');
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
