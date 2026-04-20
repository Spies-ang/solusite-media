const Hero = () => (
  <section className="hero">
    <div className="container">
      <div className="hero-meta">
        <span className="hero-meta-dot" />
        <span>Independent Web Developer · Pretoria, South Africa</span>
      </div>

      <h1>
        Stop losing<br />
        customers to a<br />
        <em>website you don't have.</em>
      </h1>

      <p className="hero-sub">
        I build proper websites for South African service businesses — before you pay, at a fixed price, delivered in days. Not weeks. Not months.
      </p>

      <div className="hero-actions">
        <a href="#contact" className="btn btn-primary">
          Talk to me <span className="btn-arrow">→</span>
        </a>
        <a href="#work" className="btn btn-secondary">
          See the work
        </a>
      </div>

      <p className="hero-signature">— built quietly, after hours, with care.</p>
    </div>
  </section>
);

export default Hero;
