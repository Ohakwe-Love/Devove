import homeDocumentRaw from "../../theme/index.html?raw";
import projectsDocumentRaw from "../../theme/projects.html?raw";
import contactDocumentRaw from "../../theme/contact.html?raw";
import resumeDocumentRaw from "../../theme/my_cv.html?raw";

function extractBlock(source, startMarker, endMarker) {
  const startIndex = source.indexOf(startMarker);
  const endIndex = source.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1) {
    return "";
  }

  return source.slice(startIndex, endIndex + endMarker.length).trim();
}

function extractBetween(source, startMarker, endMarker) {
  const startIndex = source.indexOf(startMarker);
  const endIndex = source.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
    return "";
  }

  return source.slice(startIndex, endIndex).trim();
}

function wrapMain(content) {
  return `<main>\n${content}\n</main>`;
}

function createBanner(title) {
  return `
<section class="banner">
  <div class="container banner-container">
    <div class="text-content">
      <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">${title}</h1>
      <p>
        <a href="/"><em class="border-line">home</em></a>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
          </svg>
        </span>
        ${title}
      </p>
    </div>
  </div>
</section>
`.trim();
}

function normalizeLinks(html) {
  return html
    .replaceAll('src="assets/', 'src="/assets/')
    .replaceAll("src='assets/", "src='/assets/")
    .replaceAll('href="assets/', 'href="/assets/')
    .replaceAll("href='assets/", "href='/assets/")
    .replaceAll('href="index.html"', 'href="/"')
    .replaceAll("href='./index.html'", 'href="/"')
    .replaceAll('href="projects.html"', 'href="/projects"')
    .replaceAll('href="contact.html"', 'href="/contact"')
    .replaceAll('href="my_cv.html"', 'href="/resume"')
    .replaceAll('href="/my_cv"', 'href="/resume"')
    .replaceAll('href="contact"', 'href="/contact"')
    .replaceAll('href="projects"', 'href="/projects"')
    .replaceAll('href="#about"', 'href="/about"')
    .replaceAll('href="#skills"', 'href="/skills"')
    .replaceAll('href="#projects"', 'href="/projects"')
    .replaceAll('src="/assets/images/img2.jpeg"', 'src="/assets/images/me/me.jpg"')
    .replaceAll('href="javascrip:void(0)"', 'href="#"')
    .replaceAll('href="javascript:void(0)"', 'href="#"');
}

function replaceContactCta(html) {
  const oldSection = extractBetween(
    html,
    '<section class="content"',
    "</main>",
  );

  if (!oldSection) {
    return html;
  }

  return html.replace(oldSection.trim(), ctaMarkup);
}

function trimBannerHeader(html) {
  return html.replace(
    /<section class="banner">\s*<header>[\s\S]*?<\/header>/,
    '<section class="banner">',
  );
}

function ensureCtaSection(html) {
  if (html.includes('<section class="content"')) {
    return html;
  }

  return `${html}\n${ctaMarkup}`;
}

const currentYear = new Date().getFullYear();

