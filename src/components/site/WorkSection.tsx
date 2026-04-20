import { useEffect, useRef, useState } from "react";

const works = [
  { num: "001", name: "MEG Architects", tag: "Architecture · Pretoria", url: "https://megarchitects.lovable.app" },
  { num: "002", name: "Lisa Rorich Architects", tag: "Architecture · Durban", url: "https://lisa-rorich-architects.lovable.app" },
  { num: "003", name: "Lat Wai Farm Venue", tag: "Event Venue · Cape Town", url: "https://lat-wai-farm-venue.lovable.app" },
  { num: "004", name: "Studentech Driver Training", tag: "Education · Durban", url: "https://studentechdrivertraining.lovable.app" },
  { num: "005", name: "Ndibali Interior Designs", tag: "Interiors · Johannesburg", url: "https://ndibali-designs.lovable.app" },
  { num: "006", name: "CodeFlash Photography", tag: "Photography · Pretoria", url: "https://codeflash-photography.lovable.app" },
];

const WorkItem = ({ w, previewsEnabled }: { w: typeof works[number]; previewsEnabled: boolean }) => {
  const [hovered, setHovered] = useState(false);
  const hoverTimer = useRef<number | null>(null);

  const handleEnter = () => {
    if (!previewsEnabled) return;
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setHovered(true), 120);
  };
  const handleLeave = () => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    setHovered(false);
  };

  return (
    <a
      href={w.url}
      target="_blank"
      rel="noopener"
      className="work-item"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <span className="work-num">{w.num}</span>
      <span className="work-name">{w.name}</span>
      <span className="work-tag">{w.tag}</span>
      <span className="work-arrow">→</span>
      {previewsEnabled && (
        <span className="work-preview" aria-hidden="true">
          {hovered && <iframe src={w.url} title={`${w.name} preview`} loading="lazy" />}
        </span>
      )}
    </a>
  );
};

const WorkSection = () => {
  const [previewsEnabled, setPreviewsEnabled] = useState(true);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 900px), (prefers-reduced-motion: reduce), (hover: none)");
    const update = () => setPreviewsEnabled(!mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return (
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
            <WorkItem key={w.num} w={w} previewsEnabled={previewsEnabled} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
