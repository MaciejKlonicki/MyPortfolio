import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="home-link">Home</Link>
            <div className="links">
                <Link to="/about-me">About me</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </nav>
    );
}

export default Navbar;