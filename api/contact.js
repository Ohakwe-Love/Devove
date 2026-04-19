const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 80;
const MAX_SUBJECT_LENGTH = 140;
const MAX_MESSAGE_LENGTH = 5000;

function normalizeSingleLine(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeMultiline(value) {
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getRequestBody(req) {
  if (!req.body) {
    return {};
  }

  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }

  return req.body;
}

function sendJson(res, statusCode, body) {
  res.status(statusCode).json(body);
}

function validatePayload({ name, email, subject, message }) {
  if (name.length < 2 || name.length > MAX_NAME_LENGTH) {
    return "Please enter a valid name.";
  }

  if (!EMAIL_PATTERN.test(email)) {
    return "Please enter a valid email address.";
  }

  if (subject.length < 3 || subject.length > MAX_SUBJECT_LENGTH) {
    return "Please enter a clear subject.";
  }

  if (message.length < 10 || message.length > MAX_MESSAGE_LENGTH) {
    return "Please enter a message with a bit more detail.";
  }

  return null;
}

function createHtmlMessage({ name, email, subject, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br>");

  return `
    <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
      <h1 style="font-size: 20px; margin-bottom: 16px;">New message from Devove</h1>
      <p style="margin: 0 0 8px;"><strong>Name:</strong> ${safeName}</p>
      <p style="margin: 0 0 8px;"><strong>Email:</strong> ${safeEmail}</p>
      <p style="margin: 0 0 16px;"><strong>Subject:</strong> ${safeSubject}</p>
      <div>
        <strong>Message:</strong>
        <p style="margin-top: 8px;">${safeMessage}</p>
      </div>
    </div>
  `.trim();
}

function createTextMessage({ name, email, subject, message }) {
  return [
    "New message from Devove",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    "",
    "Message:",
    message,
  ].join("\n");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { error: "Method not allowed." });
  }

  const body = getRequestBody(req);
  const payload = {
    name: normalizeSingleLine(body.name),
    email: normalizeSingleLine(body.email ?? body._replyto).toLowerCase(),
    subject: normalizeSingleLine(body.subject),
    message: normalizeMultiline(body.message),
  };

  const validationError = validatePayload(payload);
  if (validationError) {
    return sendJson(res, 400, { error: validationError });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error("Missing contact mail environment variables.");
    return sendJson(res, 500, {
      error: "Mail is not configured yet. Please contact me directly for now.",
    });
  }

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "User-Agent": "devove-contact-form/1.0",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: [payload.email],
        subject: `Devove Contact: ${payload.subject}`,
        html: createHtmlMessage(payload),
        text: createTextMessage(payload),
      }),
    });

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text();
      console.error("Resend email request failed:", resendResponse.status, errorBody);
      return sendJson(res, 502, {
        error: "I couldn't send your message right now. Please try again shortly.",
      });
    }

    return sendJson(res, 200, {
      ok: true,
      message: "Thank you! Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact mail handler failed:", error);
    return sendJson(res, 500, {
      error: "An unexpected error occurred while sending your message.",
    });
  }
}