export const headerMarkup = `
<header>
  <div class="container">
    <a href="/" class="logo">
      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 1907 382.5">
        <defs>
          <style>
            .cls-1 { letter-spacing: -.06em; }
            .cls-2 { letter-spacing: -.07em; }
            .cls-3 { letter-spacing: -.07em; }
            .cls-4 { letter-spacing: -.06em; }
            .cls-5 { font-family: 'Chillax'; font-size: 436.5px; font-weight: 600; }
            .cls-5, .cls-6 { fill: #fff; }
            .cls-6 { stroke-width: 0px; }
          </style>
        </defs>
        <text class="cls-5" transform="translate(443.63 342.9)">
          <tspan class="cls-1" x="0" y="0">D</tspan>
          <tspan class="cls-2" x="300.31" y="0">e</tspan>
          <tspan class="cls-3" x="525.11" y="0">vov</tspan>
          <tspan class="cls-4" x="1206.46" y="0">e</tspan>
        </text>
        <g>
          <path class="cls-6" d="M395.05,32.97v140.95l-80.68-58.31-1.59-1.14H100.92L11,49.47v-16.5c0-11.11,10.4-20.12,23.23-20.12h337.58c12.83,0,23.23,9.01,23.23,20.12Z" />
          <polygon class="cls-6" points="395.05 201.88 395.05 303.32 310.87 242.48 309.28 241.33 99.01 241.33 11 177.72 11 77.44 95.6 138.58 96.82 139.46 96.46 139.72 309.05 139.72 395.05 201.88" />
          <path class="cls-6" d="M395.05,331.28v20.26c0,9.2-8.61,16.65-19.23,16.65H30.23c-10.62,0-19.23-7.46-19.23-16.65v-145.87l82.7,59.77,1.58,1.14h210.26l89.51,64.69Z" />
        </g>
      </svg>
    </a>

    <a href="/resume" target="_blank" class="view-resume primary-btn animated-border">
      Resume
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
        </svg>
      </span>
    </a>

    <button class="nav-toggle" type="button" aria-label="Open navigation">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
      </svg>
    </button>
  </div>
</header>

<nav id="nav" class="nav">
  <button class="close-nav" type="button" aria-label="Close navigation">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z"></path>
    </svg>
  </button>

  <ul>
    <li class="nav-profile">
      <a href="/" class="nav-link nav-profile-link" aria-label="Ohakwe Love profile">
        <img src="/assets/images/me/me.jpg" alt="Ohakwe Love" class="nav-profile-image" />
        <div class="tool-tip">Ohakwe Love</div>
      </a>
    </li>
    <li>
      <a href="/" class="nav-link nav-home-link" data-tooltip="Home">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="size-5">
          <path fill="currentColor" d="m220.17 100l-17.31-30a28 28 0 0 0-38.24-10.25a27.7 27.7 0 0 0-9 8.34L138.2 38a28 28 0 0 0-48.48 0a28 28 0 0 0-41.57 36l1.59 2.76A27.7 27.7 0 0 0 38 80.41a28 28 0 0 0-10.24 38.25l40 69.32a87.47 87.47 0 0 0 53.43 41a88.6 88.6 0 0 0 22.92 3a88 88 0 0 0 76.06-132Zm-6.66 62.64A72 72 0 0 1 81.62 180l-40-69.32a12 12 0 0 1 20.78-12L81.63 132a8 8 0 1 0 13.85-8L62 66a12 12 0 1 1 20.78-12L114 108a8 8 0 1 0 13.85-8l-24.28-42a12 12 0 1 1 20.78-12l33.42 57.9a48 48 0 0 0-5.54 60.6a8 8 0 0 0 13.24-9a32 32 0 0 1 7.31-43.5a8 8 0 0 0 2.13-10.4L168.23 90A12 12 0 1 1 189 78l17.31 30a71.56 71.56 0 0 1 7.2 54.62ZM184.25 31.71A8 8 0 0 1 194 26a59.62 59.62 0 0 1 36.53 28l.33.57a8 8 0 1 1-13.85 8l-.33-.57a43.67 43.67 0 0 0-26.8-20.5a8 8 0 0 1-5.63-9.79M80.89 237a8 8 0 0 1-11.23 1.33A119.6 119.6 0 0 1 40.06 204a8 8 0 0 1 13.86-8a103.7 103.7 0 0 0 25.64 29.72A8 8 0 0 1 80.89 237"></path>
        </svg>
        <div class="tool-tip">Home</div>
      </a>
    </li>
    <li>
      <a href="/about" class="nav-link nav-about-link" data-tooltip="About">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
        </svg>
        <div class="tool-tip">About</div>
      </a>
    </li>
    <li>
      <a href="/skills" class="nav-link nav-skills-link" data-tooltip="Skills">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Person-Play-Fill--Streamline-Outlined-Fill-Material">
          <path fill="currentColor" d="M5.1496 12.05 1.59961 8.5l3.54999 -3.525 3.525 3.525 -3.525 3.55Zm4.175 9.95V16.683c-1.06665 -0.08865 -2.125 -0.20385 -3.175 -0.3455 -1.05 -0.14165 -2.09999 -0.3375 -3.14999 -0.5875l0.375 -1.5c1.421165 0.33335 2.84649 0.57085 4.27599 0.7125 1.4297 0.14165 2.88045 0.2125 4.35225 0.2125 1.472 0 2.92275 -0.07085 4.35225 -0.2125 1.42965 -0.14165 2.85285 -0.37915 4.2695 -0.7125l0.375 1.5c-1.05 0.25 -2.0998 0.4476 -3.1495 0.59275 -1.0498 0.14515 -2.1083 0.2559 -3.1755 0.33225V22h-5.35Zm2.672 -15.5c-0.76465 0 -1.41365 -0.26765 -1.947 -0.803 -0.5333 -0.53535 -0.8 -1.185335 -0.8 -1.95 0 -0.764665 0.2677 -1.413665 0.803 -1.947 0.53535 -0.533335 1.18535 -0.8 1.95 -0.8 0.7647 0 1.4137 0.267665 1.947 0.803 0.53335 0.535335 0.8 1.185335 0.8 1.95 0 0.764665 -0.26765 1.41365 -0.803 1.947 -0.5353 0.53335 -1.1853 0.8 -1.95 0.8Zm0.005 7.15c-0.5013 0 -0.93115 -0.1785 -1.2895 -0.5355 -0.3583 -0.357 -0.5375 -0.78615 -0.5375 -1.2875 0 -0.50135 0.1785 -0.93115 0.5355 -1.2895 0.357 -0.35835 0.7862 -0.5375 1.2875 -0.5375 0.50135 0 0.9312 0.1785 1.2895 0.5355 0.35835 0.357 0.5375 0.78615 0.5375 1.2875 0 0.50135 -0.1785 0.93115 -0.5355 1.2895 -0.357 0.35835 -0.78615 0.5375 -1.2875 0.5375Zm5.448 -1.9 -1.55 -2.75 1.55825 -2.75h3.11675l1.55 2.75 -1.55825 2.75h-3.11675Z" stroke-width="0.5"></path>
        </svg>
        <div class="tool-tip">Skills</div>
      </a>
    </li>
    <li>
      <a href="/services" class="nav-link nav-services-link" data-tooltip="Services">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 5a2 2 0 0 1 2-2h3.5A1.5 1.5 0 0 1 10 4.5v3A1.5 1.5 0 0 1 8.5 9H5a2 2 0 0 1-2-2V5Zm0 12a2 2 0 0 1 2-2h3.5A1.5 1.5 0 0 1 10 16.5v3A1.5 1.5 0 0 1 8.5 21H5a2 2 0 0 1-2-2v-2Zm11-12a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3.5A1.5 1.5 0 0 1 19.5 10h-3A2.5 2.5 0 0 1 14 7.5V5Zm0 10.5A2.5 2.5 0 0 1 16.5 13h3A1.5 1.5 0 0 1 21 14.5v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-2Z"></path>
        </svg>
        <div class="tool-tip">Services</div>
      </a>
    </li>
    <li>
      <a href="/projects" class="nav-link nav-projects-link" data-tooltip="Projects">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="size-5">
          <path fill="currentColor" d="M216 56h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16M96 48a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm120 24v41.61A184 184 0 0 1 128 136a184.1 184.1 0 0 1-88-22.38V72Zm0 128H40v-68.36A200.2 200.2 0 0 0 128 152a200.25 200.25 0 0 0 88-20.37zm-112-88a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-32a8 8 0 0 1-8-8"></path>
        </svg>
        <div class="tool-tip">Projects</div>
      </a>
    </li>
    <li>
      <a href="/contact" class="nav-link nav-contact-link" data-tooltip="Contact">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 2C3.44772 2 3 2.44772 3 3V5H5V4H19V20H5V19H3V21C3 21.5523 3.44772 22 4 22H20C20.5523 22 21 21.5523 21 21V3C21 2.44772 20.5523 2 20 2H4ZM9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16H9ZM12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12ZM6 9V7H2V9H6ZM6 11V13H2V11H6ZM6 17V15H2V17H6Z"></path>
        </svg>
        <div class="tool-tip">Contact</div>
      </a>
    </li>
  </ul>
</nav>
`.trim();

