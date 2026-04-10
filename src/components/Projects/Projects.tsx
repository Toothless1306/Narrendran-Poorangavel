import { projects } from "../../data/projects/projects"
import "./Projects.css"

const Projects = () => {
  const visibleProjects = Object.values(projects).filter(
    (project) => project.show
  )

  return (
    <>

      <h2>Projects</h2>

      <div className="projects-header">
        <h3>Project Name</h3>
        <h3>Description</h3>
        <h3>Tech Stack</h3>
        <h3>Category</h3>
      </div>

      {visibleProjects.map((project) => (
        <div key={project.id} className="project-row">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p className="tech-stack">{project.techStack.join(", ")}</p>
          <p>{project.category}</p>
        </div>
      ))}
    </>
  )
}

export default Projects