import { projects } from "../../data/projects/projects";
import "./Projects.css";

const Projects = () => {
  const visibleProjects = Object.values(projects).filter(
    (project) => project.show
  );

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-table-container">
        {/* Table header – hidden on mobile */}
        <div className="projects-header">
          <span>Project Name</span>
          <span>Description</span>
          <span>Tech Stack</span>
          <span>Category</span>
        </div>

        {/* Project rows – become cards on mobile */}
        {visibleProjects.map((project) => (
          <div key={project.id} className="project-row">
            <div className="project-title">{project.title}</div>
            <div className="project-description">{project.description}</div>
            <div className="project-tech">
              <span className="tech-stack">{project.techStack.join(", ")}</span>
            </div>
            <div className="project-category">{project.category}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;