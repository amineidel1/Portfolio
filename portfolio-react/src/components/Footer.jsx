import { motion } from 'framer-motion';
import { contactInfo } from '../data/portfolio';

const socialIcons = [
  {
    name: 'Instagram',
    url: contactInfo.links.instagram,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: contactInfo.links.linkedin,
    icon: <img src="/icons/linkedin.png" alt="LinkedIn" width="28" height="28" />,
  },
  {
    name: 'GitHub',
    url: contactInfo.links.github,
    icon: <img src="/icons/github.png" alt="GitHub" width="28" height="28" />,
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-bg">
        <div className="gradient-orb" />
      </div>

      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title footer-title"
        >
          Contact
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="contact-info"
        >
          <a href={`mailto:${contactInfo.email}`} className="contact-item">
            <span className="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </span>
            {contactInfo.email}
          </a>
          <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="contact-item">
            <span className="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </span>
            {contactInfo.phone}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="social-links"
        >
          {socialIcons.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={social.name}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="footer-copy"
        >
          © {new Date().getFullYear()} Amine Idelhaj — Data & AI Engineer
        </motion.p>
      </div>

      <style>{`
        .footer {
          padding: 5rem 0 2rem;
          position: relative;
          background: var(--gradient-2);
          border-top: 1px solid var(--border);
        }
        .footer-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .footer-bg .gradient-orb {
          position: absolute;
          width: 300px;
          height: 300px;
          background: var(--accent);
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
          bottom: -100px;
          left: 50%;
          transform: translateX(-50%);
        }
        .footer-title {
          margin-bottom: 2rem;
        }
        .contact-info {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
          font-size: 1.05rem;
          transition: color 0.2s;
        }
        .contact-item:hover {
          color: var(--accent);
        }
        .contact-icon {
          display: flex;
          color: var(--accent);
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }
        .social-link:hover {
          color: var(--accent);
          border-color: var(--accent);
          box-shadow: 0 0 20px var(--accent-glow);
        }
        .social-link img {
          object-fit: contain;
        }
        .footer-copy {
          text-align: center;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        @media (max-width: 600px) {
          .contact-info { flex-direction: column; align-items: center; }
        }
      `}</style>
    </footer>
  );
}
