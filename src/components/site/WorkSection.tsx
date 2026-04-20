const works = [
  { num: "001", name: "MEG Architects", tag: "Architecture · Pretoria", url: "https://megarchitects.lovable.app" },
  { num: "002", name: "Lisa Rorich Architects", tag: "Architecture · Durban", url: "https://lisa-rorich-architects.lovable.app" },
  { num: "003", name: "Lat Wai Farm Venue", tag: "Event Venue · Cape Town", url: "https://lat-wai-farm-venue.lovable.app" },
  { num: "004", name: "Studentech Driver Training", tag: "Education · Durban", url: "https://studentechdrivertraining.lovable.app" },
  { num: "005", name: "Ndibali Interior Designs", tag: "Interiors · Johannesburg", url: "https://ndibali-designs.lovable.app" },
  { num: "006", name: "CodeFlash Photography", tag: "Photography · Pretoria", url: "https://codeflash-photography.lovable.app" },
];

const WorkSection = () => (
  <section id="work">
    <div className="container">
      <div className="section-label">
        <span>02 — Recent work</span>
      </div>

      <div className="work-intro">
        <div>
          <div className="work-count">20+</div>
          <div className="work-count-label">Sites built for SA businesses</div>
        </div>
        <p className="work-intro-text">
          Architects, driving schools, B&amp;Bs, photographers, interior designers. Every site below was built as a complete working demo before the client paid a cent.
        </p>
      </div>

      <div className="work-list">
        {works.map((w) => (
          <a key={w.num} href={w.url} target="_blank" rel="noopener" className="work-item">
            <span className="work-num">{w.num}</span>
            <span className="work-name">{w.name}</span>
            <span className="work-tag">{w.tag}</span>
            <span className="work-arrow">→</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default WorkSection;
