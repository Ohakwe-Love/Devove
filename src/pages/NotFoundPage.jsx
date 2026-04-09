import HtmlFragment from "../components/HtmlFragment";
import useDocumentTitle from "../hooks/useDocumentTitle";
import usePageStyles from "../hooks/usePageStyles";
import { pageMarkup } from "../lib/rawContent";

export default function NotFoundPage() {
  useDocumentTitle("Page Not Found");
  usePageStyles(["/assets/css/404.css"], "page-not-found");

  return <HtmlFragment html={pageMarkup.notFound} />;
}
