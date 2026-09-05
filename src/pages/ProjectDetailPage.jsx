import { Link, useParams } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import PageBanner from "../components/PageBanner";
import CtaBanner, { defaultCta } from "../components/CtaBanner";
import { BoxArrowUpRightIcon, GithubIcon, ChevronLeftIcon } from "../components/icons";
import projects from "../data/projects";

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projects.find((item) => String(item.id) === projectId);

  useDocumentTitle(project ? `${project.title} | Devove` : "Project Not Found | Devove");

  if (!project) {
    return (
      <main>
        <PageBanner title="Project Not Found" />
        <section>
          <div className="container" style={{ textAlign: "center", padding: "4rem 0" }}>
            <p>That project doesn't exist or may have been moved.</p>
            <Link to="/projects" className="primary-btn animated-border">
              Back to Projects
              <span>
                <BoxArrowUpRightIcon />
              </span>
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <PageBanner title={project.title} />

      <section className="project-detail">
        <div className="container">
          <Link
            to="/projects"
            className="border-line"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", marginBottom: "1.5rem" }}
          >
            <span style={{ width: "1em", height: "1em", display: "inline-flex" }}>
              <ChevronLeftIcon />
            </span>
            Back to all projects
          </Link>

          <div className="project-img-con" style={{ marginBottom: "2rem" }}>
            <img src={project.image} alt="" className="project-img" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>

          <div className="project-specs">
            <div className="project-badge-con">
              <span className={`project-badge ${project.badge}`}>{project.badge}</span>
            </div>
            <div className="project-status-con">
              <div className={`status-badge ${project.status}`}>
                <span className="status-dot"></span>
                <span>{project.status}</span>
              </div>
            </div>
          </div>

          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>

          <div className="project-stacks" style={{ marginBottom: "2rem" }}>
            {project.stacks.map((stack) => (
              <span className="project-stack" key={stack}>
                {stack}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {project.liveHref && (
              <a href={project.liveHref} target="_blank" rel="noreferrer" className="primary-btn animated-border">
                Live Preview
                <span>
                  <BoxArrowUpRightIcon />
                </span>
              </a>
            )}
            {project.githubHref && (
              <a href={project.githubHref} target="_blank" rel="noreferrer" className="primary-btn animated-border">
                View Code
                <span>
                  <GithubIcon />
                </span>
              </a>
            )}
          </div>
        </div>
      </section>

      <CtaBanner {...defaultCta} />
    </main>
  );
}