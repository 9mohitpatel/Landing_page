import Clients from "../components/Clients";
import ContactForm from "../components/ContactForm";
import NewsLetter from "../components/NewsLetter";
import Projects from "../components/Projects";

const LandingPage = () => {
  return (
    <>
      <section className="hero-modern template-hero" id="home">
        <div className="hero-grid hero-two-col">
          <div className="hero-copy">
            <h1>
              Consultation, Design &
              <br />
              <span className="highlight">Marketing for Real Estate.</span>
            </h1>
            <p>
              We build high-converting experiences for property launches: premium visuals,
              modern landing pages, and performance ads that keep your pipeline busy.
            </p>
            <div className="bullet-list">
              <div>✔️ Presentation & staging-ready visuals</div>
              <div>✔️ Landing pages tailored to each project</div>
              <div>✔️ Hyperlocal ads with live lead tracking</div>
            </div>
            <div className="hero-stats lined">
              <div>
                <strong>120+</strong>
                <span>Projects launched</span>
              </div>
              <div>
                <strong>18</strong>
                <span>Cities served</span>
              </div>
              <div>
                <strong>4.9/5</strong>
                <span>Client rating</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-visual-img" />
            {/* <div className="hero-quote">“Design is intelligence made visible.”</div> */}
            <div className="hero-badge">
              <div className="badge-top">Top</div>
              <div className="badge-number">1%</div>
              <div className="badge-sub">Agency Rank</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-band" id="about">
        <div className="about-duo">
          <div className="about-collage">
            <div className="about-circle big" />
            <div className="about-circle mid" />
            <div className="about-circle small" />
          </div>
          <div className="about-copy">
            <p className="eyebrow">About our agency</p>
            <h2 className="about-title">
              We redefine how <span>modern properties</span> grow.
            </h2>
            <p className="about-sub">
              In a world of noise, we create clarity. We pair data, design, and marketing to
              launch high-performing real estate campaigns that feel premium and convert.
            </p>
            <div className="about-metrics two-col">
              <div>
                <strong>98%</strong>
                <span>Client retention</span>
              </div>
              <div>
                <strong>$4.2B</strong>
                <span>Value created</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section why" id="why-us">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>AI-smart workflow for real estate growth</h2>
          <p className="section-sub">
            We handle creative, landing experiences, and hyperlocal performance campaigns so you stay focused on clients.
          </p>
        </div>
        <div className="feature-cards columns-3">
          <div className="feature-tile">
            <div className="icon-chip">🖼️</div>
            <h3>Presentation</h3>
            <p>Pro visuals, cinematic walkthroughs, and compelling copy tailored to each listing.</p>
          </div>
          <div className="feature-tile">
            <div className="icon-chip">🎨</div>
            <h3>Design</h3>
            <p>Minimal, airy landing experiences inspired by luxury aesthetics—built to convert.</p>
          </div>
          <div className="feature-tile">
            <div className="icon-chip">🚀</div>
            <h3>Marketing</h3>
            <p>Hyperlocal ads, retargeting, and nurture flows with real-time dashboards.</p>
          </div>
          <div className="feature-tile">
            <div className="icon-chip">📊</div>
            <h3>Insights</h3>
            <p>Transparent reporting on leads, contact forms, and subscriber growth.</p>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Our Projects</p>
          <h2>Recent showcases and campaigns</h2>
          <p className="section-sub">
            Real work with real results — pulled live from the admin-managed
            backend.
          </p>
        </div>
        <Projects />
      </section>

      <section className="section clients-section" id="clients">
        <div className="section-heading">
          <p className="eyebrow">Happy Clients</p>
          <h2>Voices of success</h2>
          <p className="section-sub">
            Testimonials from buyers, sellers, and builders who loved the
            experience.
          </p>
        </div>
        <Clients />
      </section>

      <section className="subscriber-section">
          <NewsLetter />
      </section>



      <section className="section consult-split" id="consult">
        <div className="consult-left">
          <h3>Request Consultation</h3>
          <p>
            Exclusive access to our strategy team. Tell us about your property or upcoming launch and we&rsquo;ll respond with a tailored plan and timeline.
          </p>
          <ul className="consult-bullets">
            <li>Landing pages and creative tailored to each project</li>
            <li>Hyperlocal ads with live lead tracking</li>
            <li>Dedicated team for design, media, and reporting</li>
          </ul>
        </div>
        <div className="consult-card">
          <ContactForm
            variant="hero"
            title="Book a Free Consultation"
            subtitle="Fill out the form below and our team will get back to you shortly."
          />
        </div>
      </section>

      <section className="cta-build">
        <div className="cta-build-card">
          <div className="cta-build-inner">
            <h2>Let&rsquo;s Build Something Together.</h2>
            <p>
              Ready to elevate your listings? Our strategists and creatives are waiting to hear your vision.
            </p>
            <a className="primary-btn" href="#consult">
              Start Your Project
            </a>
          </div>
        </div>
      </section>


    </>
  );
};

export default LandingPage;
