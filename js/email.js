import { SMTPClient, Message } from '../lib/email.min.js';

const sendEmail = () => {
    const client = new SMTPClient({
        user: 'Wynnyard Registration',
        password: 'passwordStrong',
        host: 'smtp-mail.outlook.com',
        tls: {
            ciphers: 'SSLv3',
        },
    });

    
    const message = new Message({
        text: 'i hope this works',
        from: 'wynyardregistration@outlook.com',
        to: 'jasonalexanderyuwono@gmail.com',
        cc: '',
        subject: 'testing emailjs',
        attachment: [
            { data: '<html>i <i>hope</i> this works!</html>', alternative: true },
            // { path: 'path/to/file.zip', type: 'application/zip', name: 'renamed.zip' },
        ],
    });
    
    // send the message and get a callback with an error or details of the message that was sent
    client.send(message, (err, message) => {
        console.log(err || message);
    });
    
  };
  
  export { sendEmail };