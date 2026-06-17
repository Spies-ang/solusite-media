import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { Helmet } from "react-helmet-async";

const waHref =
  "https://wa.me/27662698553?text=" +
  encodeURIComponent("Hi Ian, I have a referral for Solusite Media.");

const Referral = () => (
  <>
    <Helmet>
      <title>Refer & Earn R1,500 | Solusite Media — Web Design Pretoria</title>
      <meta name="description" content="Refer a South African business to Solusite Media. If they sign up for a website build, we send you R1,500 cash. No catch, no cap." />
      <link rel="canonical" href="https://www.solusitemedia.co.za/referral" />
      <meta property="og:title" content="Refer & Earn R1,500 | Solusite Media" />
      <meta property="og:description" content="Refer a business to Solusite Media. If they sign up, you get R1,500 cash. No catch, no cap." />
      <meta property="og:url" content="https://www.solusitemedia.co.za/referral" />
      <meta name="twitter:title" content="Refer & Earn R1,500 | Solusite Media" />
      <meta name="twitter:description" content="Refer a business to Solusite Media. If they sign up, you get R1,500 cash." />
    </Helmet>
    <Nav />
    <main>
    <section className="hero">
      <div className="container">
        <div className="hero-meta">
          <span className="hero-meta-dot" />
          <span>Referral Programme · Solusite Media</span>
        </div>
        <h1>
          Refer a business.<br />
          <em>Earn R1,500.</em>
        </h1>
        <p className="hero-sub">
          If someone you refer signs up for a Solusite Media website build, we send you R1,500 cash. No catch, no cap on referrals.
        </p>
        <div className="hero-actions">
          <a href={waHref} target="_blank" rel="noreferrer" className="btn btn-primary">
            Send a referral <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="section-label">How it works</div>
        <h2 className="section-heading">
          Three steps. <em>That's it.</em>
        </h2>
        <div className="process-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          <div className="process-step">
            <span className="process-num">01 — Tell us</span>
            <h3>Send the lead</h3>
            <p>Tell us about a business you think we'd be a fit for — name, contact, why they need a site.</p>
          </div>
          <div className="process-step">
            <span className="process-num">02 — We pitch</span>
            <h3>We do the work</h3>
            <p>We reach out, build them a demo, pitch them.</p>
          </div>
          <div className="process-step" style={{ borderRight: "none" }}>
            <span className="process-num">03 — You get paid</span>
            <h3>R1,500 to you</h3>
            <p>If they sign up, you get R1,500 paid out within 7 days of their first invoice clearing.</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="section-label">Who it's for</div>
        <h2 className="section-heading">
          Local SA service businesses <em>running on word-of-mouth.</em>
        </h2>
        <p className="section-lede">
          Salons, attorneys, architects, B&amp;Bs, accountants, photographers, anyone running word-of-mouth who'd benefit from a proper online presence. If you've used a business that has no website or a terrible one, refer them.
        </p>
      </div>
    </section>

    <section id="contact">
      <div className="container">
        <div className="contact-inner">
          <h2>
            Got someone <em>in mind?</em>
          </h2>
          <p>Send them through. Takes a minute. Earn R1,500 if they sign up.</p>
          <div className="contact-methods">
            <a href={waHref} target="_blank" rel="noreferrer" className="btn btn-primary">
              Send a referral <span className="btn-arrow">→</span>
            </a>
          </div>
          <p style={{ fontFamily: "var(--serif)", color: "var(--fg-dim)", fontSize: 16 }}>
            Or WhatsApp me directly:{" "}
            <a href={waHref} target="_blank" rel="noreferrer" style={{ color: "var(--fg)" }}>
              +27 66 269 8553
            </a>
          </p>
        </div>
      </div>
    </section>
    </main>
    <Footer />
  </>
);

export default Referral;
