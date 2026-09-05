import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRightCircleIcon } from "./icons";

const SCROLL_THRESHOLD = 100;

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const navRef = useRef(null);
  const navToggleRef = useRef(null);

  // Small-screen header background once the page scrolls past the threshold.
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      const isSmallScreen = window.innerWidth <= 600;
      setIsHeaderFixed(isSmallScreen && currentScroll > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Close the mobile nav on outside click / Escape, only while it's open.
  useEffect(() => {
    if (!isNavOpen) return undefined;

    const closeOnOutsideClick = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        navToggleRef.current &&
        !navToggleRef.current.contains(event.target)
      ) {
        setIsNavOpen(false);
      }
    };

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsNavOpen(false);
    };

    document.addEventListener("click", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("click", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isNavOpen]);

  const closeNav = () => setIsNavOpen(false);

  const navLinkClass = ({ isActive }) => `nav-link${isActive ? " is-active" : ""}`;

  return (
    <>
      <header className={isHeaderFixed ? "header-fixed" : ""}>
        <div className="container">
          <Link to="/" className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 1907 382.5">
              <defs>
                <style>{`
                  .cls-1 { letter-spacing: -.06em; }
                  .cls-2 { letter-spacing: -.07em; }
                  .cls-3 { letter-spacing: -.07em; }
                  .cls-4 { letter-spacing: -.06em; }
                  .cls-5 { font-family: 'Chillax'; font-size: 436.5px; font-weight: 600; }
                  .cls-5, .cls-6 { fill: #fff; }
                  .cls-6 { stroke-width: 0px; }
                `}</style>
              </defs>
              <text className="cls-5" transform="translate(443.63 342.9)">
                <tspan className="cls-1" x="0" y="0">D</tspan>
                <tspan className="cls-2" x="300.31" y="0">e</tspan>
                <tspan className="cls-3" x="525.11" y="0">vov</tspan>
                <tspan className="cls-4" x="1206.46" y="0">e</tspan>
              </text>
              <g>
                <path className="cls-6" d="M395.05,32.97v140.95l-80.68-58.31-1.59-1.14H100.92L11,49.47v-16.5c0-11.11,10.4-20.12,23.23-20.12h337.58c12.83,0,23.23,9.01,23.23,20.12Z" />
                <polygon className="cls-6" points="395.05 201.88 395.05 303.32 310.87 242.48 309.28 241.33 99.01 241.33 11 177.72 11 77.44 95.6 138.58 96.82 139.46 96.46 139.72 309.05 139.72 395.05 201.88" />
                <path className="cls-6" d="M395.05,331.28v20.26c0,9.2-8.61,16.65-19.23,16.65H30.23c-10.62,0-19.23-7.46-19.23-16.65v-145.87l82.7,59.77,1.58,1.14h210.26l89.51,64.69Z" />
              </g>
            </svg>
          </Link>

          <Link to="/resume" target="_blank" className="view-resume primary-btn animated-border">
            Resume
            <span>
              <ArrowUpRightCircleIcon />
            </span>
          </Link>

          <button
            ref={navToggleRef}
            className="nav-toggle"
            type="button"
            aria-label="Open navigation"
            onClick={() => setIsNavOpen((open) => !open)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
            </svg>
          </button>
        </div>
      </header>

      <nav id="nav" ref={navRef} className={`nav${isNavOpen ? " active" : ""}`}>
        <button className="close-nav" type="button" aria-label="Close navigation" onClick={closeNav}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z"></path>
          </svg>
        </button>

        <ul>
          <li className="nav-profile">
            <Link to="/" className="nav-link nav-profile-link" aria-label="Ohakwe Love profile" onClick={closeNav}>
              <img src="/assets/images/me/me.jpg" alt="Ohakwe Love" className="nav-profile-image" width="48" height="48" />
              <div className="tool-tip">Ohakwe Love</div>
            </Link>
          </li>
          <li>
            <NavLink to="/" end className={navLinkClass} data-tooltip="Home" onClick={closeNav}>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="size-5">
                <path fill="currentColor" d="m220.17 100l-17.31-30a28 28 0 0 0-38.24-10.25a27.7 27.7 0 0 0-9 8.34L138.2 38a28 28 0 0 0-48.48 0a28 28 0 0 0-41.57 36l1.59 2.76A27.7 27.7 0 0 0 38 80.41a28 28 0 0 0-10.24 38.25l40 69.32a87.47 87.47 0 0 0 53.43 41a88.6 88.6 0 0 0 22.92 3a88 88 0 0 0 76.06-132Zm-6.66 62.64A72 72 0 0 1 81.62 180l-40-69.32a12 12 0 0 1 20.78-12L81.63 132a8 8 0 1 0 13.85-8L62 66a12 12 0 1 1 20.78-12L114 108a8 8 0 1 0 13.85-8l-24.28-42a12 12 0 1 1 20.78-12l33.42 57.9a48 48 0 0 0-5.54 60.6a8 8 0 0 0 13.24-9a32 32 0 0 1 7.31-43.5a8 8 0 0 0 2.13-10.4L168.23 90A12 12 0 1 1 189 78l17.31 30a71.56 71.56 0 0 1 7.2 54.62ZM184.25 31.71A8 8 0 0 1 194 26a59.62 59.62 0 0 1 36.53 28l.33.57a8 8 0 1 1-13.85 8l-.33-.57a43.67 43.67 0 0 0-26.8-20.5a8 8 0 0 1-5.63-9.79M80.89 237a8 8 0 0 1-11.23 1.33A119.6 119.6 0 0 1 40.06 204a8 8 0 0 1 13.86-8a103.7 103.7 0 0 0 25.64 29.72A8 8 0 0 1 80.89 237"></path>
              </svg>
              <div className="tool-tip">Home</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass} data-tooltip="About" onClick={closeNav}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
              <div className="tool-tip">About</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={navLinkClass} data-tooltip="Skills" onClick={closeNav}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M5.1496 12.05 1.59961 8.5l3.54999 -3.525 3.525 3.525 -3.525 3.55Zm4.175 9.95V16.683c-1.06665 -0.08865 -2.125 -0.20385 -3.175 -0.3455 -1.05 -0.14165 -2.09999 -0.3375 -3.14999 -0.5875l0.375 -1.5c1.421165 0.33335 2.84649 0.57085 4.27599 0.7125 1.4297 0.14165 2.88045 0.2125 4.35225 0.2125 1.472 0 2.92275 -0.07085 4.35225 -0.2125 1.42965 -0.14165 2.85285 -0.37915 4.2695 -0.7125l0.375 1.5c-1.05 0.25 -2.0998 0.4476 -3.1495 0.59275 -1.0498 0.14515 -2.1083 0.2559 -3.1755 0.33225V22h-5.35Zm2.672 -15.5c-0.76465 0 -1.41365 -0.26765 -1.947 -0.803 -0.5333 -0.53535 -0.8 -1.185335 -0.8 -1.95 0 -0.764665 0.2677 -1.413665 0.803 -1.947 0.53535 -0.533335 1.18535 -0.8 1.95 -0.8 0.7647 0 1.4137 0.267665 1.947 0.803 0.53335 0.535335 0.8 1.185335 0.8 1.95 0 0.764665 -0.26765 1.41365 -0.803 1.947 -0.5353 0.53335 -1.1853 0.8 -1.95 0.8Zm0.005 7.15c-0.5013 0 -0.93115 -0.1785 -1.2895 -0.5355 -0.3583 -0.357 -0.5375 -0.78615 -0.5375 -1.2875 0 -0.50135 0.1785 -0.93115 0.5355 -1.2895 0.357 -0.35835 0.7862 -0.5375 1.2875 -0.5375 0.50135 0 0.9312 0.1785 1.2895 0.5355 0.35835 0.357 0.5375 0.78615 0.5375 1.2875 0 0.50135 -0.1785 0.93115 -0.5355 1.2895 -0.357 0.35835 -0.78615 0.5375 -1.2875 0.5375Zm5.448 -1.9 -1.55 -2.75 1.55825 -2.75h3.11675l1.55 2.75 -1.55825 2.75h-3.11675Z" strokeWidth="0.5"></path>
              </svg>
              <div className="tool-tip">Skills</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={navLinkClass} data-tooltip="Services" onClick={closeNav}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 5a2 2 0 0 1 2-2h3.5A1.5 1.5 0 0 1 10 4.5v3A1.5 1.5 0 0 1 8.5 9H5a2 2 0 0 1-2-2V5Zm0 12a2 2 0 0 1 2-2h3.5A1.5 1.5 0 0 1 10 16.5v3A1.5 1.5 0 0 1 8.5 21H5a2 2 0 0 1-2-2v-2Zm11-12a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3.5A1.5 1.5 0 0 1 19.5 10h-3A2.5 2.5 0 0 1 14 7.5V5Zm0 10.5A2.5 2.5 0 0 1 16.5 13h3A1.5 1.5 0 0 1 21 14.5v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-2Z"></path>
              </svg>
              <div className="tool-tip">Services</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={navLinkClass} data-tooltip="Projects" onClick={closeNav}>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="size-5">
                <path fill="currentColor" d="M216 56h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16M96 48a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm120 24v41.61A184 184 0 0 1 128 136a184.1 184.1 0 0 1-88-22.38V72Zm0 128H40v-68.36A200.2 200.2 0 0 0 128 152a200.25 200.25 0 0 0 88-20.37zm-112-88a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-32a8 8 0 0 1-8-8"></path>
              </svg>
              <div className="tool-tip">Projects</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass} data-tooltip="Contact" onClick={closeNav}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 2C3.44772 2 3 2.44772 3 3V5H5V4H19V20H5V19H3V21C3 21.5523 3.44772 22 4 22H20C20.5523 22 21 21.5523 21 21V3C21 2.44772 20.5523 2 20 2H4ZM9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16H9ZM12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12ZM6 9V7H2V9H6ZM6 11V13H2V11H6ZM6 17V15H2V17H6Z"></path>
              </svg>
              <div className="tool-tip">Contact</div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
