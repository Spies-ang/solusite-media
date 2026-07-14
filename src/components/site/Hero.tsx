import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(true);

  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20, mass: 1 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20, mass: 1 });

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 900px), (prefers-reduced-motion: reduce)");
    const update = () => setEnabled(!mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = sectionRef.current;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
      setVisible(true);
    };
    const handleLeave = () => setVisible(false);
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [enabled, mouseX, mouseY]);

  return (
    <section className="hero" ref={sectionRef}>
      {enabled && (
        <motion.div
          className="hero-cursor-glow"
          style={{ x: springX, y: springY }}
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: visible ? 0.2 : 0.6, ease: "easeOut" }}
        />
      )}
      <div className="container">
        <div className="hero-meta">
          <span className="hero-meta-dot" />
          <span>Independent Web Developer · Pretoria, South Africa</span>
          <span className="live-ticker">
            <span className="live-ticker-dot" />
            <span>Last site shipped: 13 hours ago</span>
          </span>
        </div>

        <h1>
          Stop losing<br />
          customers to a<br />
          <em>boring website.</em>
          <span className="shimmer-overlay" aria-hidden="true">
            Stop losing<br />
            customers to a<br />
            <em>boring website.</em>
          </span>
        </h1>

        <p className="hero-sub">
          I build proper websites for South African service businesses — before you pay, at a fixed price, delivered in days. Not weeks. Not months.
        </p>

        

        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Talk to me <span className="btn-arrow">→</span>
          </a>
          <a href="#work" className="btn btn-secondary">
            See the work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
