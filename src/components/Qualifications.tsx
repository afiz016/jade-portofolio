"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certs = [
  "Canva Masterclass Certificate",
  "Email Marketing — Hubspot",
  "Accenture Digital Marketing",
  "Ad Week Digital Marketing",
];

export default function Qualifications() {
  return (
    <section>
      <motion.div
        className="qualifications-card"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: "#ddd4c8",
          borderRadius: 24,
          padding: "clamp(24px, 5vw, 56px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        <div className="qualification-heading">
          <div>
            <motion.h2
              className="font-headline"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              style={{
                fontSize: "clamp(2.4rem, 6vw, 5rem)",
                fontWeight: 700,
                lineHeight: 1,
                marginBottom: 28,
                color: "#1e1c1a",
                letterSpacing: "-0.01em",
              }}
            >
              QUALIFICATIONS
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                background: "rgba(255,255,255,0.6)",
                borderRadius: 14,
                padding: "14px 18px",
                display: "flex",
                gap: 14,
                alignItems: "center",
                marginBottom: 20,
                maxWidth: 420,
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              <div style={{ width: 58, height: 66, borderRadius: 9, overflow: "hidden", flexShrink: 0 }}>
                <Image
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=200"
                  alt="Marketing degree"
                  width={58}
                  height={66}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <div>
                <div style={{ fontSize: 10, color: "#5c5750", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, marginBottom: 4 }}>
                  University of Higher Education
                </div>
                <div className="font-headline" style={{ fontSize: 17, fontWeight: 700, color: "#1e1c1a" }}>
                  Bachelor of Marketing
                </div>
              </div>
            </motion.div>

            <div style={{ display: "flex", gap: 9 }}>
              {["🎨", "✂️", "📊", "📱", "🎬"].map((icon, i) => (
                <motion.div
                  key={icon}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                  whileHover={{ y: -4, scale: 1.15 }}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.7)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                  }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="qualification-portrait"
            style={{ width: 160, height: 210, borderRadius: 16, overflow: "hidden", flexShrink: 0 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400"
              alt="Jade"
              width={160}
              height={210}
              style={{ objectFit: "cover", objectPosition: "top", width: "100%", height: "100%" }}
            />
          </motion.div>
        </div>

        <div className="qualification-certificates">
          {certs.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
              style={{
                background: "rgba(255,255,255,0.55)",
                borderRadius: 10,
                padding: "14px 18px",
                fontSize: 15,
                fontWeight: 500,
                color: "#1e1c1a",
                boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
              }}
            >
              {cert}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
