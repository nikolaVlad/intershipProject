import nodemailer from 'nodemailer'
import { User } from '../../db/models';


export const send = async (senderId, subject , message) =>
{   
    const existingUser = await User.findOne(
        {
            where : {id : senderId}
        }
    )

    const from = existingUser.email;

    try
    {
    
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'codeusgamesuport@gmail.com',
              pass:  'danmvxptcfnufpcr',
            },
            tls: {
              rejectUnauthorized: false,
            },
          });
    
          const mailOptions = {
            from: from,
            to: 'codeusgamesuport@gmail.com',
            subject: subject,
            replyTo: from,
            text: message,
            html: `<b>${message}</b>`,
          };
        
          const info = await transporter.sendMail(mailOptions);

          console.log(info);

          return info;
    }

    catch(error)
    {
        console.log(error);
        return error;
    }
    
}