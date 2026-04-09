import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Narrendran Poorangvel</div>

      <ul className="navbar__links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        {/* <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/education">Education</Link></li> */}
        <li><Link to="/journey">Journey</Link></li>
        <li><Link to="/certificates">Certificates</Link></li>
        {/* <li><Link to="/contact">Contact</Link></li> */}
      </ul>
    </nav>
  )
}

export default Navbar