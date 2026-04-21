const ContactSection = () => (
  <section id="contact">
    <div className="container">
      <div className="contact-inner">
        <div className="section-label" style={{ justifyContent: "center" }}>
          <span>Get in touch</span>
        </div>
        <h2>Let's have<br />a <em>quick chat.</em></h2>
        <p>WhatsApp or email. I'll come back within a few hours. Usually much faster.</p>

        <div className="contact-methods">
          <a href="https://wa.me/27662698553" target="_blank" rel="noopener" className="btn btn-primary">
            WhatsApp me <span className="btn-arrow">→</span>
          </a>
          <a href="mailto:solusitemedia@gmail.com" className="btn btn-secondary">
            Send an email
          </a>
        </div>

        <div className="contact-details">
          <div className="contact-detail">
            <div className="contact-detail-label">WhatsApp</div>
            <div className="contact-detail-value">+27 66 269 8553</div>
          </div>
          <div className="contact-detail">
            <div className="contact-detail-label">Call</div>
            <div className="contact-detail-value">+27 83 653 9823</div>
          </div>
          <div className="contact-detail">
            <div className="contact-detail-label">Email</div>
            <div className="contact-detail-value">solusitemedia@gmail.com</div>
          </div>
          <div className="contact-detail">
            <div className="contact-detail-label">Based in</div>
            <div className="contact-detail-value">Pretoria, South Africa</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
