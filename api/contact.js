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

    // EMAIL 2 — Confirmation to client
    const confirmationHtml = `
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
              <p style="color:#F97316;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin:0 0 12px;">Message received</p>
              <h1 style="color:#ffffff;font-size:24px;font-weight:700;margin:0 0 16px;line-height:1.3;">Hey ${name}, got your message! 👋</h1>
              <p style="color:#888888;font-size:15px;line-height:1.7;margin:0 0 24px;">
                Thanks for reaching out. I've received your message and will get back to you within <span style="color:#F97316;font-weight:600;">24 hours</span>. I'm looking forward to learning more about your project.
              </p>

              <!-- Message recap -->
              <div style="background:#1a1a1a;border:1px solid #252525;border-left:3px solid #F97316;border-radius:0 12px 12px 0;padding:20px 24px;margin-bottom:28px;">
                <p style="color:#555555;font-size:11px;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;">Your message</p>
                <p style="color:#cccccc;font-size:14px;line-height:1.7;margin:0;">${message}</p>
              </div>

              <!-- What happens next -->
              <div style="margin-bottom:28px;">
                <p style="color:#ffffff;font-size:14px;font-weight:600;margin:0 0 16px;">What happens next?</p>
                <div style="display:flex;align-items:flex-start;margin-bottom:12px;">
                  <span style="background:#F97316;color:#0a0a0a;font-size:11px;font-weight:700;width:22px;height:22px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;line-height:22px;text-align:center;">1</span>
                  <p style="color:#888888;font-size:14px;margin:0;line-height:1.6;">I'll review your message and understand your requirements</p>
                </div>
                <div style="display:flex;align-items:flex-start;margin-bottom:12px;">
                  <span style="background:#F97316;color:#0a0a0a;font-size:11px;font-weight:700;width:22px;height:22px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;line-height:22px;text-align:center;">2</span>
                  <p style="color:#888888;font-size:14px;margin:0;line-height:1.6;">I'll get back to you within 24 hours with my thoughts</p>
                </div>
                <div style="display:flex;align-items:flex-start;">
                  <span style="background:#F97316;color:#0a0a0a;font-size:11px;font-weight:700;width:22px;height:22px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;line-height:22px;text-align:center;">3</span>
                  <p style="color:#888888;font-size:14px;margin:0;line-height:1.6;">We'll hop on a quick call or chat to finalize everything</p>
                </div>
              </div>

              <!-- CTA -->
              <div style="text-align:center;">
                <a href="https://kartik-portfolio-rose.vercel.app"
                   style="display:inline-block;background:#F97316;color:#0a0a0a;font-size:14px;font-weight:700;padding:14px 32px;border-radius:10px;text-decoration:none;letter-spacing:0.3px;">
                  View My Portfolio →
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div style="padding:20px 32px;border-top:1px solid #1a1a1a;">
              <p style="color:#444444;font-size:12px;margin:0 0 8px;text-align:center;">Kartik Bhardwaj · Full-Stack & AI Developer</p>
              <p style="color:#333333;font-size:11px;margin:0;text-align:center;">
                <a href="https://github.com/kartikbhardwajdev-27" style="color:#444444;text-decoration:none;">GitHub</a>
                &nbsp;·&nbsp;
                <a href="https://www.instagram.com/kartikbhardwaj.in/" style="color:#444444;text-decoration:none;">Instagram</a>
              </p>
            </div>
          </div>

          <p style="color:#333333;font-size:11px;text-align:center;margin-top:24px;">You're receiving this because you reached out via kartik-portfolio-rose.vercel.app</p>
        </div>
      </div>
    `;

    // Send both emails simultaneously
    await Promise.all([
      resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: 'kartik.bhwaj@gmail.com',
        subject: `🔥 New inquiry from ${name}`,
        html: notificationHtml,
      }),
      resend.emails.send({
        from: 'Kartik Bhardwaj <onboarding@resend.dev>',
        to: email,
        subject: `Got your message, ${name}! I'll be in touch soon.`,
        html: confirmationHtml,
      }),
    ]);

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
