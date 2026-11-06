"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#who-am-i" },
  { label: "Activities", href: "#activities" },
  { label: "Work", href: "#featured-work" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="navbar-nav" aria-label="Main navigation">
        <Link href="#home" className="nav-logo font-script" aria-label="Afiz home">
          Afiz<span>.</span>
        </Link>

        <div className={`nav-links${menuOpen ? " is-open" : ""}`} id="primary-navigation">
          {links.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 + i * 0.05 }}
            >
              <Link
                href={item.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <Link href="#skills" className="nav-cta">
          My Skills
        </Link>

        <button
          className="nav-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </motion.header>
  );
}
