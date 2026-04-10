import Hero from "../components/Hero/Hero"
import Skills from "../components/Skills/Skills"
import Projects from "../components/Projects/Projects"
import Certificates from "../components/Certificates/Certificates"
import Experience from "../components/Experience/Experience"
import Contact from "../components/Contact/Contact"
import Navbar from "../components/Navbar/Navbar"
import Journey from "../components/Journey/journey"

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="page-container">
        <section id="home" className="home">
          <Hero />
        </section>


        <section id="projects" className="projects">
          <Projects />
        </section>

        <section id="journey" className="journey">
          <Journey />
        </section>

        <section id="certificates" className="certificates">
          <Certificates />
        </section>

        {/* <section id="experience" className="experience">
          <Experience />
        </section> */}


      </main>
    </>
  )
}

export default Home