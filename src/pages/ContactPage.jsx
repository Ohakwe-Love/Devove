import HtmlFragment from "../components/HtmlFragment";
import useContactForm from "../hooks/useContactForm";
import useDocumentTitle from "../hooks/useDocumentTitle";
import usePageStyles from "../hooks/usePageStyles";
import { pageMarkup } from "../lib/rawContent";

export default function ContactPage() {
  useDocumentTitle("Contact Us");
  usePageStyles(["/assets/css/contact.css"], "page-contact");
  useContactForm();

  return <HtmlFragment html={pageMarkup.contact} />;
}
