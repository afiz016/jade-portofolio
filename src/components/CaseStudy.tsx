"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const feedImages = [
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1612831455359-970e23a1e4e9?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=300",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      className="font-headline"
      initial={{ opacity: 0, width: 0 }}
      whileInView={{ opacity: 1, width: "auto" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      style={{
        display: "inline-block",
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "#1e1c1a",
        borderBottom: "1.5px solid #1e1c1a",
        paddingBottom: 3,
        marginTop: 24,
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </motion.span>
  );
}

export default function CaseStudy() {
  return (
    <section>
      <div className="case-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>

        {/* ── Left: Website 01 ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ background: "#ddd4c8", borderRadius: 18, padding: "20px 22px 18px", display: "flex", flexDirection: "column" }}
        >
          <motion.h2
            className="font-headline"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.4rem)", fontWeight: 700, lineHeight: 1, color: "#1e1c1a", marginBottom: 12, letterSpacing: "-0.01em" }}
          >
            CASE STUDY
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            style={{ fontSize: 11, color: "#5c5750", lineHeight: 1.7, marginBottom: 18 }}
          >
            I crafted a 30-day social media strategy covering content development, Reels planning, and campaign execution. In 3 months, engagement grew by{" "}
            <strong style={{ color: "#1e1c1a", fontWeight: 700 }}>120%</strong>.
          </motion.p>

          {/* Website mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            whileHover={{ scale: 1.02 }}
            style={{ position: "relative", borderRadius: 14, overflow: "hidden", width: "100%", height: "clamp(110px, 12vw, 150px)", marginBottom: 14, flexShrink: 0 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=700"
              alt="Website case study" fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span className="font-headline" style={{ fontSize: "clamp(1.3rem, 2.8vw, 2rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>
                your voice
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: 13, color: "#1e1c1a", lineHeight: 1.65, marginBottom: 8, fontWeight: 500 }}
          >
            A strong brand doesn&apos;t just look good — it speaks clearly.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            style={{ fontSize: 12, color: "#5c5750", lineHeight: 1.65 }}
          >
            I audited the existing web presence, identified gaps in messaging and visual consistency, and rebuilt the content strategy from the ground up. Every page was crafted to convert browsers into buyers.
          </motion.p>

          <SectionLabel>WEBSITE 01</SectionLabel>
        </motion.div>

        {/* ── Right: Instagram Feed 02 ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ background: "#ddd4c8", borderRadius: 18, padding: "20px 22px 18px", display: "flex", flexDirection: "column" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 12, color: "#5c5750", lineHeight: 1.7, marginBottom: 20 }}
          >
            I developed a 30-day content calendar built around lifestyle and user-facing storytelling, with a cohesive visual identity. Resulting in a feed that feels curated, not chaotic.
          </motion.p>

          {/* Feed grid with stagger */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6, flex: 1 }}
          >
            {feedImages.map((src, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } } }}
                whileHover={{ scale: 1.08, zIndex: 2 }}
                style={{ position: "relative", aspectRatio: "1", borderRadius: 8, overflow: "hidden" }}
              >
                <Image src={src} alt={`post ${i + 1}`} fill sizes="10vw" style={{ objectFit: "cover" }} />
              </motion.div>
            ))}
          </motion.div>

          <SectionLabel>INSTAGRAM FEED 02</SectionLabel>
        </motion.div>
      </div>
    </section>
  );
}
