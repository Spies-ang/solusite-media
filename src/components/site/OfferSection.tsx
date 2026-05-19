const OfferSection = () => (
  <section id="offer">
    <div className="container">
      <div className="section-label">
        <span>04 — The numbers</span>
      </div>

      <div className="offer-container">
        <div className="offer-grid">
          <div className="offer-left">
            <h2>Fixed price.<br /><em>No surprises.</em></h2>
            <p>Most agencies price by "how much do they look like they can pay." I don't. One flat number, split into two.</p>
            <div className="offer-price">
              <span className="offer-price-num">R5,000</span>
              <span className="offer-price-label">Once-off build</span>
            </div>
            <p className="offer-price-sub">R2,500 to start · R2,500 when you're happy · Then R700/month for everything else.</p>
          </div>

          <div className="offer-right">
            <h3>What's included</h3>
            <ul className="offer-list">
              <li><span className="offer-check">✓</span><span>Fully custom website designed around your business — not a template.</span></li>
              <li><span className="offer-check">✓</span><span>Mobile-optimised. Looks right on every device.</span></li>
              <li><span className="offer-check">✓</span><span>Free domain + professional email setup.</span></li>
              <li><span className="offer-check">✓</span><span>Google-ready so you start showing up in local search.</span></li>
              <li><span className="offer-check">✓</span><span>Unlimited edits during the build. First month of maintenance free.</span></li>
              <li><span className="offer-check">✓</span><span>R700/month after — hosting, SEO, edits, updates, support.</span></li>
            </ul>

            <div className="offer-guarantee">
              <strong>No-risk guarantee</strong>
              You only pay the second R2,500 when you're completely happy with the final site. No lock-in on the monthly — cancel any time.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OfferSection;