const ctaMarkup = `
<section class="content" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
  <div class="container">
    <div class="content-container">
      <div class="content-details">
        <h2 class="content-title">Ready to Build Something Extraordinary?</h2>
        <p class="content-description">Let's discuss how we can transform your vision into a digital masterpiece that drives results and exceeds expectations.</p>
        <a href="/contact" target="_blank" class="primary-btn animated-border" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          Contact Here
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  </div>
</section>
`.trim();

const notFoundMarkup = `
<main>
  <section class="page-not-found-container">
    <img src="/assets/images/others/404.svg" alt="">
    <h1>Oops! Page Not Found</h1>
    <p>The page you are looking for does not exist. It might have been moved or deleted.</p>
    <a href="/" class="btn-home primary-btn animated-border">
      Go to Homepage
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"></path>
        </svg>
      </span>
    </a>
  </section>
</main>
`.trim();

const footerMarkupBase = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <h2>Developer • Love Ohakwe</h2>
        <p>
          Ready to start your next project or simply have a question about modern web architecture?
          We believe in transparent, collaborative development.
        </p>
      </div>

      <div class="footer-column footer-help-col">
        <h3>Help Links -:</h3>
        <ul>
          <li><a href="/about" class="border-line">About</a></li>
          <li><a href="/skills" class="border-line">Skills</a></li>
          <li><a href="/services" class="border-line">Services</a></li>
          <li><a href="/projects" class="border-line">Projects</a></li>
          <li><a href="/contact" class="border-line">Contact</a></li>
        </ul>
      </div>

      <div class="footer-column footer-contact-col">
        <h3>Contact -:</h3>
        <ul>
          <li>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-outbound" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5" />
              </svg>
            </span>
            <a href="tel:+2348161452508">+234 816 145 2508</a>
          </li>
          <li>
            <span>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor">
                  <path d="m2 6l6.913 3.917c2.549 1.444 3.625 1.444 6.174 0L22 6"></path>
                  <path d="M2.016 13.476c.065 3.065.098 4.598 1.229 5.733c1.131 1.136 2.705 1.175 5.854 1.254c1.94.05 3.862.05 5.802 0c3.149-.079 4.723-.118 5.854-1.254c1.131-1.135 1.164-2.668 1.23-5.733c.02-.986.02-1.966 0-2.952c-.066-3.065-.099-4.598-1.23-5.733c-1.131-1.136-2.705-1.175-5.854-1.254a115 115 0 0 0-5.802 0c-3.149.079-4.723.118-5.854 1.254c-1.131 1.135-1.164 2.668-1.23 5.733a69 69 0 0 0 0 2.952"></path>
                </g>
              </svg>
            </span>
            <a href="mailto:ohakwemuna@gmail.com">ohakwemuna@gmail.com</a>
          </li>
        </ul>
      </div>

      <div class="footer-column">
        <div class="cta-section">
          <div class="board">
            <div class="key-position">
              <a aria-label="Resume" class="key" data-key="Resume" target="_blank" href="/resume"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.975 16.987V6.532c0-1.345.057-2.906 1.065-3.8C7.866 2 9.034 2 10.14 2h7.31c1.027 0 2.092.018 3.012.47q.112.055.213.115C22.042 3.388 22 5.302 22 6.885v10.532c0 1.041-.048 2.111-.48 3.059c-.414.907-.98 1.314-2.024 1.506M5.975 16.987h8.83c.413 0 .785.253.93.638c.126.337.23.627.323.9c.323.958.607 1.969 1.287 2.717c.409.45.838.678 1.41.74m-12.78-4.995H2.969c-.553 0-1.011.447-.966.997c.047.576.15 1.078.34 1.615c.336.95.92 1.911 1.88 2.225c.354.115.746.153 1.251.158h13.28m.742 0a4 4 0 0 1-.742 0m.742 0h-.742M10.469 7h7m-7 4h3.5" color="currentColor"></path></svg></a>
            </div>
            <div class="key-position">
              <a aria-label="Github" class="key" data-key="Github" target="_blank" href="https://github.com/Ohakwe-Love"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M10 20.568c-3.429 1.157-6.286 0-8-3.568"></path><path d="M10 22v-3.242c0-.598.184-1.118.48-1.588c.204-.322.064-.78-.303-.88C7.134 15.452 5 14.107 5 9.645c0-1.16.38-2.25 1.048-3.2c.166-.236.25-.354.27-.46c.02-.108-.015-.247-.085-.527c-.283-1.136-.264-2.343.16-3.43c0 0 .877-.287 2.874.96c.456.285.684.428.885.46s.469-.035 1.005-.169A9.5 9.5 0 0 1 13.5 3a9.6 9.6 0 0 1 2.343.28c.536.134.805.2 1.006.169c.2-.032.428-.175.884-.46c1.997-1.247 2.874-.96 2.874-.96c.424 1.087.443 2.294.16 3.43c-.07.28-.104.42-.084.526s.103.225.269.461c.668.95 1.048 2.04 1.048 3.2c0 4.462-2.134 5.807-5.177 6.643c-.367.101-.507.559-.303.88c.296.47.48.99.48 1.589V22"></path></g></svg></a>
            </div>
            <div class="key-position">
              <a aria-label="LinkedIn" class="key" data-key="LinkedIn" target="_blank" href="https://www.linkedin.com/in/love-ohakwe/"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 9.5H4c-.943 0-1.414 0-1.707.293S2 10.557 2 11.5V20c0 .943 0 1.414.293 1.707S3.057 22 4 22h.5c.943 0 1.414 0 1.707-.293S6.5 20.943 6.5 20v-8.5c0-.943 0-1.414-.293-1.707S5.443 9.5 4.5 9.5m2-5.25a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0m5.826 5.25H11.5c-.943 0-1.414 0-1.707.293S9.5 10.557 9.5 11.5V20c0 .943 0 1.414.293 1.707S10.557 22 11.5 22h.5c.943 0 1.414 0 1.707-.293S14 20.943 14 20v-3.5c0-1.657.528-3 2.088-3c.78 0 1.412.672 1.412 1.5v4.5c0 .943 0 1.414.293 1.707s.764.293 1.707.293h.499c.942 0 1.414 0 1.707-.293c.292-.293.293-.764.293-1.706L22 14c0-2.486-2.364-4.5-4.703-4.5c-1.332 0-2.52.652-3.297 1.673c0-.63 0-.945-.137-1.179a1 1 0 0 0-.358-.358c-.234-.137-.549-.137-1.179-.137" color="currentColor"></path></svg></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="copyright">
        &copy; <span class="date" id="date">${currentYear}</span> <a href="/" class="devove-link">Devove</a>. All rights reserved.
      </div>
    </div>
  </div>
