import { useEffect } from "react";

export default function useProjectLightbox() {
  useEffect(() => {
    const overlay = document.querySelector(".overlay");
    const projectImgs = Array.from(document.querySelectorAll(".project-img"));
    const quickViewButtons = Array.from(document.querySelectorAll(".quickview-btn"));
    const projectLightbox = document.querySelector(".project_lightbox");

    if (!projectLightbox || projectImgs.length === 0 || quickViewButtons.length === 0) {
      return undefined;
    }

    const lightboxImg = projectLightbox.querySelector(".lightbox_img");
    const prevButton = projectLightbox.querySelector(".prev_lightbox_img");
    const nextButton = projectLightbox.querySelector(".next_lightbox_img");
    const closeButton = projectLightbox.querySelector(".close_lightbox");
    let currentIndex = 0;

    const renderImage = () => {
      if (lightboxImg) {
        lightboxImg.src = projectImgs[currentIndex].src;
      }
    };

    const openLightbox = (index) => {
      currentIndex = index;
      renderImage();
      projectLightbox.classList.add("active");
      overlay?.classList.add("active");
      document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
      projectLightbox.classList.remove("active");
      overlay?.classList.remove("active");
      document.body.style.overflow = "";
    };

    const handlePrev = () => {
      currentIndex = (currentIndex - 1 + projectImgs.length) % projectImgs.length;
      renderImage();
    };

    const handleNext = () => {
      currentIndex = (currentIndex + 1) % projectImgs.length;
      renderImage();
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    };

    const quickViewHandlers = quickViewButtons.map((button, index) => {
      const handler = (event) => {
        event.preventDefault();
        openLightbox(index);
      };

      button.addEventListener("click", handler);
      return { button, handler };
    });

    overlay?.addEventListener("click", closeLightbox);
    closeButton?.addEventListener("click", closeLightbox);
    prevButton?.addEventListener("click", handlePrev);
    nextButton?.addEventListener("click", handleNext);
    document.addEventListener("keydown", handleEscape);

    return () => {
      quickViewHandlers.forEach(({ button, handler }) => button.removeEventListener("click", handler));
      overlay?.removeEventListener("click", closeLightbox);
      closeButton?.removeEventListener("click", closeLightbox);
      prevButton?.removeEventListener("click", handlePrev);
      nextButton?.removeEventListener("click", handleNext);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, []);
}
