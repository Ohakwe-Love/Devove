import { useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon, CloseXIcon } from "./icons";

/**
 * Full-screen project preview. `activeIndex` is null when closed, or the
 * index into `projects` currently being shown.
 */
export default function ProjectLightbox({ projects, activeIndex, onClose, onPrev, onNext }) {
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeydown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [isOpen, onClose, onPrev, onNext]);

  const project = isOpen ? projects[activeIndex] : null;

  return (
    <>
      <section className={`project_lightbox${isOpen ? " active" : ""}`}>
        <div className="lightbox-container">
          <img src={project?.image} className="lightbox_img" alt="" />
          <div className="lightbox_controls">
            <span className="prev_lightbox_img lightbox_pag_btn" onClick={onPrev} role="button" tabIndex={0} aria-label="Previous project">
              <ChevronLeftIcon />
            </span>
            <span className="close_lightbox" onClick={onClose} role="button" tabIndex={0} aria-label="Close preview">
              <CloseXIcon />
            </span>
            <span className="next_lightbox_img lightbox_pag_btn" onClick={onNext} role="button" tabIndex={0} aria-label="Next project">
              <ChevronRightIcon />
            </span>
          </div>
        </div>
      </section>
      <div className={`overlay${isOpen ? " active" : ""}`} onClick={onClose}></div>
    </>
  );
}
