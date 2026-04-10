import "./Journey.css"
import { journey } from "../../data/journey/journey"

const Journey = () => {
    const visibleJourney = Object.values(journey).filter(
        (item) => item.show
    )

    return (
        <section>
            <h2 className="section-title">My Journey</h2>

            <div className="journey-path">
                {visibleJourney.map((item, index) => {
                    const isLeft = index % 2 === 0

                    return (
                        <div
                            key={item.id}
                            className={`journey-row ${isLeft ? "left" : "right"
                                }`}
                        >
                            {/* Detail Card */}
                            <div className="journey-card">
                                <div className="journey-node"></div>

                                <div className="journey-content">
                                    <h3>{item.title}</h3>
                                    <h4>{item.subtitle}</h4>

                                    <p>{item.timeline}</p>
                                    <p>{item.location}</p>

                                    {item?.score && (
                                        <p>{item.score}</p>
                                    )}

                                    {item?.highlights && (
                                        <ul>
                                            {item.highlights.map(
                                                (
                                                    point,
                                                    index
                                                ) => (
                                                    <li
                                                        key={
                                                            index
                                                        }
                                                    >
                                                        {point}
                                                    </li>
                                                )
                                            )}
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

                            {/* Side Image */}
                            <div className="journey-image">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Journey