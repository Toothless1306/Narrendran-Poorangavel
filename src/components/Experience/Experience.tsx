import "./Experience.css"
import { experience } from "../../data/experience/experience"

const Experience = () => {
    const visibleExperience = Object.values(experience).filter(
        (item) => item.show
    )

    return (
        <>

            <h2 className="section-title">Experience</h2>

            <div className="experience__list">
                {visibleExperience.map((item) => (
                    <div className="experience__card" key={item.id}>
                        <h3>{item.role}</h3>
                        <h4>{item.company}</h4>
                        <p>{item.duration}</p>

                        <ul className="experience__highlights">
                            {item.highlights.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Experience