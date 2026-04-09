import { skills } from "../../data/skills/skills"

const Skills = () => {
  const visibleSkills = Object.values(skills).filter(
    (skill) => skill.show
  )

  return (
    <section id="skills">
      <h2>Skills</h2>

      {visibleSkills.map((skill) => (
        <div key={skill.id}>
          {skill.name}
        </div>
      ))}
    </section>
  )
}

export default Skills