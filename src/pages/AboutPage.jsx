import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import PageBanner from "../components/PageBanner";
import CtaBanner from "../components/CtaBanner";
import { ArrowRightShortIcon } from "../components/icons";

export default function AboutPage() {
  useDocumentTitle("About | Devove");

  return (
    <main>
      {/* <PageBanner title="About" /> */}

      <section className="about-section">
        <div className="container">
          <div className="about-row">
            <div className="about-col">
              <h2>Learning, Building, and Documenting</h2>
              <p>
                I have started my career as an IoT engineer, diving deep into the world of interconnected devices
                and cutting-edge technology. However, my passion for crafting meaningful and engaging user
                experiences led me to switch careers and pursue product design.
              </p>
              <p>
                When I'm not immersed in design projects, you'll likely find me exploring new cities with my
                camera, capturing the beauty of everyday life. Balancing work with personal adventures keeps me
                inspired and fuels my creativity.
              </p>
              <Link to="/projects" className="projects-link">
                <i className="border-line">Discover more projects</i>
                <span>
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </span>
              </Link>
            </div>
            <div className="about-col">
              <img src="/assets/images/me/me.jpg" alt="Lovely" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
