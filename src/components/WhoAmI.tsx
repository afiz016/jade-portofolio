"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const aboutPhoto = "/images/about.jpg";
const cvHref = "/cv.pdf";

export default function WhoAmI() {
  return (
    <section aria-labelledby="about-heading">
      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        style={{
          borderRadius: 24,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
          background: "#302e2c",
          color: "#fff",
          position: "relative",
          minHeight: 310,
          padding: "22px 24px 20px",
        }}
      >
        <motion.div
          className="about-portrait"
          whileHover={{ scale: 1.025 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: 72,
            right: "clamp(24px, 5vw, 80px)",
            width: "clamp(270px, 30vw, 430px)",
            height: "clamp(340px, 50vh, 520px)",
            borderBottomLeftRadius: 24,
            overflow: "hidden",
          }}
        >
          <Image
            src={aboutPhoto}
            alt="Foto Muhammad Nur Afiz"
            fill
            sizes="(max-width: 480px) 140px, (max-width: 900px) 220px, 30vw"
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, #302e2c 0%, transparent 45%)",
            }}
          />
        </motion.div>

        <div
          className="about-copy"
          style={{ position: "relative", zIndex: 2, maxWidth: "62%" }}
        >
          <motion.h2
            id="about-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            style={{
              fontSize: "clamp(2rem, 3.4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              marginBottom: 18,
              color: "#fff",
              letterSpacing: "-0.04em",
            }}
          >
            About Me
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.16 }}
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              fontWeight: 600,
              lineHeight: 1.5,
              marginBottom: 10,
              color: "#fff",
            }}
          >
            Hi, I&apos;m Muhammad Nur Afiz
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.22 }}
            style={{
              fontSize: "clamp(0.82rem, 1vw, 0.95rem)",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.75)",
              marginBottom: 10,
            }}
          >
            Fresh graduate S1 Informatika Universitas Sains Al-Qur&apos;an dengan
            minat pada web development.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.28 }}
            style={{
              fontSize: "clamp(0.82rem, 1vw, 0.95rem)",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.65)",
              marginBottom: 10,
            }}
          >
            Memiliki pengalaman kerja dalam verifikasi dan validasi data serta
            terbiasa memanfaatkan teknologi modern dan perangkat AI untuk
            mengoptimalkan alur kerja secara efisien.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.34 }}
            style={{
              fontSize: "clamp(0.82rem, 1vw, 0.95rem)",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.65)",
            }}
          >
            Antusias untuk berkontribusi secara profesional di industri
            teknologi.
          </motion.p>

          <motion.a
            className="about-cv-button"
            href={cvHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Lihat CV Muhammad Nur Afiz (buka tab baru)"
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            Lihat CV
            <span aria-hidden="true">↗</span>
          </motion.a>
        </div>

        <span
          className="font-script"
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 18,
            right: 22,
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            color: "rgba(255,255,255,0.07)",
            transform: "rotate(-4deg)",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          get to know me
        </span>
      </motion.div>
    </section>
  );
}
