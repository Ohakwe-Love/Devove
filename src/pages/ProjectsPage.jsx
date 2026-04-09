import HtmlFragment from "../components/HtmlFragment";
import useDocumentTitle from "../hooks/useDocumentTitle";
import usePageStyles from "../hooks/usePageStyles";
import useProjectLightbox from "../hooks/useProjectLightbox";
import { pageMarkup } from "../lib/rawContent";

export default function ProjectsPage() {
  useDocumentTitle("Our Projects");
  usePageStyles(["/assets/css/projects.css"], "page-projects");
  useProjectLightbox();

  return <HtmlFragment html={pageMarkup.projects} />;
}
