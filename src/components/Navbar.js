import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">My Portfolio</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-indigo-600">About</Link></li>
          <li><Link to="/research" className="hover:text-indigo-600">Research</Link></li>
          <li><Link to="/coursework" className="hover:text-indigo-600">Coursework</Link></li>
          <li><Link to="/resume" className="hover:text-indigo-600">Resume</Link></li>
          <li><Link to="/contact" className="hover:text-indigo-600">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;