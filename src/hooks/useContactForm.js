import { useEffect, useRef, useState } from "react";

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };
const NOTIFICATION_DURATION = 8000;

/** Controlled contact form state: field values, submit status, and a
 * self-dismissing notification — talks to /api/contact directly. */
export default function useContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [notification, setNotification] = useState(null); // { type, message } | null
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const hideTimerRef = useRef(null);
  const removeTimerRef = useRef(null);
  const showTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      window.clearTimeout(hideTimerRef.current);
      window.clearTimeout(removeTimerRef.current);
      window.clearTimeout(showTimerRef.current);
    };
  }, []);

  const dismissNotification = () => {
    window.clearTimeout(hideTimerRef.current);
    window.clearTimeout(removeTimerRef.current);
    setIsNotificationVisible(false);
    removeTimerRef.current = window.setTimeout(() => setNotification(null), 300);
  };

  const showNotification = (type, message) => {
    window.clearTimeout(hideTimerRef.current);
    window.clearTimeout(removeTimerRef.current);
    window.clearTimeout(showTimerRef.current);

    setNotification({ type, message });
    setIsNotificationVisible(false);
    showTimerRef.current = window.setTimeout(() => setIsNotificationVisible(true), 10);

    hideTimerRef.current = window.setTimeout(() => {
      setIsNotificationVisible(false);
      removeTimerRef.current = window.setTimeout(() => setNotification(null), 300);
    }, NOTIFICATION_DURATION);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setFormData(INITIAL_FORM);
      showNotification("success", data.message || "Thank you! Your message has been sent successfully.");
    } catch (error) {
      setStatus("error");
      showNotification("error", error.message || "Something went wrong. Please try again.");
    }
  };

  return {
    formData,
    status,
    notification,
    isNotificationVisible,
    dismissNotification,
    handleChange,
    handleSubmit,
  };
}
