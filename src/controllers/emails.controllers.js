const transporter = require("../utils/nodemailer");

const sendEmail = async (req, res, next) => {
  try {
    const { company, message, name, email } = req.body;
    const result = await transporter.sendMail({
      to: "treasury.map.project@gmail.com",
      subject: `From Contact Us - ${name}, ${company} `,
      html: `
      <p>Email: ${email}</p>
      <p>Company: ${company}</p>
      <p>Name: ${name}</p>
      <p>Message: ${message}</p>
      `
      
    });
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  sendEmail,
};
