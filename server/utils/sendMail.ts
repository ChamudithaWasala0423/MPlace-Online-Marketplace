import nodemailer, {Transporter} from 'nodemailer';
import ejs from 'ejs';
import path from 'path';
require('dotenv').config();

interface EmailOption {
    email: string;
    subject: string;
    tempalte: string;
    data: {[key : string]: any};
}

const sendMail = async (options: EmailOption): Promise <void> => {
    const transpoter: Transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT ||'587'),
        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD
        },
    });

    const {email, subject, tempalte, data} = options;

    //get the path to the email template file
    const templatePath = path.join(__dirname, `../mails`, tempalte);

    //render the email template  with EJS
    const html:string = await ejs.renderFile(templatePath, data);

    //send mail with defined transport object
    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject: subject,
        html
    };

    await transpoter.sendMail(mailOptions);

};


export default sendMail;