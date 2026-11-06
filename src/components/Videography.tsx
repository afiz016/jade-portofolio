"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500", name: "CLIENT NAME", desc: "A short description of the campaign, vision, goals, and results." },
  { image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=500", name: "CLIENT NAME", desc: "A short description of the campaign, vision, goals, and results." },
  { image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=500", name: "CLIENT NAME", desc: "A short description of the campaign, vision, goals, and results." },
  { image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=500", name: "CLIENT NAME", desc: "A short description of the campaign, vision, goals, and results." },
];

/* Marquee strip that runs below the section header */
const marqueeWords = ["UGC", "REELS", "TIKTOK", "BRANDED CONTENT", "STORYTELLING", "SHORT FORM", "CAMPAIGNS"];

function PhoneMockup({ image, name, desc, index }: { image: string; name: string; desc: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <motion.div
        whileHover={{ y: -8, boxShadow: "0 20px 48px rgba(0,0,0,0.22)" }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "9 / 16",
          borderRadius: 24,
          overflow: "hidden",
          background: "#1e1c1a",
          boxShadow: "0 6px 24px rgba(0,0,0,0.18)",
          border: "2px solid rgba(255,255,255,0.06)",
        }}
      >
        <Image src={image} alt={name} fill sizes="25vw" style={{ objectFit: "cover", objectPosition: "top" }} />
        {/* Gradient overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)" }} />
        {/* Notch */}
        <div style={{ position: "absolute", top: 9, left: "50%", transform: "translateX(-50%)", width: 38, height: 5, borderRadius: 9999, background: "rgba(0,0,0,0.35)", zIndex: 3 }} />
        {/* Play button */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
          <motion.div
            whileHover={{ scale: 1.18 }}
            style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.22)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 2 }}>
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      <div style={{ marginTop: 12, paddingLeft: 2 }}>
        <div className="font-headline" style={{ fontSize: 11, fontWeight: 700, color: "#1e1c1a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{name}</div>
        <div style={{ fontSize: 10.5, color: "#5c5750", lineHeight: 1.55 }}>{desc}</div>
      </div>
    </motion.div>
  );
}

export default function Videography() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ background: "#ccc0b3", borderRadius: 18, padding: "20px 22px 22px", overflow: "hidden" }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 10, gap: 16, flexWrap: "wrap" }}>
          <p style={{ fontSize: 13, color: "#5c5750", lineHeight: 1.7, maxWidth: 340 }}>
            Through dynamic videography and intentional storytelling, I create content that immerses, relates, and emotionally captivates — crafted to leave a lasting impression.
          </p>
          <motion.h2
            className="font-headline"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: "clamp(2rem, 5.2vw, 4.2rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, color: "#1e1c1a", whiteSpace: "nowrap" }}
          >
            VIDEOGRAPHY
          </motion.h2>
        </div>

        {/* Marquee strip */}
        <div style={{ overflow: "hidden", marginBottom: 28, padding: "12px 0", borderTop: "1px solid rgba(0,0,0,0.08)", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
          <div className="marquee-track">
            {[...marqueeWords, ...marqueeWords].map((w, i) => (
              <span key={i} className="font-headline" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", color: "rgba(30,28,26,0.35)", marginRight: 36, whiteSpace: "nowrap", textTransform: "uppercase" }}>
                {w} ✦
              </span>
            ))}
          </div>
        </div>

        {/* Phones grid */}
        <div className="video-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {clients.map((c, i) => (
            <PhoneMockup key={i} {...c} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
