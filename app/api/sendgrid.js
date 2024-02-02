import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res) {
  try {
    console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "emanuelpages.ps@gmail.com",
      from: `${req.body.email}`,
      subject: `${req.body.subject}`,
      html: `<div>You've got a mail</div>`,
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}