</footer>
`.trim();

const homeMainRaw = extractBlock(homeDocumentRaw, "<main>", "</main>");
const heroMarkup = wrapMain(extractBetween(homeMainRaw, '<section class="hero-wrapper">', "<!-- about -->"));
const aboutContentMarkup = extractBetween(homeMainRaw, "<!-- about -->", "<!-- stacks -->");
const skillsContentMarkup = extractBetween(homeMainRaw, "<!-- stacks -->", "<!-- Services Section -->");
const servicesContentMarkup = extractBetween(homeMainRaw, "<!-- Services Section -->", "<!-- projects -->");
const aboutMarkup = wrapMain(ensureCtaSection(`${createBanner("About")}\n${aboutContentMarkup}`));
const skillsMarkup = wrapMain(ensureCtaSection(`${createBanner("Skills")}\n${skillsContentMarkup}`));
const servicesMarkup = wrapMain(ensureCtaSection(`${createBanner("Services")}\n${servicesContentMarkup}`));
const projectsMarkup = wrapMain(
  ensureCtaSection(trimBannerHeader(extractBetween(projectsDocumentRaw, '<section class="banner">', "</main>"))),
);
const contactMarkup = wrapMain(
  ensureCtaSection(trimBannerHeader(extractBetween(contactDocumentRaw, '<section class="banner">', "</main>"))),
);

export const footerMarkup = normalizeLinks(footerMarkupBase);

export const pageMarkup = {
  home: normalizeLinks(heroMarkup),
  about: normalizeLinks(aboutMarkup),
  skills: normalizeLinks(skillsMarkup),
  services: normalizeLinks(servicesMarkup),
  projects: normalizeLinks(replaceContactCta(projectsMarkup)),
  contact: normalizeLinks(contactMarkup),
  resume: normalizeLinks(extractBlock(resumeDocumentRaw, '<button class="download-btn"', "</main>")),
  notFound: notFoundMarkup,
};
