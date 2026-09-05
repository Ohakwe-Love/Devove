import { Link } from "react-router-dom";
import { ChevronRightIcon } from "./icons";

/** Small page-title banner used at the top of About, Skills, and Services. */
export default function PageBanner({ title }) {
  return (
    <section className="banner">
      <div className="container banner-container">
        <div className="text-content">
          <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            {title}
          </h1>
          <p>
            <Link to="/">
              <em className="border-line">home</em>
            </Link>
            <span>
              <ChevronRightIcon />
            </span>
            {title}
          </p>
        </div>
      </div>
    </section>
  );
}
