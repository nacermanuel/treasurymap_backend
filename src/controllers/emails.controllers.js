const transporter = require("../utils/nodemailer");

const sendEmail = async (req, res, next) => {
  try {
    const { company, message, name, email } = req.body;
    const result = await transporter.sendMail({
      to: "treasury.map.project@gmail.com",
      subject: `${name}, ${company} - From Contact Us`,
      html: `
      <p>Email del cliente: ${email}</p>
      <p>
      ${message}
      </p>`,
    });
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  sendEmail,
};
