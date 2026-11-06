"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const thumbs = [
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=500",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=500",
  "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&q=80&w=500",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=500",
];

function ReelCard({ src, i }: { src: string; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, boxShadow: "0 18px 44px rgba(0,0,0,0.2)" }}
      style={{
        position: "relative",
        aspectRatio: "9 / 16",
        borderRadius: 22,
        overflow: "hidden",
        background: "#1e1c1a",
        boxShadow: "0 4px 18px rgba(0,0,0,0.15)",
        border: "1.5px solid rgba(255,255,255,0.06)",
        cursor: "default",
      }}
    >
      <Image src={src} alt={`reel ${i + 1}`} fill sizes="15vw" style={{ objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)" }} />
      {/* Notch */}
      <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 30, height: 4, borderRadius: 9999, background: "rgba(0,0,0,0.2)" }} />
      {/* Play */}
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(255,255,255,0.22)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 2 }}>
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function VideoContent() {
  return (
    <section>
      <motion.div
        className="video-content-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ background: "#ddd4c8", borderRadius: 18, padding: "20px 22px 22px", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 24, alignItems: "start" }}
      >
        {/* Left: copy */}
        <div>
          <motion.span
            className="font-headline"
            initial={{ opacity: 0, width: "0%" }}
            whileInView={{ opacity: 1, width: "auto" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: "inline-block", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1e1c1a", borderBottom: "1.5px solid #1e1c1a", paddingBottom: 3, marginBottom: 20, overflow: "hidden", whiteSpace: "nowrap" }}
          >
            VIDEO CONTENT 03
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            style={{ fontSize: 14, color: "#1e1c1a", lineHeight: 1.7, marginBottom: 14, fontWeight: 500 }}
          >
            Short form video is the engine of organic growth. I scripted, directed, and delivered a series of Reels and TikToks.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.22 }}
            style={{ fontSize: 12, color: "#5c5750", lineHeight: 1.7, marginBottom: 12 }}
          >
            I styled them around the brand aesthetic and designed them for maximum discoverability.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28 }}
            style={{ fontSize: 12, color: "#5c5750", lineHeight: 1.7 }}
          >
            Each video was optimised for watch time, shares, and saves.
          </motion.p>

          {/* Metrics row */}
          <div style={{ display: "flex", gap: 24, marginTop: 32, paddingTop: 24, borderTop: "1px solid rgba(0,0,0,0.1)" }}>
            {[
              { val: "4.2x", label: "Avg. reach boost" },
              { val: "89%", label: "Watch-through rate" },
            ].map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 + i * 0.1 }}
              >
                <div className="font-headline" style={{ fontSize: 28, fontWeight: 700, color: "#1e1c1a", lineHeight: 1 }}>{m.val}</div>
                <div style={{ fontSize: 10, color: "#5c5750", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 5 }}>{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: 2×2 phone grid */}
        <div className="reel-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {thumbs.map((src, i) => (
            <ReelCard key={i} src={src} i={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
