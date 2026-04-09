import "./Hero.css";
import profileImage from "../../assets/profile.png";
import resume from "../../assets/Narrendran Poorangavel.pdf";
import { useState } from "react";

const Hero = () => {

  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const accordionData = [
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
    // {
    //   title: "Current Study",
    //   content: (
    //     <ul>
    //       <li>Currently studying Machine Learning for Data Analytics</li>
    //     </ul>
    //   ),
    // },
  ];
  return (
    <section className="hero">
      <div className="hero__container">
        {/* Profile Image */}
        <div className="hero__image">
          <img src={profileImage} alt="Narrendran Poorangavel" />

          {/* Contact Details */}
          <h3 className="hero__contact-title">Contact Details</h3>
          <div className="hero__contact">
            <a href="mailto:narrendranpoorangavel@gmail.com" className="hero__contact-link">
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
              href="https://www.linkedin.com/in/narrendran-p-0400b621a"
              target="_blank"
              rel="noreferrer"
              className="hero__contact-link"
            >
              LinkedIn
            </a>
          </div>

          {/* Social Links */}
          <div className="hero__socials">
          </div>

          {/* Actions */}
          <div className="hero__actions">
            <a className="hero__button" href="/projects">
              View Projects
            </a>
            <a
              className="hero__button hero__button--secondary"
              href={resume}
              download="Narrendran Poorangavel CV.pdf"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="hero__content">
          <h1 className="hero__title">Hi, I'm Narrendran Poorangavel</h1>
          <h2 className="hero__subtitle">Associate Full Stack Developer</h2>

          <p className="hero__description">
            I am a passionate full-stack developer specializing in building high-performance, scalable, and maintainable web applications, primarily using the MERN stack. I focus on writing clean, efficient, and scalable code that delivers real business value and smooth user experiences.

            With strong skills in problem-solving, logical thinking, and teamwork, I enjoy turning complex requirements into reliable solutions. I am also eager to explore new technologies and frameworks, continuously expanding my technical expertise to stay aligned with modern development practices.

            Currently, I am open to work opportunities and ready to commute or relocate based on project and organizational needs. I am excited to contribute to impactful projects, collaborate with dynamic teams, and grow as a developer in challenging environments.
          </p>


          <div className="hero__status">
            {accordionData.map((item) => (
              <div key={item.title} className="accordion-item">
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
                  <p>{item.content}</p>
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