import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ padding: "1rem", background: "#f0f0f0" }}>
            <ul style={{ display: "flex", listStyle: "none", gap: "1rem" }}>
                <li><Link to="/">About</Link></li>
                <li><Link to="/research">Research</Link></li>
                <li><Link to="/coursework">Coursework</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;