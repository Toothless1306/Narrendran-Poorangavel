import "./Journey.css"
import { journey } from "../../data/journey/journey"

const Journey = () => {
    const visibleJourney = Object.values(journey).filter(
        (item) => item.show
    )

    return (
        <section className="journey" id="journey">
            <h2 className="section-title">My Journey</h2>

            <div className="journey-path">
                {visibleJourney.map((item, index) => (
                    <div
                        key={item.id}
                        className={`journey-card ${index % 2 === 0 ? "left" : "right"
                            }`}
                    >
                        <div className="journey-node"></div>

                        <div className="journey-content">
                            <img src={item.image} alt={item.title} />

                            {/* <span className="journey-type">
                                {item.type}
                            </span> */}

                            <h3>{item.title}</h3>
                            <h4>{item.subtitle}</h4>

                            <p>{item.timeline}</p>
                            <p>{item.location}</p>

                            {item?.score && <p>{item.score}</p>}

                            {item?.highlights && (
                                <ul>
                                    {item.highlights.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                            )}

                            {item.website && (
                                <a
                                    href={item.website}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Visit Website
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Journey