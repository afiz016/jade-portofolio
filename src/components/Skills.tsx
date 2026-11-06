"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
];

export default function Skills() {
  return (
    <section aria-labelledby="skills-heading" className="skills-section">
      <motion.div
        className="skills-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="skills-eyebrow">Keahlian yang saya gunakan</p>
        <h2 className="font-headline" id="skills-heading">
          Skills
        </h2>
        <p className="skills-intro">
          Teknologi dan tools yang saya gunakan untuk membangun pengalaman web.
        </p>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <motion.li
              key={skill}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
