const nodemailer = require("nodemailer")

const getText = ({ link, email, message }) =>
`Link: ${link}

From: ${email ? email : '---'}

Message: ${message ? message : '---'}`

async function submitRoute(req, res) {
  if (req.method === 'POST') {
    let transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"${process.env.EMAIL_USER}" <${process.env.EMAIL_USER}>`,
      to: `"${process.env.EMAIL_USER}" <${process.env.EMAIL_USER}>`,
      subject: "Weekly Resource Submission",
      text: getText(req.body),
    });

    console.log("Message sent: %s", info.messageId);

    return res.status(200).json({})
  } else {
    return res.status(404).send()
  }
}

export default submitRoute
