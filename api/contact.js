import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // EMAIL 1 — Notification to Kartik
    const notificationHtml = `
      <div style="background:#0a0a0a;min-height:100vh;padding:40px 20px;font-family:'Helvetica Neue',Arial,sans-serif;">
        <div style="max-width:560px;margin:0 auto;">

          <!-- Header -->
          <div style="text-align:center;margin-bottom:32px;">
            <span style="font-size:28px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">KB<span style="color:#F97316;">.</span></span>
          </div>

          <!-- Card -->
          <div style="background:#111111;border:1px solid #252525;border-radius:16px;overflow:hidden;">

            <!-- Orange top bar -->
            <div style="height:4px;background:#F97316;"></div>

            <!-- Body -->
            <div style="padding:36px 32px;">
              <p style="color:#F97316;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin:0 0 12px;">New message received</p>
              <h1 style="color:#ffffff;font-size:24px;font-weight:700;margin:0 0 24px;line-height:1.3;">You got a new inquiry 🔥</h1>

              <!-- Details -->
              <div style="background:#1a1a1a;border:1px solid #252525;border-radius:12px;padding:24px;margin-bottom:24px;">
                <table style="width:100%;border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #252525;vertical-align:top;">
                      <span style="color:#666666;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Name</span>
                    </td>
                    <td style="padding:10px 0;border-bottom:1px solid #252525;text-align:right;">
                      <span style="color:#ffffff;font-size:14px;font-weight:500;">${name}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #252525;vertical-align:top;">
                      <span style="color:#666666;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Email</span>
                    </td>
                    <td style="padding:10px 0;border-bottom:1px solid #252525;text-align:right;">
                      <a href="mailto:${email}" style="color:#F97316;font-size:14px;font-weight:500;text-decoration:none;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;vertical-align:top;">
                      <span style="color:#666666;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Message</span>
                    </td>
                    <td style="padding:10px 0;text-align:right;">
                      <span style="color:#ffffff;font-size:14px;line-height:1.6;">${message}</span>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Reply button -->
              <div style="text-align:center;">
                <a href="mailto:${email}?subject=Re: Your inquiry&body=Hi ${name},%0D%0A%0D%0AThanks for reaching out! "
                   style="display:inline-block;background:#F97316;color:#0a0a0a;font-size:14px;font-weight:700;padding:14px 32px;border-radius:10px;text-decoration:none;letter-spacing:0.3px;">
                  Reply to ${name} →
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div style="padding:20px 32px;border-top:1px solid #1a1a1a;text-align:center;">
              <p style="color:#444444;font-size:12px;margin:0;">Sent from your portfolio contact form · kartik-portfolio-rose.vercel.app</p>
            </div>
          </div>
        </div>
      </div>
    `;

    // Send the notification email
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'kartik.bhardwaj.dev@gmail.com',
      subject: `🔥 New inquiry from ${name}`,
      html: notificationHtml,
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
