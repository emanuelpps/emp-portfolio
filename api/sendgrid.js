import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SG.SENDGRID_API_KEY);

async function sendEmail(req, res) {
    try {
      await sendgrid.send({
        to: "emanuelpages.ps@gmail.com",
        from: `${req.body.email}`,
        subject: `${req.body.subject}`,
        html: `<div>You've got a mail</div>`,
      });
    } catch (error) {
      // console.log(error);
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  
    return res.status(200).json({ error: "" });
  }
  
  export default sendEmail;