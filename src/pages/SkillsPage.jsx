import useDocumentTitle from "../hooks/useDocumentTitle";
import PageBanner from "../components/PageBanner";
import CtaBanner from "../components/CtaBanner";
import stackItems from "../data/stacks";

const skillCards = [
  {
    icon: "/assets/images/skills/problem-solving.png",
    title: "Problem-Solving",
    description: "Approach complex technical challenges with a structured, logical, and systematic mindset.",
  },
  {
    icon: "/assets/images/skills/team.png",
    title: "Collaboration",
    description: "Work effectively in a team, provide constructive code feedback, and utilize Git flow smoothly.",
  },
  {
    icon: "/assets/images/skills/user-focus.png",
    title: "User Focus",
    description: "Understand user needs, focusing on accessibility, performance, and overall usability.",
  },
  {
    icon: "/assets/images/skills/security.png",
    title: "Security",
    description: "Ensuring data integrity and safeguarding applications through proactive measures.",
  },
];

export default function SkillsPage() {
  useDocumentTitle("Skills | Devove");

  return (
    <main>
      <section className="stacks">
        <div className="container">
          <div className="section-header">
            <div className="section-header-col">
              <div className="section-label slide-in-down">
                <span>
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" className="size-4">
                    <g fill="currentColor">
                      <path d="m220 169.09l-92 53.65l-92-53.65a8 8 0 0 0-8 13.82l96 56a8 8 0 0 0 8.06 0l96-56a8 8 0 1 0-8.06-13.82"></path>
                      <path d="m220 121.09l-92 53.65l-92-53.65a8 8 0 0 0-8 13.82l96 56a8 8 0 0 0 8.06 0l96-56a8 8 0 1 0-8.06-13.82"></path>
                      <path d="m28 86.91l96 56a8 8 0 0 0 8.06 0l96-56a8 8 0 0 0 0-13.82l-96-56a8 8 0 0 0-8.06 0l-96 56a8 8 0 0 0 0 13.82"></path>
                    </g>
                  </svg>
                </span>
                Tech Stacks
              </div>
              <h2 className="section-heading slide-in-left">Tech stacks I'm familiar with</h2>
              <p className="section-subtitle slide-in-up">
                Crafting exceptional digital experiences through cutting-edge technologies and design principles
              </p>
            </div>
          </div>

          <div className="stacks-container">
            <div className="stacks-track">
              {stackItems.concat(stackItems).map((item, index) => (
                <div className="stack-item" key={`${item.alt}-${index}`}>
                  <img src={item.src} alt={item.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="skills-container">
        <div className="container">
          <div className="skills-grid">
            {skillCards.slice(2, 4).map((card) => (
              <div className="skill-card" key={card.title}>
                <div className="skill-icon">
                  <div className="icon-glow"></div>
                  <img src={card.icon} alt="" />
                </div>
                <h3 className="skill-title">{card.title}</h3>
                <p className="skill-description">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="section-header">
            <div className="section-header-col">
              <div className="section-label">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M5.1496 12.05 1.59961 8.5l3.54999 -3.525 3.525 3.525 -3.525 3.55Zm4.175 9.95V16.683c-1.06665 -0.08865 -2.125 -0.20385 -3.175 -0.3455 -1.05 -0.14165 -2.09999 -0.3375 -3.14999 -0.5875l0.375 -1.5c1.421165 0.33335 2.84649 0.57085 4.27599 0.7125 1.4297 0.14165 2.88045 0.2125 4.35225 0.2125 1.472 0 2.92275 -0.07085 4.35225 -0.2125 1.42965 -0.14165 2.85285 -0.37915 4.2695 -0.7125l0.375 1.5c-1.05 0.25 -2.0998 0.4476 -3.1495 0.59275 -1.0498 0.14515 -2.1083 0.2559 -3.1755 0.33225V22h-5.35Zm2.672 -15.5c-0.76465 0 -1.41365 -0.26765 -1.947 -0.803 -0.5333 -0.53535 -0.8 -1.185335 -0.8 -1.95 0 -0.764665 0.2677 -1.413665 0.803 -1.947 0.53535 -0.533335 1.18535 -0.8 1.95 -0.8 0.7647 0 1.4137 0.267665 1.947 0.803 0.53335 0.535335 0.8 1.185335 0.8 1.95 0 0.764665 -0.26765 1.41365 -0.803 1.947 -0.5353 0.53335 -1.1853 0.8 -1.95 0.8Zm0.005 7.15c-0.5013 0 -0.93115 -0.1785 -1.2895 -0.5355 -0.3583 -0.357 -0.5375 -0.78615 -0.5375 -1.2875 0 -0.50135 0.1785 -0.93115 0.5355 -1.2895 0.357 -0.35835 0.7862 -0.5375 1.2875 -0.5375 0.50135 0 0.9312 0.1785 1.2895 0.5355 0.35835 0.357 0.5375 0.78615 0.5375 1.2875 0 0.50135 -0.1785 0.93115 -0.5355 1.2895 -0.357 0.35835 -0.78615 0.5375 -1.2875 0.5375Zm5.448 -1.9 -1.55 -2.75 1.55825 -2.75h3.11675l1.55 2.75 -1.55825 2.75h-3.11675Z"
                      strokeWidth="0.5"
                    ></path>
                  </svg>
                </span>
                Expertise
              </div>
              <h2 className="section-heading">Professional Values</h2>
              <p className="section-subtitle">
                Key interpersonal abilities that support efficient, secure, and results-driven work.
              </p>
            </div>
          </div>

          <div className="skills-grid">
            {skillCards.slice(0, 2).map((card) => (
              <div className="skill-card" key={card.title}>
                <div className="skill-icon">
                  <div className="icon-glow"></div>
                  <img src={card.icon} alt="" />
                </div>
                <h3 className="skill-title">{card.title}</h3>
                <p className="skill-description">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <CtaBanner
        title="Need these skills on your next build?"
        description="Let's talk about how I can help bring your product to life with the right stack and execution."
        href="/contact"
        label="Start a conversation"
      /> */}
    </main>
  );
}
