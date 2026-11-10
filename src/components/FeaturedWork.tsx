"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Website Portofolio Pribadi",
    category: "Website",
    description:
      "Website portofolio untuk memperkenalkan profil, pengalaman, dan keahlian dalam pengembangan web.",
    details:
      "Portofolio ini dibuat sebagai tempat untuk menampilkan profil dan karya. Tambahkan tautan demo atau repository saat sudah siap.",
    technologies: ["Next.js", "React", "TypeScript", "CSS"],
    href: "",
  },
  {
    title: "SPK Aset Digital Production",
    category: "Web App",
    description:
      "Aplikasi berbasis web untuk membantu mengambil keputusan investasi aset digital in-game.",
    details:
      "Sistem Pendukung Keputusan ini menggunakan metode TOPSIS untuk menilai aset berdasarkan harga beli, volume, rarity, sentimen komunitas, dan likuiditas.",
    technologies: ["TOPSIS", "Sistem Pendukung Keputusan", "Aset Digital"],
    href: "https://spk-aset-digital-production.up.railway.app",
  },
];

export default function FeaturedWork() {
  return (
    <section
      aria-labelledby="featured-work-heading"
      className="featured-work-section"
    >
      <motion.div
        className="featured-work-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="featured-work-copy">
          <p className="featured-work-eyebrow">Proyek pilihan</p>
          <h2 className="font-headline" id="featured-work-heading">
            Proyek Pilihan
          </h2>
          <p className="featured-work-description">
            Beberapa proyek yang pernah saya kerjakan. Tekan tombol untuk
            melihat detail proyek.
          </p>
        </div>

        <div className="featured-projects">
          {projects.map((project, index) => (
            <motion.article
              className="featured-project"
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                aria-hidden="true"
                className={`featured-project-art featured-project-art--${index + 1}`}
              >
                <div className="featured-project-art-window">
                  <div className="featured-project-art-toolbar">
                    <span />
                    <span />
                    <span />
                    <span className="featured-project-art-label">
                      SELECTED WORK
                    </span>
                  </div>
                  <div className="featured-project-art-preview">
                    <span className="featured-project-art-mark">
                      {index === 0 ? "A." : index === 1 ? "✳" : "↗"}
                    </span>
                    <span className="featured-project-art-lines">
                      <i />
                      <i />
                      <i />
                    </span>
                  </div>
                </div>
                <span className="featured-project-art-orbit" />
              </div>
              <div className="featured-project-heading">
                <span className="featured-project-number">
                  0{index + 1}
                </span>
                <span className="featured-project-category">
                  {project.category}
                </span>
              </div>
              <h3 className="font-headline">{project.title}</h3>
              <p className="featured-project-description">
                {project.description}
              </p>
              <ul
                aria-label={`Teknologi ${project.title}`}
                className="featured-work-tech"
              >
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              <details className="featured-project-details">
                <summary className="featured-project-toggle">
                  Lihat detail <span aria-hidden="true">+</span>
                </summary>
                <p>{project.details}</p>
                {project.href && (
                  <a
                    className="featured-project-link"
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buka proyek <span aria-hidden="true">↗</span>
                  </a>
                )}
              </details>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
