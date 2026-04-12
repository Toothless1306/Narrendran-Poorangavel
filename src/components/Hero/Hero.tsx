import "./Hero.css";
import profileImage from "../../assets/professional-profile-2.png";
import resume from "../../assets/Narrendran Poorangavel.pdf";
import { useState, useEffect, ReactNode } from "react";

// Type for accordion items
interface AccordionItem {
  title: string;
  content: ReactNode;
}

const Hero = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [typedSubtitle, setTypedSubtitle] = useState<string>("");
  const fullSubtitle: string = "Associate Full Stack Developer";

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedSubtitle(fullSubtitle.slice(0, index + 1));
      index++;
      if (index === fullSubtitle.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Scroll reveal using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const accordionData: AccordionItem[] = [
    {
      title: "Skills",
      content: (
        <ul className="tree">
          <li>
            Frontend
            <ul>
              <li>ReactJS</li>
              <li>HTML5/CSS3</li>
            </ul>
          </li>
          <li>
            Backend
            <ul>
              <li>NodeJS</li>
              <li>NestJS</li>
              <li>Python</li>
            </ul>
          </li>
          <li>
            Database
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </li>
        </ul>
      ),
    },
    {
      title: "Technical Languages Known",
      content: (
        <ul>
          <li>JavaScript / TypeScript</li>
          <li>Java</li>
          <li>Python</li>
          <li>C++</li>
          <li>C#</li>
        </ul>
      ),
    },
    {
      title: "Speaking Languages Known",
      content: (
        <ul>
          <li>Tamil - Native</li>
          <li>English - Professional</li>
          <li>Hindi - Understanding</li>
        </ul>
      ),
    },
  ];

  return (
    <section className="hero">
      <div className="hero__container">
        {/* Profile Image & Contact Section */}
        <div className="hero__image scroll-reveal">
          <img src={profileImage} alt="Narrendran Poorangavel" />

          <h3 className="hero__contact-title">Contact Details</h3>
          <div className="hero__contact">
            <a
              href="mailto:narrendranpoorangavel@gmail.com"
              className="hero__contact-link"
            >
              Email
            </a>
            <a href="tel:+917868843874" className="hero__contact-link">
              Phone
            </a>
            <a
              href="https://github.com/Toothless1306"
              target="_blank"
              rel="noreferrer"
              className="hero__contact-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/narrendranpoorangavel/"
              target="_blank"
              rel="noreferrer"
              className="hero__contact-link"
            >
              LinkedIn
            </a>
          </div>

          <div className="hero__actions">
            {/* <a className="hero__button" href="/projects">
              View Projects
            </a> */}
            <a
              className="hero__button hero__button--secondary"
              href={resume}
              download="Narrendran Poorangavel CV.pdf"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="hero__content">
          <h1 className="hero__title">Hi, I'm Narrendran Poorangavel</h1>
          <h2 className="hero__subtitle">{typedSubtitle}</h2>

          <p className="hero__description">
            I am a passionate full-stack developer specializing in building
            high-performance, scalable, and maintainable web applications,
            primarily using the MERN stack. I focus on writing clean,
            efficient, and scalable code that delivers real business value and
            smooth user experiences. With strong skills in problem-solving,
            logical thinking, and teamwork, I enjoy turning complex
            requirements into reliable solutions. I am also eager to explore
            new technologies and frameworks, continuously expanding my
            technical expertise to stay aligned with modern development
            practices. Currently, I am open to work opportunities and ready to
            commute or relocate based on project and organizational needs. I am
            excited to contribute to impactful projects, collaborate with
            dynamic teams, and grow as a developer in challenging environments.
          </p>

          <div className="hero__status">
            {accordionData.map((item, idx) => (
              <div
                key={item.title}
                className="accordion-item scroll-reveal"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <button
                  className={`accordion-header ${openSection === item.title ? "active" : ""
                    }`}
                  onClick={() => toggleSection(item.title)}
                >
                  {item.title}
                  <span className="accordion-icon">
                    {openSection === item.title ? "▲" : "▼"}
                  </span>
                </button>
                <div
                  className={`accordion-content ${openSection === item.title ? "open" : ""
                    }`}
                >
                  <div>{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;