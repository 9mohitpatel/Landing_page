import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AdminPanel from "./pages/AdminPanel";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="topbar">
          <div className="brand">RealTrust Realty</div>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <a href="#about">About</a>
            <a href="#why-us">Services</a>
            <a href="#projects">Projects</a>
            <a href="#clients">Testimonials</a>
            <a href="#contact">Contact</a>
            <Link to="/admin">Admin</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>

        <section className="footer-cta">
        <div className="site-footer">
          <div className="footer-brand">
            <div className="brand">RealTrust Realty</div>
            <p>Premium real estate marketing for the modern era.</p>
            <div className="footer-socials">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="footer-links">
            <div>
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#why-us">Services</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            <div>
              <h4>Services</h4>
              <a href="#why-us">Strategic Consulting</a>
              <a href="#why-us">Creative & Design</a>
              <a href="#why-us">Digital Marketing</a>
              <a href="#why-us">Real Estate Development</a>
            </div>
            <div>
              <h4>Contact Us</h4>
              <p>1234 Innovation Ave, Suite 100</p>
              <p>New York, NY 10001</p>
              <p>+1 (555) 123-4567</p>
              <p>hello@realtrust.com</p>
            </div>
          </div>
          <div className="footer-bottom">© 2025 RealTrust Realty. All rights reserved.</div>
        </div>
      </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
