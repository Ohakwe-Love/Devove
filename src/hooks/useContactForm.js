import { useEffect } from "react";

const CONTACT_ENDPOINT = "/api/contact";

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

function getFormField(form, name) {
  const field = form.elements.namedItem(name);
  return field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement ? field : null;
}

export default function useContactForm() {
  useEffect(() => {
    const contactForm = document.querySelector(".contact-form");

    if (!contactForm) {
      return undefined;
    }

    let activeNotificationTimeout = null;
    let removeNotificationTimeout = null;

    const showNotification = (type, message) => {
      const existingNotifications = document.querySelectorAll(".contact-notification");
      existingNotifications.forEach((notification) => notification.remove());

      const notification = document.createElement("div");
      notification.className = `contact-notification ${type}`;
      notification.innerHTML = `
        <div class="notification-content">
          <div class="notification-icon">
            ${
              type === "success"
                ? `
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                `
                : `
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                `
            }
          </div>
          <div class="notification-message">${message}</div>
          <button class="notification-close" type="button" aria-label="Close notification">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>
      `;

      contactForm.parentNode.insertBefore(notification, contactForm);

      const closeButton = notification.querySelector(".notification-close");
      closeButton?.addEventListener("click", () => notification.remove(), { once: true });

      window.setTimeout(() => notification.classList.add("show"), 10);

      activeNotificationTimeout = window.setTimeout(() => {
        notification.classList.remove("show");
        removeNotificationTimeout = window.setTimeout(() => notification.remove(), 300);
      }, 8000);
    };

    const handleSubmit = async (event) => {
      event.preventDefault();

      if (!contactForm.reportValidity()) {
        return;
      }

      const submitButton = contactForm.querySelector('button[type="submit"]');
      if (!submitButton) {
        return;
      }

      const originalButtonText = submitButton.innerHTML;
      const nameField = getFormField(contactForm, "name");
      const emailField = getFormField(contactForm, "email");
      const subjectField = getFormField(contactForm, "subject");
      const messageField = getFormField(contactForm, "message");

      if (!nameField || !emailField || !subjectField || !messageField) {
        showNotification("error", "The contact form is missing a required field.");
        return;
      }

      const formValues = {
        name: normalizeSingleLine(nameField.value),
        email: normalizeSingleLine(emailField.value).toLowerCase(),
        subject: normalizeSingleLine(subjectField.value),
        message: normalizeMultiline(messageField.value),
      };

      nameField.value = formValues.name;
      emailField.value = formValues.email;
      subjectField.value = formValues.subject;
      messageField.value = formValues.message;

      submitButton.disabled = true;
      submitButton.innerHTML = `
        <span style="display: inline-flex; align-items: center; gap: 8px;">
          <svg style="animation: spin 1s linear infinite; width: 16px; height: 16px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle style="opacity: 0.25;" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path style="opacity: 0.75;" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending...
        </span>
      `;

      try {
        const response = await fetch(CONTACT_ENDPOINT, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        });

        const responseBody = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(
            responseBody.error || "I couldn't send your message right now. Please try again.",
          );
        }

        showNotification(
          "success",
          responseBody.message || "Thank you! Your message has been sent successfully.",
        );
        contactForm.reset();
      } catch (error) {
        console.error(error);
        showNotification(
          "error",
          error.message || "An unexpected error occurred. Please try again or contact me directly.",
        );
      } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
      }
    };

    contactForm.addEventListener("submit", handleSubmit);

    return () => {
      contactForm.removeEventListener("submit", handleSubmit);
      if (activeNotificationTimeout) {
        window.clearTimeout(activeNotificationTimeout);
      }
      if (removeNotificationTimeout) {
        window.clearTimeout(removeNotificationTimeout);
      }
    };
  }, []);
}
