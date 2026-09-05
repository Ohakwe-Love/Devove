import { useEffect } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function ResumePage() {
  useDocumentTitle("Resume | Devove");

  useEffect(() => {
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "/assets/css/my_cv.css";
    stylesheet.dataset.resumeStyles = "true";
    document.head.appendChild(stylesheet);

    return () => {
      stylesheet.remove();
    };
  }, []);

  return (
    <>
      <button className="download-btn" onClick={() => window.print()}>
        Download PDF
      </button>

      <main className="cv-container" id="cv-container">
        <div className="header">
          <div className="name">Ohakwe Love</div>
          <div className="title">Software Engineer | Full-Stack Web Developer</div>
          <div className="contact-info">
            <p>
              <i className="fa-solid fa-envelope"></i> <a href="mailto:ohakwemuna@gmail.com">ohakwemuna@gmail.com</a>
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> <a href="tel:+2348161452508">+234 816 145 2508</a>
            </p>
            <p>
              <i className="fa-brands fa-linkedin"></i>{" "}
              <a href="https://www.linkedin.com/in/love-ohakwe/">linkedin.com/in/love-ohakwe</a>
            </p>
            <p>
              <i className="fa-brands fa-github"></i> <a href="https://github.com/Ohakwe-Love">github.com/Ohakwe-Love</a>
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i> Lagos, Nigeria | Open to remote and relocation opportunities
            </p>
          </div>
        </div>

        <section className="cv_content">
          <div className="section-title">Professional Summary</div>
          <div className="description">
            <p>
              Software Engineer and Web Developer with hands-on experience building responsive, user-focused web
              applications using HTML, CSS, JavaScript, PHP, Laravel, React, and SQL-based databases. I enjoy turning
              product ideas into reliable interfaces and maintainable systems that balance performance, usability, and
              clean implementation.
            </p>
            <p>
              I currently serve as a Web Development Tutor at Digital Dreams ICT Academy, where I mentor aspiring
              developers through project-based instruction and practical debugging workflows. I work comfortably both
              independently and in collaborative teams, and I care deeply about continuous learning, thoughtful
              problem-solving, and delivering polished digital experiences.
            </p>
          </div>
        </section>

        <section className="cv_content">
          <div className="section-title">Professional Experience</div>

          <div className="job">
            <div className="job-header">
              <div>
                <div className="job-title">Web Development Tutor</div>
                <div className="company">Digital Dreams ICT Academy</div>
              </div>
              <div className="date">2024 - Present</div>
            </div>
            <div className="description">
              <p>
                I deliver practical, industry-relevant training to aspiring developers, helping them build strong
                foundations in front-end and back-end web development.
              </p>
            </div>
            <ul>
              <li>Teach and mentor students in HTML, CSS, JavaScript, PHP, and core web development principles.</li>
              <li>Develop and deliver structured, hands-on lessons tailored to beginner and intermediate learners.</li>
              <li>Guide students through real-world projects, code reviews, and debugging practices that build practical confidence.</li>
              <li>Provide one-on-one support, assess student progress, and offer personalized feedback to improve performance.</li>
            </ul>
          </div>

          <div className="job">
            <div className="job-header">
              <div>
                <div className="job-title">Mathematics Tutor</div>
                <div className="company">Solid Foundation</div>
              </div>
              <div className="date">2022 - 2024</div>
            </div>
            <div className="description">
              <p>
                I provided personalized academic support to students, helping them build confidence and mastery in
                core mathematical concepts across different levels.
              </p>
            </div>
            <ul>
              <li>Delivered one-on-one and group tutoring sessions in algebra, geometry, trigonometry, and calculus.</li>
              <li>Helped students prepare for exams, solve problem sets, and understand complex mathematical concepts.</li>
              <li>Monitored progress and provided regular feedback to strengthen study habits and performance.</li>
              <li>Encouraged logical reasoning, critical thinking, and independent problem-solving in every session.</li>
            </ul>
          </div>
        </section>

        <section className="cv_content">
          <div className="section-title">Technical Skills</div>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Frontend Technologies</h4>
              <ul className="skill-list">
                <li>Languages: HTML5, CSS3, JavaScript</li>
                <li>Libraries/Frameworks: React, Tailwind CSS, Bootstrap</li>
                <li>Styling &amp; UI: Tailwind CSS, Bootstrap, Sass/SCSS, Material UI, Styled Components</li>
                <li>Responsive Design: Media Queries, Flexbox, CSS Grid, Mobile-first Design</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Backend Technologies</h4>
              <ul className="skill-list">
                <li>PHP, Laravel</li>
                <li>REST-style application development</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Databases</h4>
              <ul className="skill-list">
                <li>Database Management: MySQL, PostgreSQL, SQLite, Query Optimization</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Version Control</h4>
              <ul className="skill-list">
                <li>Git</li>
                <li>GitHub</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Soft Skills</h4>
              <ul className="skill-list">
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Communication</li>
                <li>Time Management</li>
                <li>Adaptability</li>
                <li>Attention to Detail</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Testing &amp; Debugging</h4>
              <ul className="skill-list">
                <li>Testing Tools: PHPUnit (Laravel), manual browser testing</li>
                <li>Debugging: Chrome DevTools, Laravel Debugbar</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cv_content">
          <div className="section-title">Key Projects</div>

          <div className="project">
            <div className="project-name">Urbanist E-commerce Platform</div>
            <div className="project-tech">Laravel, MySQL, JavaScript, CSS, HTML</div>
            <div className="description">
              Urbanist is a modern and scalable e-commerce website designed to offer a seamless shopping experience
              for furniture and home decoration products. Built using Laravel, the platform supports both guest and
              authenticated user experiences, with robust features for product browsing, order management, and
              customer interaction.
            </div>
            <div>
              <h4>Features</h4>
              <ul>
                <li>Custom user authentication (registration, login, password reset)</li>
                <li>Product catalog with categories, filters, and search functionality</li>
                <li>Cart and wishlist systems with session-based support for guests</li>
                <li>Secure checkout process with integration for payment gateways (Stripe, Paystack, Flutterwave, PayPal)</li>
                <li>Email notifications for account registration, order confirmation, and password resets</li>
                <li>Google OAuth login and Google reCAPTCHA (in progress)</li>
                <li>Database seeding with realistic dummy data for testing and development</li>
                <li>Free shipping logic for orders above a specified threshold</li>
              </ul>
            </div>
          </div>

          <div className="project">
            <div className="project-name">Tenece-Inspired Corporate Website</div>
            <div className="project-tech">PHP, MySQL, JavaScript, CSS, HTML</div>
            <div className="description">
              After discovering the Tenece website and finding its layout and design visually appealing, I recreated
              and enhanced it as a personal project to sharpen my development skills. The clone replicates the
              professional aesthetic of the original site while integrating functional features such as user
              authentication and a blog viewing system. This project showcases my ability to reverse-engineer
              existing web designs and extend them with real-world functionality using backend technologies.
            </div>
            <div>
              <h4>Features</h4>
              <ul>
                <li>Recreated the front-end layout using HTML, CSS, and JavaScript based on Tenece's original design.</li>
                <li>Added dynamic functionality using PHP for user registration, login, and session management</li>
                <li>Built a basic blog module that allows users to view blog posts.</li>
                <li>Ensured responsiveness across devices for a seamless user experience.</li>
                <li>Practiced clean code structure and modular PHP development.</li>
              </ul>
            </div>
          </div>

          <div className="project">
            <div className="project-name">Mobile-First Web Application</div>
            <div className="description">
              This project demonstrates a modern mobile-first design strategy, prioritizing smartphone and tablet
              users while maintaining full responsiveness across desktops. The application features a clean UI, fast
              load times, and intuitive navigation, delivering a seamless user experience regardless of screen size.
            </div>
            <div>
              <h4>Features</h4>
              <ul>
                <li>Developed using HTML5, CSS3 (Flexbox &amp; Grid), JavaScript.</li>
                <li>Optimized images, assets, and layout for fast loading on slower networks.</li>
                <li>Designed touch-friendly interactions and minimized input friction for mobile users.</li>
                <li>Prioritized performance, accessibility, and usability on mobile devices.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cv_content">
          <div className="section-title">Education</div>

          <div className="education-item">
            <div className="degree">Senior Secondary Certificate</div>
            <div className="institution">Confidence Academy</div>
            <div className="date">2014 - 2020</div>
          </div>
          <div className="education-item">
            <div className="institution">Currently pursuing tertiary education</div>
          </div>
        </section>

        <section className="cv_content">
          <div className="section-title">Certifications</div>
          <ul>
            <li>Web Development Certification - Digital Dreams ICT Academy</li>
            <li>Jobberman Certification</li>
            <li>Online Course Certifications - Udemy Platform</li>
          </ul>
        </section>

        <section className="cv_content">
          <div className="section-title">Career Objective</div>
          <div className="description">
            <p>
              To continue growing as a Full-Stack Web Developer by building scalable, user-centered web applications,
              contributing meaningfully to strong engineering teams, and creating digital products that solve real
              problems. I also want to keep mentoring others and helping bridge the gap between theory and practical
              application in the tech ecosystem.
            </p>
          </div>
          <div className="section-title">Languages</div>
          <ul>
            <li>English (Fluent)</li>
            <li>Igbo (Fluent)</li>
            <li>Yoruba (Basic)</li>
          </ul>
          <div className="section-title">Availability</div>
          <p>
            I am available for full-time opportunities and open to remote, hybrid, or relocation-based roles. I am
            eager to contribute my skills, curiosity, and passion for web development to a dynamic team building
            impactful digital solutions.
          </p>
        </section>
      </main>
    </>
  );
}
