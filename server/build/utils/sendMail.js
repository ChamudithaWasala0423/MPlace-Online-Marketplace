"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const ejs_1 = __importDefault(require("ejs"));
const path_1 = __importDefault(require("path"));
require('dotenv').config();
const sendMail = async (options) => {
    const transpoter = nodemailer_1.default.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD
        },
    });
    const { email, subject, tempalte, data } = options;
    //get the path to the email template file
    const templatePath = path_1.default.join(__dirname, `../mails`, tempalte);
    //render the email template  with EJS
    const html = await ejs_1.default.renderFile(templatePath, data);
    //send mail with defined transport object
    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject: subject,
        html
    };
    await transpoter.sendMail(mailOptions);
};
exports.default = sendMail;
