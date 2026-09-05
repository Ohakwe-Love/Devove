import { Link } from "react-router-dom";
import { ArrowUpRightCircleIcon } from "./icons";


export default function CtaBanner({ title, description, href, label }) {
  return (
    <section className="content" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
      <div className="container">
        <div className="content-container">
          <div className="content-details">
            <h2 className="content-title">{title}</h2>
            <p className="content-description">{description}</p>
            <Link
              to={href}
              target="_blank"
              className="primary-btn animated-border"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              {label}
              <span>
                <ArrowUpRightCircleIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export const defaultCta = {
  title: "Ready to Build Something Extraordinary?",
  description:
    "Let's discuss how we can transform your vision into a digital masterpiece that drives results and exceeds expectations.",
  href: "/contact",
  label: "Contact Here",
};
