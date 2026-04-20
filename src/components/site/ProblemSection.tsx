const ProblemSection = () => (
  <section id="problem">
    <div className="container">
      <div className="section-label">
        <span>01 — The problem</span>
      </div>
      <h2 className="section-heading">
        If Google can't find you,<br />
        <em>your competitors can.</em>
      </h2>

      <div className="problem-grid">
        <div className="problem">
          <div className="problem-icon">No Website</div>
          <h3>You're running off Facebook.</h3>
          <p>Every search that lands on a competitor's site is a booking you didn't get. Facebook is not a website — it's a referral you're paying for in lost customers.</p>
        </div>
        <div className="problem">
          <div className="problem-icon">Booking Platforms</div>
          <h3>You're paying 15–20% to Booking.com.</h3>
          <p>Every direct booking your site captures is commission you keep. Over a year, that's a site that pays for itself in the first month.</p>
        </div>
        <div className="problem">
          <div className="problem-icon">Broken / Outdated</div>
          <h3>Your site looks like 2014.</h3>
          <p>An old site doesn't just fail to convert — it actively costs you credibility. People assume you're out of business, or worse, careless.</p>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
