import HtmlFragment from "../components/HtmlFragment";
import useDocumentTitle from "../hooks/useDocumentTitle";
import usePageStyles from "../hooks/usePageStyles";
import { pageMarkup } from "../lib/rawContent";

export default function HomePage() {
  useDocumentTitle("Ohakwe Love - Software Engineer | Full-Stack Developer");
  usePageStyles(["/assets/css/style.css"], "page-home");

  return <HtmlFragment html={pageMarkup.home} />;
}
