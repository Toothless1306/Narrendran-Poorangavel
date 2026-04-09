import { education } from "../../data/education/education";
import "./Education.css";

const Education = () => {
  const visibleEducation = Object.values(education).filter(
    (item) => item.show
  );

  return (
    <section id="education">
      <h2>Education</h2>

      <div>
        {visibleEducation.map((item) => (
          <div key={item.id} className="education-card">
            <h3>{item.institution}</h3>
            <p>{item.degree}</p>
            <p>{item.year}</p>
            <p>{item.score}</p>

            {/* Render specialization for degree */}
            {item.specialization && item.specialization.length > 0 && (
              <p className="education-extra">
                Specialization: {item.specialization.join(", ")}
              </p>
            )}

            {/* Render group for HSC/SSLC */}
            {item.group && (
              <p className="education-extra">
                Group: {item.group}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;