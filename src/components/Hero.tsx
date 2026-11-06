"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const SocialIcons = {
  YT: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  IG: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  X: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  FB: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
};

export default function Hero() {
  return (
    /**
     * STRUKTUR (sesuai referensi):
     *
     *  ┌──────────────────────────────────────────┐
     *  │  [navbar — fixed di atas, bukan bagian hero]
     *  │                                          │
     *  │  jade's ←script kiri                    │  baris atas
     *  │  P O R T  [FOTO BESAR]  F O L I O        │  baris tengah (PORTFOLIO)
     *  │                                          │
     *  │  tagline kiri                           │  baris bawah
     *  └──────────────────────────────────────────┘
     *
     *  Foto: posisi absolute, tengah-kanan (40-60% dari kiri),
     *        tinggi ~90% dari hero, z-index di atas teks PORTFOLIO
     *        tapi di bawah "jade's" dan "SOCIAL MEDIA"
     */
    <div
      className="hero-root"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── FOTO ── */}
      <motion.div
        className="hero-portrait"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          /* anchor ke bawah, biar kaki nempel di dasar hero */
          top: 90,
          left: "64%",
          marginLeft: "-50%",
          /* lebar foto menentukan ukuran, tinggi mengikuti aspect ratio */
          width: "clamp(520px, 74vw, 1080px)",
          /* tinggi = otomatis dari aspect ratio foto asli */
          aspectRatio: "2752 / 1536",
          zIndex: 15,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/images/afiz.png"
          alt="Muhammad Nur Afiz"
          fill
          priority
          quality={100}
          sizes="(max-width: 360px) 360px, (max-width: 520px) 100vw, (max-width: 900px) 520px, (max-width: 1459px) 74vw, 1080px"
          style={{
            objectFit: "contain",
            objectPosition: "bottom center",
          }}
        />
      </motion.div>

      {/* ════════════════════════════════════════
          KONTEN — flex column, space-between
          ════════════════════════════════════════ */}
      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 10,
          flex: "none",
          maxWidth: 1400,
          width: "100%",
          margin: "0 auto",
          padding: "0 28px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >

        {/* ── ATAS: jade's  +  SOCIAL MEDIA ── */}
        <div
          style={{
            paddingTop: 68,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            position: "relative",
            zIndex: 20,
          }}
        >
          {/* jade's — besar, miring, di atas foto */}
          <div className="hero-name-row">
          <motion.span
            className="font-script"
            initial={{ opacity: 0, x: -24, rotate: -16 }}
            animate={{ opacity: 1, x: 0, rotate: -10 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(3rem, 7.5vw, 7.5rem)",
              lineHeight: 1,
              color: "#1a1614",
              userSelect: "none",
              transformOrigin: "left bottom",
              display: "block",
            }}
          >
          Afiz
          </motion.span>
          </div>

        
        </div>

        {/* ── TENGAH: PORTFOLIO (SANGAT BESAR) ── */}
        <motion.h1
          className="font-headline hero-heading"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          style={{
            /* font size dikunci agar pas dalam 1160px container */
            fontSize: "clamp(4rem, 18vw, 18rem)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 0.82,
            color: "#38342f",
            width: "100%",
            textAlign: "center",
            userSelect: "none",
            margin: 0,
            whiteSpace: "nowrap",
            position: "relative",
            zIndex: 10,
            marginTop: "-0.3vw",
          }}
        >
          PORTOFOLIO
        </motion.h1>

        {/* ── BAWAH: tagline ── */}
        <motion.div
          className="hero-footer"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingBottom: 32,
            paddingTop: 10,
            position: "relative",
            zIndex: 20,
          }}
        >
          <p
            className="font-headline"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "#1e1c1a",
              lineHeight: 1.2,
              maxWidth: 380,
            }}
          >
            WEB DEVELOPMENT
          </p>

        </motion.div>

      </div>
    </div>
  );
}
