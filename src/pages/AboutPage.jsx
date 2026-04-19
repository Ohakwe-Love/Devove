import HtmlFragment from "../components/HtmlFragment";
import useDocumentTitle from "../hooks/useDocumentTitle";
import usePageStyles from "../hooks/usePageStyles";
import { aboutPageCtaMarkup, pageMarkup } from "../lib/rawContent";

export default function AboutPage() {
  useDocumentTitle("About");
  usePageStyles(["/assets/css/style.css"], "page-about");

  return (
    <>
      <HtmlFragment html={pageMarkup.about} />
      <HtmlFragment html={aboutPageCtaMarkup} />
    </>
  );
}
