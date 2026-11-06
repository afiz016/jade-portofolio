"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const items = [
  {
    title: "UGC VIDEO",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=600",
    desc: "Engaging short & long-form video content aligned with brand marketing goals.",
  },
  {
    title: "BRANDING & AESTHETIC",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600",
    desc: "Cohesive visual branding — graphics, calendars, and productions unique to each brand.",
  },
  {
    title: "SEO & COPYWRITING",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=600",
    desc: "Effective keywords and compelling copy designed to drive performance and reach.",
  },
  {
    title: "SOCIAL MEDIA MARKETING",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    desc: "Tailored communication strategies that help brands connect clearly with their audience.",
  },
  {
    title: "META ADS CAMPAIGNS",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    desc: "Paid social campaigns planned, managed and optimised for reach and conversions.",
  },
  {
    title: "CONTENT PLANNING",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=600",
    desc: "Strategic content production that keeps audiences engaged and supports brand growth.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const itemAnim: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function MyWork() {
  return (
    <section>
      <div style={{ background: "#ddd4c8", borderRadius: 18, padding: "20px 20px 22px" }}>

        <motion.h2
          className="font-headline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ fontSize: "clamp(1.6rem, 3.8vw, 3rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "#1e1c1a", marginBottom: 18, lineHeight: 1 }}
        >
          MY WORK INCLUDES
        </motion.h2>

        <motion.div
          className="work-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={itemAnim}
              whileHover={{ y: -6, boxShadow: "0 12px 36px rgba(0,0,0,0.14)" }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              style={{ borderRadius: 14, overflow: "hidden", background: "#ccc0b3", display: "flex", flexDirection: "column", cursor: "default" }}
            >
              {/* Image */}
              <div style={{ position: "relative", width: "100%", height: "clamp(90px, 10vw, 130px)" }}>
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 50vw, 33vw" style={{ objectFit: "cover", transition: "transform 0.5s ease" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)" }} />
                <span
                  className="font-headline"
                  style={{ position: "absolute", bottom: 9, left: 11, right: 11, fontSize: 11.5, fontWeight: 700, color: "#fff", textTransform: "uppercase", lineHeight: 1.25, letterSpacing: "0.06em" }}
                >
                  {item.title}
                </span>
              </div>

              {/* Desc */}
              <div style={{ padding: "11px 13px 14px", flex: 1 }}>
                <p style={{ fontSize: 11, color: "#5c5750", lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
