const WhoForSection = () => (
  <section id="whofor">
    <div className="container">
      <div className="section-label">
        <span>05 — Fit check</span>
      </div>
      <h2 className="section-heading">
        I'm not for everyone.<br />
        <em>Here's who I'm for.</em>
      </h2>

      <div className="whofor-grid">
        <div className="whofor">
          <div className="whofor-head yes">→ This is for you if</div>
          <ul>
            <li>You run a <strong>service-based business</strong> in South Africa — B&amp;B, architect, catering, photographer, driving school, salon, event venue, tradesperson.</li>
            <li>You've been meaning to get a website for <strong>months</strong>, maybe <strong>years</strong>.</li>
            <li>You're tired of losing bookings to Booking.com, Airbnb, or competitors who show up on Google.</li>
            <li>You want <strong>one person</strong> to handle the whole thing — not an agency that passes you around.</li>
          </ul>
        </div>
        <div className="whofor">
          <div className="whofor-head no">✕ This isn't for you if</div>
          <ul>
            <li>You need a 50-page corporate website with a custom CMS — I build focused sites, not enterprise systems.</li>
            <li>You want to <strong>manage the build</strong> in a project tool with weekly stand-ups.</li>
            <li>You're hoping to negotiate the price down — it's flat for a reason.</li>
            <li>You want something in a week that <strong>nobody has any control over</strong>. Good work takes a few days.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default WhoForSection;
