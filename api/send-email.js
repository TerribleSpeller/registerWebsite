
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { to, subject, text } = req.body;

        // Create a transporter object using Outlook's SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.office365.com', // Outlook SMTP server
            port: 587, // TLS port
            secure: false, // Use TLS
            auth: {
                user: "wynyardregistration@outlook.com", // your Outlook email address
                pass: passwordStrong, // your Outlook password
            },
            tls: {
                ciphers: 'SSLv3'
            }
        });

        try {
            // Send email
            await transporter.sendMail({
                from: `"Your Name" wynyardregistration@outlook.com`, // sender address
                to, // list of receivers
                subject, // Subject line
                text, // plain text body
            });

            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to send email', details: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configure the transporter with your Outlook SMTP settings
    const transporter = nodemailer.createTransport({
      service: 'Outlook365',
      auth: {
        user: 'wynyardregistration@outlook.com', //process.env.OUTLOOK_USER,  // Your Outlook email address
        pass: 'passwordStrong',//process.env.OUTLOOK_PASS,  // Your Outlook email password
      },
    });

    // Compose the email
    const mailOptions = {
      from: 'wynyardregistration@outlook.com',
      to: 'jasonaelxanderyuwono@gmail.com',  // Replace with the recipient's email address
      subject: `New message from ${name}`,
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
