"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    category: "Organisasi",
    title: "FOSMABANGGA",
    role: "Anggota - 2022",
    description:
      "Aktif berpartisipasi dalam berbagai kegiatan internal maupun sosial yang diselenggarakan oleh organisasi untuk mempererat kebersamaan antaranggota.",
    certificateHref: null,
  },
  {
    category: "Sertifikat",
    title: "Sertifikasi Database",
    role: "UPT Laboratorium Universitas Sains Al-Qur'an (UNSIQ) - 2026",
    description: "Nilai: 97",
    certificateHref: "/certificates/sertifikat-database.pdf",
  },
  {
    category: "Sertifikat",
    title: "TOEFL_LIKE TEST",
    role: "UPT BAHASA UNIVERSITAS SAINS AL_QUR'AN (UNSIQ) - 2026",
    description: "Nilai: 400",
    certificateHref: "/certificates/sertifikat-toefl.pdf",
  },
  {
    category: "Sertifikat",
    title: "KULIAH PENGABDIAN MASYARAKАТ",
    role: "LP3M UNIVERSITAS SAINS AL-QUR'AN (UNSIQ) - 2026",
    description: "Nilai: 93",
    certificateHref: "/certificates/sertifikat-kuliah-pengabdian-masyarakat.pdf",
  },
  {
    category: "Sertifikat",
    title: "Sertifikasi Takhfidz",
    role: "Lembaga Takhfidz Dan Pengkajian Al-qur'an Universitas Saiins Al-Qur'an (UNSIQ) - 2025",
    description: "Nilai: 478",
    certificateHref: "/certificates/sertifikat-tahfidz.pdf",
  },
];

export default function Activities() {
  return (
    <section aria-labelledby="activities-heading" className="activities-section">
      <motion.div
        className="activities-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="activities-eyebrow">Pengalaman selama kuliah</p>
        <h2 className="font-headline" id="activities-heading">
          My Activities &amp; Certifications
        </h2>
        <div className="activities-grid">
          {experiences.map((experience, index) => (
            <motion.article
              className="activity-card"
              key={experience.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="activity-number">0{index + 1}</span>
              <p className="activity-category">{experience.category}</p>
              <h3>{experience.title}</h3>
              <p className="activity-role">{experience.role}</p>
              <p>{experience.description}</p>
              {experience.certificateHref && (
                <a
                  className="activity-certificate-link"
                  href={experience.certificateHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Lihat sertifikat ${experience.title} (buka tab baru)`}
                >
                  Lihat Sertifikat <span aria-hidden="true">↗</span>
                </a>
              )}
            </motion.article>
          ))}
        </div>

        <p className="activities-education">
          <strong>Pendidikan</strong>
          <span>S1 Informatika — Universitas Sains Al-Qur&apos;an</span>
        </p>
      </motion.div>
    </section>
  );
}
