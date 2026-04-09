import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"

import Home from "./pages/Home"
import ProjectsPage from "./pages/ProjectsPage"
import ExperiencePage from "./pages/ExperiencePage"
import EducationPage from "./pages/EducationPage"
import CertificatesPage from "./pages/CertificatesPage"
import ContactPage from "./pages/ContactPage"
import Journey from "./components/Journey/journey"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        {/* <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/education" element={<EducationPage />} /> */}
        <Route path="/journey" element={<Journey />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App