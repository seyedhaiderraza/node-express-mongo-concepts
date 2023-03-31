//sending mail using SMTP, receive mail using IMAP/IPOP protocols

/*
1. get nodemailer module
2. create async method for sendmail
3. sendmail -> createTransport -> host,port,secure,auth(user,pwd)
        ->user, pwd generate from ethereal fake email service
4. createTransport.sendMail({}) -> from, to, subject, text
5. check ethereal account for received mail
*/

const nodeMailer = require('nodemailer')

const sendMail = async(req, res) => {
    //let testAccount = await nodeMailer.createTestAccount()
    let testTransport = await nodeMailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: 'madyson.connelly1@ethereal.email',
            pass: 'Xmx6ZdRMU3z7DYDrrm'
        }
    });
    let mailInfo = await testTransport.sendMail({
        from: '"Haider R" <raza786.haider@gmail.com>', // sender address
        to: "raza786.haider@gmail.com", // list of receivers
        subject: "Hello ✔ nodemailer test ethereal", // Subject line
        text: "This is a nodemailer email send with fake ethereal account",
    })
    console.log('Message Send %s', mailInfo.messageId);
    res.json(mailInfo)

};

module.exports = sendMail