import HtmlFragment from "../components/HtmlFragment";
import useDocumentTitle from "../hooks/useDocumentTitle";
import usePageStyles from "../hooks/usePageStyles";
import { pageMarkup } from "../lib/rawContent";

export default function ServicesPage() {
  useDocumentTitle("Services");
  usePageStyles(["/assets/css/style.css"], "page-services");

  return <HtmlFragment html={pageMarkup.services} />;
}
