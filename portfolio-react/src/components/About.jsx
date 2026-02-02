import { motion } from 'framer-motion';

const aboutText = `Data Scientist diplômé de l'Université Claude Bernard Lyon 1 et de l'ENSAM Rabat. Mes projets couvrent l'amélioration de la cybersécurité IoT avec des modèles de langage avancés, ainsi que la création de plateformes IA sécurisées par la blockchain. Maîtrise de Python et R, expertise en machine learning, visualisation de données et développement web. Passionné par l'application de mes compétences pour résoudre des problèmes complexes et innover dans le domaine de la data science.`;

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          À propos
        </motion.h2>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="about-image-wrapper"
          >
            <div className="about-image-frame">
              <img
                src="/images/about/Amine-removebg.png"
                alt="Amine Idelhaj"
                className="about-image"
              />
              <div className="image-glow" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="about-content"
          >
            <p className="about-text">{aboutText}</p>
            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-icon">🎓</span>
                <span>Master Data & Intelligence for Smart Systems</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🌍</span>
                <span>Basé en France</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🤝</span>
                <span>Ouvert aux collaborations recherche & tech</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .about {
          padding: 6rem 0;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: center;
        }
        .about-image-wrapper {
          display: flex;
          justify-content: center;
        }
        .about-image-frame {
          position: relative;
        }
        .about-image {
          width: 280px;
          height: 280px;
          object-fit: contain;
          border-radius: 50%;
          position: relative;
          z-index: 1;
        }
        .image-glow {
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          background: var(--gradient-1);
          opacity: 0.2;
          filter: blur(30px);
          z-index: 0;
        }
        .about-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .about-text {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.8;
        }
        .about-highlights {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .highlight {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.25rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        .highlight:hover {
          border-color: var(--accent);
          transform: translateX(5px);
        }
        .highlight-icon {
          font-size: 1.5rem;
        }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; }
          .about-image { width: 220px; height: 220px; }
        }
      `}</style>
    </section>
  );
}
