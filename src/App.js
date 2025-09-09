import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Research from "./components/Research";
import Coursework from "./components/Coursework";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <Router basename="/my-portfolio">
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/coursework" element={<Coursework />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;