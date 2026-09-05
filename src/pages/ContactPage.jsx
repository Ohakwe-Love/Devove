import useDocumentTitle from "../hooks/useDocumentTitle";
import useContactForm from "../hooks/useContactForm";
import { ArrowRightShortIcon } from "../components/icons";

export default function ContactPage() {
  useDocumentTitle("Contact | Devove");
  const { formData, status, notification, isNotificationVisible, dismissNotification, handleChange, handleSubmit } =
    useContactForm();
  const isSubmitting = status === "submitting";

  return (
    <main>
      <section className="contact-info">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-con contact-col">
              {notification && (
                <div className={`contact-notification ${notification.type}${isNotificationVisible ? " show" : ""}`}>
                  <div className="notification-content">
                    <div className="notification-icon">
                      {notification.type === "success" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                        </svg>
                      )}
                    </div>
                    <div className="notification-message">{notification.message}</div>
                    <button className="notification-close" type="button" aria-label="Close notification" onClick={dismissNotification}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-header">
                  <h2>Get in Touch</h2>
                  <p>
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                    visions. Feel free to reach out through any of the platforms below.
                  </p>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                  </div>
                </div>

                <button type="submit" className="primary-btn animated-border" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <span>
                    <ArrowRightShortIcon />
                  </span>
                </button>
              </form>
            </div>

            <div className="contact-col">
              <div className="contact-img">
                <img src="/assets/images/contact-img.jpeg" alt="" />
              </div>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                      <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" />
                    </svg>
                  </div>
                  <h3>phone:</h3>
                  <a href="tel:+2348161452508">
                    <p className="border-line">+234 816 145 2508</p>
                  </a>
                </div>
                <div className="contact-method">
                  <div className="contact-icon">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
                        <path d="m2 6l6.913 3.917c2.549 1.444 3.625 1.444 6.174 0L22 6"></path>
                        <path d="M2.016 13.476c.065 3.065.098 4.598 1.229 5.733c1.131 1.136 2.705 1.175 5.854 1.254c1.94.05 3.862.05 5.802 0c3.149-.079 4.723-.118 5.854-1.254c1.131-1.135 1.164-2.668 1.23-5.733c.02-.986.02-1.966 0-2.952c-.066-3.065-.099-4.598-1.23-5.733c-1.131-1.136-2.705-1.175-5.854-1.254a115 115 0 0 0-5.802 0c-3.149.079-4.723.118-5.854 1.254c-1.131 1.135-1.164 2.668-1.23 5.733a69 69 0 0 0 0 2.952"></path>
                      </g>
                    </svg>
                  </div>
                  <h3>email:</h3>
                  <a href="mailto:ohakwemuna@gmail.com">
                    <p className="border-line">ohakwemuna@gmail.com</p>
                  </a>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                      <path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z" />
                    </svg>
                  </div>
                  <h3>LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/love-ohakwe/" target="_blank" rel="noreferrer">
                    <p className="border-line">LinkedIn Profile</p>
                  </a>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                  </div>
                  <h3>WhatsApp</h3>
                  <a href="https://wa.link/8fpf7c" target="_blank" rel="noreferrer">
                    <p className="border-line">WhatsApp Link</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
