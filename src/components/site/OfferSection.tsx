const pricingOptions = [
  {
    heading: "Once-off",
    price: "R5000",
    priceSub: "",
    details: [
      "Pay R2500 to start, and R2500 once the site is done and you are happy",
      "Free domain included",
      "Professional email included",
      "Your website live for a full year",
    ],
    cta: "Get started",
    href: "#contact",
  },
  {
    heading: "Monthly",
    price: "R2500",
    priceSub: "then R750 per month",
    details: [
      "R2500 to start, then R750 per month",
      "Continue for as long as you like, month to month",
    ],
    cta: "Get started",
    href: "#contact",
  },
];

const OfferSection = () => (
  <section id="offer">
    <div className="container">
      <div className="section-label">
        <span>04 — Pricing</span>
      </div>

      <div className="pricing-grid">
        {pricingOptions.map((option) => (
          <div className="pricing-card" key={option.heading}>
            <div className="pricing-card-header">
              <h3>{option.heading}</h3>
              <div className="pricing-price">
                <span className="pricing-price-num">{option.price}</span>
                {option.priceSub && (
                  <span className="pricing-price-sub">{option.priceSub}</span>
                )}
              </div>
            </div>

            <ul className="pricing-list">
              {option.details.map((detail, i) => (
                <li key={i}>
                  <span className="pricing-check">✓</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <a href={option.href} className="btn btn-primary pricing-cta">
              {option.cta} <span className="btn-arrow">→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OfferSection;
