import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { Helmet } from "react-helmet-async";

const waHref =
  "https://wa.me/27662698553?text=" +
  encodeURIComponent("Hi Ian, I read the pricing guide and want to chat.");

const PricingGuide = () => (
  <>
    <Helmet>
      <title>Website Design Cost South Africa (2026 Guide) | Solusite Media</title>
      <meta
        name="description"
        content="Honest breakdown of website design costs in South Africa in 2026. Freelancer vs agency vs DIY, what R2,000–R50,000 actually gets you, and how to avoid hidden fees."
      />
      <link rel="canonical" href="https://solusitemedia.co.za/pricing-guide" />
      <meta property="og:title" content="Website Design Cost South Africa (2026 Guide)" />
      <meta
        property="og:description"
        content="What a website really costs in South Africa in 2026 — freelancer vs agency vs DIY, and how to avoid surprise fees."
      />
      <meta property="og:url" content="https://solusitemedia.co.za/pricing-guide" />
      <meta name="twitter:title" content="Website Design Cost South Africa (2026 Guide)" />
      <meta
        name="twitter:description"
        content="What a website really costs in South Africa in 2026 — freelancer vs agency vs DIY."
      />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Website Design Cost South Africa — 2026 Guide",
        author: { "@type": "Person", name: "Ian Spies" },
        publisher: { "@type": "Organization", name: "Solusite Media" },
        mainEntityOfPage: "https://solusitemedia.co.za/pricing-guide",
        inLanguage: "en-ZA",
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does a website cost in South Africa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A small-business website in South Africa typically costs between R2,500 and R25,000 once-off. Freelancers sit at R3,000–R15,000, boutique studios at R10,000–R30,000, and agencies at R25,000 and up. Solusite Media builds a full site for a fixed R6,500.",
            },
          },
          {
            "@type": "Question",
            name: "Are there monthly fees on top of the build cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Usually yes — hosting, domain, email, SSL and maintenance. Expect R100–R500 per month with most providers. Solusite Media's once-off plan includes hosting, domain and email free for the first year.",
            },
          },
          {
            "@type": "Question",
            name: "Why do agency quotes vary so much?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Agency quotes bundle strategy meetings, project managers, designers, developers and revisions. That's fine for corporates, but overkill for a plumber, salon or B&B that just needs a clean, fast site.",
            },
          },
        ],
      })}</script>
    </Helmet>
    <Nav />
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-meta">
            <span className="hero-meta-dot" />
            <span>Pricing Guide · Updated 2026</span>
          </div>
          <h1>
            Website design cost in South Africa.<br />
            <em>No surprises.</em>
          </h1>
          <p className="hero-sub">
            A plain-English breakdown of what a website actually costs in South Africa in 2026 — freelancer vs boutique studio vs agency vs DIY — and where the hidden fees hide.
          </p>
          <div className="hero-actions">
            <a href="#quick-answer" className="btn btn-primary">
              Jump to the numbers <span className="btn-arrow">↓</span>
            </a>
          </div>
        </div>
      </section>

      <section id="quick-answer">
        <div className="container">
          <div className="section-label">The short answer</div>
          <h2 className="section-heading">
            Most SA small businesses pay <em>R2,500 to R25,000</em> for a website.
          </h2>
          <p className="section-lede">
            The range is wide because "a website" means very different things depending on who you ask. Below is what each price band actually gets you in the South African market — and where the real value sits for a service business.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-label">Price bands</div>
          <h2 className="section-heading">
            What each budget <em>actually buys.</em>
          </h2>
          <div className="process-grid">
            <div className="process-step">
              <span className="process-num">R0 — DIY</span>
              <h3>Wix, Squarespace, WordPress.com</h3>
              <p>Free tier gets a branded subdomain, ads, and templates every other business is also using. You'll spend 20–40 hours learning the tool. Fine for a hobby, not for a business you want customers to trust.</p>
            </div>
            <div className="process-step">
              <span className="process-num">R500 – R2,000</span>
              <h3>Cheap freelancer / Fiverr</h3>
              <p>A basic template, minimal customisation, generic copy. Usually no strategy, no follow-up, no aftercare. Common issues: slow load times, broken mobile view, no SEO basics.</p>
            </div>
            <div className="process-step">
              <span className="process-num">R3,000 – R8,000</span>
              <h3>Independent SA developer</h3>
              <p>The sweet spot for most service businesses. A proper custom site, mobile-friendly, with real copy about your business. This is where Solusite Media sits — <strong>R6,500 fixed</strong>, built before you pay a cent, domain and email included.</p>
            </div>
            <div className="process-step">
              <span className="process-num">R10,000 – R30,000</span>
              <h3>Boutique studio</h3>
              <p>More design polish, custom illustrations, longer timelines (4–8 weeks). Worth it if brand is your differentiator. Overkill for a plumber, tutor, B&amp;B or accountant.</p>
            </div>
            <div className="process-step">
              <span className="process-num">R25,000 – R150,000+</span>
              <h3>Agency</h3>
              <p>Project managers, strategy workshops, multiple designers and developers. Great for corporates and funded startups. For a local service business it's mostly overhead you're paying for.</p>
            </div>
            <div className="process-step" style={{ borderRight: "none" }}>
              <span className="process-num">R150,000+</span>
              <h3>E-commerce & custom builds</h3>
              <p>Full online stores, booking systems, member portals, custom integrations. Only worth it if the site is going to directly transact — otherwise you're overspending on features you won't use.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-label">Hidden costs</div>
          <h2 className="section-heading">
            The fees nobody quotes <em>upfront.</em>
          </h2>
          <p className="section-lede">
            The build fee is the number you're shown. These are the ones that quietly show up later, month after month:
          </p>
          <div className="process-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            <div className="process-step">
              <span className="process-num">Hosting</span>
              <h3>R80 – R300 / month</h3>
              <p>Where your site actually lives. Cheap shared hosting is slow; decent hosting is worth it.</p>
            </div>
            <div className="process-step">
              <span className="process-num">Domain</span>
              <h3>R150 – R300 / year</h3>
              <p>.co.za renewals typically R150. .com around R250. Auto-renew or you lose it.</p>
            </div>
            <div className="process-step" style={{ borderRight: "none" }}>
              <span className="process-num">Email</span>
              <h3>R50 – R120 / user / month</h3>
              <p>you@yourbusiness.co.za via Google Workspace or Zoho. Gmail addresses look unprofessional on a business card.</p>
            </div>
            <div className="process-step">
              <span className="process-num">SSL certificate</span>
              <h3>R0 – R1,500 / year</h3>
              <p>Free with most modern hosts (Let's Encrypt). If someone's charging you separately, question it.</p>
            </div>
            <div className="process-step">
              <span className="process-num">Maintenance</span>
              <h3>R500 – R2,500 / month</h3>
              <p>Content updates, plugin updates, security patches. Ask upfront whether this is included or billed hourly.</p>
            </div>
            <div className="process-step" style={{ borderRight: "none" }}>
              <span className="process-num">Revisions</span>
              <h3>R500 – R1,500 / hour</h3>
              <p>Many quotes include only 2–3 revision rounds. Anything after that is billed. Get the cap in writing.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-label">The Solusite way</div>
          <h2 className="section-heading">
            Fixed price. Built first. <em>Then you decide.</em>
          </h2>
          <p className="section-lede">
            Most SA quotes want a 50% deposit before a single pixel exists. We build the site first, show it to you live, and only take payment once you're happy. Two options, both flat:
          </p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-tag">Once-off</div>
              <div className="pricing-price">R6,500</div>
              <ul className="pricing-list">
                <li>Pay R2,500 to start and the rest once the site is done and you are happy</li>
                <li>Free domain (.co.za) included</li>
                <li>Professional email included</li>
                <li>Site live for a full year</li>
              </ul>
              <a href={waHref} target="_blank" rel="noreferrer" className="btn btn-primary">
                Talk to me <span className="btn-arrow">→</span>
              </a>
            </div>
            <div className="pricing-card">
              <div className="pricing-tag">Monthly</div>
              <div className="pricing-price">
                R750 <span className="pricing-per">per month</span>
              </div>
              <ul className="pricing-list">
                <li>R2,500 to start, then R750/month</li>
                <li>Free domain (.co.za) included</li>
                <li>Professional email included</li>
                <li>Cancel any month, no lock-in</li>
              </ul>
              <a href={waHref} target="_blank" rel="noreferrer" className="btn btn-primary">
                Talk to me <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-label">Questions people ask</div>
          <h2 className="section-heading">
            The stuff you were <em>going to Google anyway.</em>
          </h2>
          <div className="process-grid" style={{ gridTemplateColumns: "1fr" }}>
            <div className="process-step" style={{ borderRight: "none" }}>
              <h3>How long does a website take to build in South Africa?</h3>
              <p>Freelancers: 1–3 weeks. Boutique studios: 4–8 weeks. Agencies: 8–16 weeks. Solusite Media typically delivers in 3–7 days because the scope is fixed and there's no committee to wait on.</p>
            </div>
            <div className="process-step" style={{ borderRight: "none" }}>
              <h3>Do I need to pay a deposit?</h3>
              <p>Most SA developers require 50% upfront. We split it 50/50 — half to start, half once the site is live and you're happy with it. If we don't finish, you don't pay the balance.</p>
            </div>
            <div className="process-step" style={{ borderRight: "none" }}>
              <h3>What's the cheapest way to get a real website?</h3>
              <p>A one-page site from an independent SA developer — R3,000–R5,000 once-off. Skip DIY builders if you value your time; you'll spend the equivalent in hours.</p>
            </div>
            <div className="process-step" style={{ borderRight: "none" }}>
              <h3>Is WordPress cheaper than a custom-built site?</h3>
              <p>Sticker price yes, total cost usually no. WordPress needs monthly plugin updates, security patches and hosting that can handle it. Add 12 months and the numbers converge.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="contact-inner">
            <h2>
              Get a quote in <em>one message.</em>
            </h2>
            <p>Tell me about your business. I'll come back with a fixed price and a rough timeline — usually within an hour.</p>
            <div className="contact-methods">
              <a href={waHref} target="_blank" rel="noreferrer" className="btn btn-primary">
                WhatsApp me <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default PricingGuide;