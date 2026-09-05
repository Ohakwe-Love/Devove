import { Link } from "react-router-dom";
import { ResumeDocIcon, GithubIcon, LinkedinOutlineIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>Developer • Love Ohakwe</h2>
            <p>
              Ready to start your next project or simply have a question about modern web architecture? We believe
              in transparent, collaborative development.
            </p>
          </div>

          <div className="footer-column footer-help-col">
            <h3>Help Links -:</h3>
            <ul>
              <li><Link to="/about" className="border-line">About</Link></li>
              <li><Link to="/skills" className="border-line">Skills</Link></li>
              <li><Link to="/services" className="border-line">Services</Link></li>
              <li><Link to="/projects" className="border-line">Projects</Link></li>
              <li><Link to="/contact" className="border-line">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column footer-contact-col">
            <h3>Contact -:</h3>
            <ul>
              <li>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-outbound" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5" />
                  </svg>
                </span>
                <a href="tel:+2348161452508">+234 816 145 2508</a>
              </li>
              <li>
                <span>
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
                      <path d="m2 6l6.913 3.917c2.549 1.444 3.625 1.444 6.174 0L22 6"></path>
                      <path d="M2.016 13.476c.065 3.065.098 4.598 1.229 5.733c1.131 1.136 2.705 1.175 5.854 1.254c1.94.05 3.862.05 5.802 0c3.149-.079 4.723-.118 5.854-1.254c1.131-1.135 1.164-2.668 1.23-5.733c.02-.986.02-1.966 0-2.952c-.066-3.065-.099-4.598-1.23-5.733c-1.131-1.136-2.705-1.175-5.854-1.254a115 115 0 0 0-5.802 0c-3.149.079-4.723.118-5.854 1.254c-1.131 1.135-1.164 2.668-1.23 5.733a69 69 0 0 0 0 2.952"></path>
                    </g>
                  </svg>
                </span>
                <a href="mailto:ohakwemuna@gmail.com">ohakwemuna@gmail.com</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <div className="cta-section">
              <div className="board">
                <div className="key-position">
                  <a aria-label="Resume" className="key" data-key="Resume" target="_blank" href="/resume" rel="noreferrer">
                    <ResumeDocIcon />
                  </a>
                </div>
                <div className="key-position">
                  <a aria-label="Github" className="key" data-key="Github" target="_blank" href="https://github.com/Ohakwe-Love" rel="noreferrer">
                    <GithubIcon />
                  </a>
                </div>
                <div className="key-position">
                  <a aria-label="LinkedIn" className="key" data-key="LinkedIn" target="_blank" href="https://www.linkedin.com/in/love-ohakwe/" rel="noreferrer">
                    <LinkedinOutlineIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            &copy; <span className="date">{year}</span> <Link to="/" className="devove-link">Devove</Link>. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
