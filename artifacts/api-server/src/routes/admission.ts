import { Router } from "express";
import { Resend } from "resend";

const router = Router();

router.post("/admission-enquiry", async (req, res) => {
  const { parentName, email, phone, childClass, message } = req.body;

  if (!parentName || !phone) {
    res.status(400).json({ error: "Parent name and phone are required." });
    return;
  }

  const apiKey = process.env["RESEND_API_KEY"];
  if (!apiKey) {
    res.status(500).json({ error: "Email service not configured." });
    return;
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "NLSP School Admissions <onboarding@resend.dev>",
      to: ["lallerjaat97@gmail.com"],
      subject: `New Admission Enquiry from ${parentName}`,
      html: `
        <h2>New Admission Enquiry — NLSP School</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;">
          <tr><td style="padding:8px;font-weight:bold;background:#f3f4f6;">Parent's Name</td><td style="padding:8px;">${parentName}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f3f4f6;">Email</td><td style="padding:8px;">${email || "Not provided"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f3f4f6;">Phone</td><td style="padding:8px;">${phone}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f3f4f6;">Child's Class</td><td style="padding:8px;">${childClass || "Not specified"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f3f4f6;">Message</td><td style="padding:8px;">${message || "—"}</td></tr>
        </table>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to send email. Please try again." });
  }
});

export default router;
