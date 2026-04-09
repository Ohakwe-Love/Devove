import HtmlFragment from "../components/HtmlFragment";
import useDocumentTitle from "../hooks/useDocumentTitle";
import usePageStyles from "../hooks/usePageStyles";
import useResumePage from "../hooks/useResumePage";
import { pageMarkup } from "../lib/rawContent";

export default function ResumePage() {
  useDocumentTitle("My Resume");
  usePageStyles(["/assets/css/my_cv.css"], "page-resume");
  useResumePage();

  return <HtmlFragment html={pageMarkup.resume} />;
}
