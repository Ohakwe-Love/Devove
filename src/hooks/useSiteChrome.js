import { useEffect } from "react";

function normalizePath(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.replace(/\/+$/, "");
}

export default function useSiteChrome(pathname) {
  useEffect(() => {
    const header = document.querySelector("header");
    const navToggle = document.querySelector(".nav-toggle");
    const navigation = document.getElementById("nav");
    const closeNav = document.querySelector(".close-nav");
    const navLinks = Array.from(document.querySelectorAll("#nav .nav-link"));
    const scrollThreshold = 100;

    if (!header || !navToggle || !navigation || !closeNav) {
      return undefined;
    }

    const currentPath = normalizePath(pathname ?? window.location.pathname);

    const syncActiveNavLink = () => {
      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (!href) {
          return;
        }

        const linkPath = normalizePath(new URL(href, window.location.origin).pathname);
        const isActive = linkPath === currentPath;

        link.classList.toggle("is-active", isActive);

        if (isActive) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

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

    const closeOnNavLinkClick = () => {
      navigation.classList.remove("active");
    };

    window.addEventListener("scroll", handleHeaderScroll);
    window.addEventListener("resize", handleHeaderScroll);
    navToggle.addEventListener("click", toggleNav);
    closeNav.addEventListener("click", toggleNav);
    navLinks.forEach((link) => link.addEventListener("click", closeOnNavLinkClick));
    document.addEventListener("click", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    handleHeaderScroll();
    syncActiveNavLink();

    return () => {
      window.removeEventListener("scroll", handleHeaderScroll);
      window.removeEventListener("resize", handleHeaderScroll);
      navToggle.removeEventListener("click", toggleNav);
      closeNav.removeEventListener("click", toggleNav);
      navLinks.forEach((link) => link.removeEventListener("click", closeOnNavLinkClick));
      document.removeEventListener("click", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [pathname]);
}
