import HtmlFragment from "../components/HtmlFragment";
import useDocumentTitle from "../hooks/useDocumentTitle";
import usePageStyles from "../hooks/usePageStyles";
import { pageMarkup, skillsPageCtaMarkup } from "../lib/rawContent";

export default function SkillsPage() {
  useDocumentTitle("Skills");
  usePageStyles(["/assets/css/style.css"], "page-skills");

  return (
    <>
      <HtmlFragment html={pageMarkup.skills} />
      <HtmlFragment html={skillsPageCtaMarkup} />
    </>
  );
}
