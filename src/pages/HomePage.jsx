import useDocumentTitle from "../hooks/useDocumentTitle";
import { GithubIcon, LinkedinOutlineIcon, ResumeDocIcon, EmailIcon } from "../components/icons";

export default function HomePage() {
  useDocumentTitle("Ohakwe Love - Software Engineer | Full-Stack Developer");

  return (
    <main>
      <section className="hero-wrapper">
        <div className="container">
          <div className="hero-content">
            <div className="status-badge" data-aos="fade-up" data-aos-delay="500">
              <span className="status-dot"></span>
              <span>Available for projects</span>
            </div>

            <h1 className="slide-in-up">
              Hi, I'm Lovely.
              <br />
              A software engineer.
            </h1>

            <p className="description slide-in-up">
              Turning concepts into fast, responsive, and scalable web applications with clean code and creative
              design. I'm a dedicated problem-solver who thrives on learning and building.
            </p>

            <div className="cta-section slide-in-up">
              <div className="board">
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
                <div className="key-position">
                  <a aria-label="Resume" className="key" data-key="Resume" target="_blank" href="/resume" rel="noreferrer">
                    <ResumeDocIcon />
                  </a>
                </div>
                <div className="key-position">
                  <a aria-label="Email" className="key" data-key="Email" target="_blank" href="mailto:ohakwemuna@gmail.com" rel="noreferrer">
                    <EmailIcon />
                  </a>
                </div>
              </div>

              <div className="key-position">
                <a id="cta-hero-btn" href="/contact" data-block="center" className="key call-to-action-btn peer">
                  <p className="border-line call-to-action-content">Explore more</p>
                </a>
              </div>
            </div>
          </div>

          <div className="hero-app-illustration"></div>
        </div>
      </section>
    </main>
  );
}
