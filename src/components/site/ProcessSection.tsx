const ProcessSection = () => (
  <section id="process">
    <div className="container">
      <div className="section-label">
        <span>03 — How it works</span>
      </div>
      <h2 className="section-heading">
        I build it first.<br />
        <em>Then you decide.</em>
      </h2>
      <p className="section-lede">
        Most developers quote, invoice, then build. I do it the other way round — you see a finished site before any money changes hands.
      </p>

      <div className="process-grid">
        <div className="process-step">
          <span className="process-num">01</span>
          <h3>I build a demo</h3>
          <p>Custom-designed for your business. Not a template. Real content, real layout, live link you can open on your phone.</p>
        </div>
        <div className="process-step">
          <span className="process-num">02</span>
          <h3>You have a look</h3>
          <p>No commitment. If it's not right, we move on. If it's the direction, we go to step three.</p>
        </div>
        <div className="process-step">
          <span className="process-num">03</span>
          <h3>We sort the details</h3>
          <p>Your real photos, real pricing, real copy. Quick call or exchange. I rebuild it with your actual content.</p>
        </div>
        <div className="process-step">
          <span className="process-num">04</span>
          <h3>Live in 2–3 days</h3>
          <p>Domain, hosting, email — all handled. You don't touch anything technical. It just works.</p>
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
