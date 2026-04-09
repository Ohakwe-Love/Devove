import { useEffect } from "react";

export default function useSiteChrome() {
  useEffect(() => {
    const header = document.querySelector("header");
    const navToggle = document.querySelector(".nav-toggle");
    const navigation = document.getElementById("nav");
    const closeNav = document.querySelector(".close-nav");
    const scrollThreshold = 100;

    if (!header || !navToggle || !navigation || !closeNav) {
      return undefined;
    }

    const handleHeaderScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      const isSmallScreen = window.innerWidth <= 600;

      if (isSmallScreen && currentScroll > scrollThreshold) {
        header.classList.add("header-fixed");
      } else {
        header.classList.remove("header-fixed");
      }
    };

    const toggleNav = () => {
      navigation.classList.toggle("active");
    };

    const closeOnOutsideClick = (event) => {
      if (!navigation.contains(event.target) && !navToggle.contains(event.target)) {
        navigation.classList.remove("active");
      }
    };

    const closeOnEscape = (event) => {
      if (event.key === "Escape" && navigation.classList.contains("active")) {
        navigation.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleHeaderScroll);
    window.addEventListener("resize", handleHeaderScroll);
    navToggle.addEventListener("click", toggleNav);
    closeNav.addEventListener("click", toggleNav);
    document.addEventListener("click", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    handleHeaderScroll();

    return () => {
      window.removeEventListener("scroll", handleHeaderScroll);
      window.removeEventListener("resize", handleHeaderScroll);
      navToggle.removeEventListener("click", toggleNav);
      closeNav.removeEventListener("click", toggleNav);
      document.removeEventListener("click", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);
}
