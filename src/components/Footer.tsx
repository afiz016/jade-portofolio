"use client";

import { Mail } from "lucide-react";
import { SocialIcons } from "./Hero";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 3.8h14A1.2 1.2 0 0 1 20.2 5v14a1.2 1.2 0 0 1-1.2 1.2H5A1.2 1.2 0 0 1 3.8 19V5A1.2 1.2 0 0 1 5 3.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M7.5 10v6.8M7.5 7.3v.1M11 16.8v-3.7c0-1.2.7-2 1.8-2s1.7.8 1.7 2v3.7M11 10v6.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="7.4" r="1" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.2 11.8a8.2 8.2 0 0 1-12.1 7.2L4 20l1-4a8.2 8.2 0 1 1 15.2-4.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.7c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .6.6 1 1.4 1.7 2.5 2.2.2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.7-.1l1.5.7c.3.1.4.3.4.5 0 .4-.2 1.1-.7 1.5-.5.5-1.2.7-2 .5-1-.2-2.3-.8-3.7-2-1.1-1-2-2.3-2.2-3.4-.2-.9.1-1.6.5-2.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

const socials = [
  { label: "Email", Icon: Mail },
  { label: "WhatsApp", Icon: WhatsAppIcon },
  { label: "LinkedIn", Icon: LinkedInIcon },
  { label: "Instagram", Icon: SocialIcons.IG },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>Temukan saya</p>
      <div aria-label="Media sosial dan kontak" className="footer-socials" role="group">
        {socials.map(({ label, Icon }) => (
          <span
            key={label}
            className="footer-social-icon"
            role="img"
            aria-label={label}
            title={label}
          >
            <Icon />
          </span>
        ))}
      </div>
    </footer>
  );
}
