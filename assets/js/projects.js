const projects_wrapper = document.querySelector(".projects");

if (projects_wrapper) {
    const projectImgs = document.querySelectorAll(".project-img img");
    const quickViewImage = document.querySelectorAll(".quickview-btn");
    const projectLightbox = document.querySelector(".project_lightbox");
    const lightboxImg = projectLightbox.querySelector(".lightbox_img");
    const prevLightboxImg = projectLightbox.querySelector(".prev_lightbox_img");
    const nextLightboxImg = projectLightbox.querySelector(".next_lightbox_img");
    const closeLightbox = projectLightbox.querySelector(".close_lightbox");
    let currentIndex = 0;

    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = projectImgs[index].src;
        projectLightbox.style.display = "flex";
    }

    quickViewImage.forEach((btn, index) => {
        btn.addEventListener("click", () => openLightbox(index));
    })

    closeLightbox.addEventListener("click", () => {
        projectLightbox.style.display = "none";
    })

    prevLightboxImg.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + projectImgs.length) % projectImgs.length;
        lightboxImg.src = projectImgs[currentIndex].src;
    })

    nextLightboxImg.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % projectImgs.length;
        lightboxImg.src = projectImgs[currentIndex].src;
    })
}