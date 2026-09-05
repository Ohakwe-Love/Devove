import { EyeIcon, BoxArrowUpRightIcon } from "./icons";
import { Link, useParams } from "react-router-dom";


export default function ProjectCard({ project, onQuickView }) {
  return (
    <div className="project-card">
      <div className="card-shine"></div>
      <div className="project-img-con">
        <img src={project.image} alt="" className="project-img" />
        <div className="project-actions">
          <a href={project.liveHref || "#"} className="action-btn live-preview-btn" title="Live Preview" target="_blank" rel="noreferrer">
            <BoxArrowUpRightIcon />
          </a>
          <button type="button" className="action-btn quickview-btn" title="Quick View" onClick={onQuickView}>
            <EyeIcon />
          </button>
        </div>
      </div>
      <div className="project-details">
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
        <Link to={`/projects/${project.id}`} className="project-title">{project.title}</Link>
        <p className="project-description">{project.description}</p>
        <div className="project-stacks">
          {project.stacks.map((stack) => (
            <span className="project-stack" key={stack}>
              {stack}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
