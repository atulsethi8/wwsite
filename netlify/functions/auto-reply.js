// netlify/functions/auto-reply.js
exports.handler = async (event) => {
  try {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method not allowed' };
    }

    const { name = '', email, phone = '', page = '' } = JSON.parse(event.body || '{}');
    if (!email) return { statusCode: 400, body: 'Email required' };

    const html = `
      <div style="font-family:Poppins,Arial,sans-serif;color:#222;max-width:600px;margin:auto;padding:20px;border-radius:12px;background:#f9fafb;">
        <img src="https://www.wanderwyze.com/images/logo.png" alt="Wander Wyze Holidays" style="width:180px;margin-bottom:20px;">
        <h2 style="color:#00a67d;">Hey ${name || 'Traveler'},</h2>
        <p>Thank you for connecting with <strong>Wander Wyze Holidays</strong>!</p>
        <p>Your enquiry has been received. Our travel expert will reach out within 24 hours with options that match your travel style.</p>
        <ul>
          <li><a href="https://www.wanderwyze.com/kenya-safari-packages" style="color:#00a67d;">🐘 Kenya Safaris</a></li>
          <li><a href="https://www.wanderwyze.com/vietnam-tour-packages" style="color:#00a67d;">🌿 Vietnam Tours</a></li>
          <li><a href="https://www.wanderwyze.com/dubai-combo-deals" style="color:#00a67d;">🏙️ Dubai Holiday Deals</a></li>
        </ul>
        <p style="margin-top:12px;">Page: ${page || '-'}</p>
        <p>🌍 <em>Your Journey, Our Expertise.</em></p>
        <p>Warm Regards,<br><strong>Ravinder Singh</strong><br>
        📧 <a href="mailto:ravi@wanderwyze.com">ravi@wanderwyze.com</a> | 📱 +91&nbsp;98338&nbsp;34836</p>
      </div>`;

    const payload = {
      from: { email: process.env.MAILERSEND_FROM || 'travel@wanderwyze.com', name: 'Wander Wyze Holidays' },
      to: [{ email }],
      subject: 'Welcome to Wander Wyze Holidays — Your Journey, Our Expertise!',
      html,
      text: `Hey ${name || 'Traveler'}, thanks for contacting Wander Wyze Holidays. We'll reach out within 24 hours.`
    };

    const r = await fetch('https://api.mailersend.com/v1/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MAILERSEND_TOKEN}`
      },
      body: JSON.stringify(payload)
    });

    const body = await r.text();
    return { statusCode: r.ok ? 200 : 500, body: r.ok ? '{"ok":true}' : body };
  } catch (e) {
    return { statusCode: 500, body: e.message };
  }
};
