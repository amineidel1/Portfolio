import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="grid-overlay" />
      </div>

      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-text"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hero-greeting"
          >
            Bonjour, je suis
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hero-name"
          >
            Amine Idelhaj
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="hero-title"
          >
            Data & AI Engineer
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="hero-desc"
          >
            Cloud • DevOps • Smart Systems
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="hero-cta"
          >
            <a href="#projects" className="btn btn-primary">
              Voir mes projets
            </a>
            <a href="#contact" className="btn btn-outline">
              Me contacter
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="hero-visual"
        >
          <div className="floating-card card-1">
            <span className="card-icon">📊</span>
            <span>Data Science</span>
          </div>
          <div className="floating-card card-2">
            <span className="card-icon">🤖</span>
            <span>Machine Learning</span>
          </div>
          <div className="floating-card card-3">
            <span className="card-icon">☁️</span>
            <span>Cloud & DevOps</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="scroll-indicator"
      >
        <a href="#about">
          <span className="scroll-arrow" />
        </a>
      </motion.div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: 80px;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
        }
        .orb-1 {
          width: 400px;
          height: 400px;
          background: var(--accent);
          top: -100px;
          right: -100px;
          animation: float 8s ease-in-out infinite;
        }
        .orb-2 {
          width: 300px;
          height: 300px;
          background: #3b82f6;
          bottom: -50px;
          left: -50px;
          animation: float 10s ease-in-out infinite reverse;
        }
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .hero-greeting {
          color: var(--accent);
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .hero-name {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 700;
          line-height: 1.1;
          margin: 0.5rem 0 1rem;
        }
        .hero-title {
          font-size: 1.5rem;
          color: var(--accent);
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        .hero-desc {
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }
        .hero-cta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .btn {
          padding: 0.875rem 1.75rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }
        .btn-primary {
          background: var(--gradient-1);
          color: white;
          border: none;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px var(--accent-glow);
        }
        .btn-outline {
          border: 2px solid var(--accent);
          color: var(--accent);
          background: transparent;
        }
        .btn-outline:hover {
          background: var(--accent);
          color: var(--bg-dark);
        }
        .hero-visual {
          position: relative;
          height: 300px;
        }
        .floating-card {
          position: absolute;
          background: var(--bg-card);
          border: 1px solid var(--border);
          padding: 1rem 1.25rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 500;
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
          animation: floatCard 6s ease-in-out infinite;
        }
        .card-icon {
          font-size: 1.5rem;
        }
        .card-1 { top: 20%; left: 10%; animation-delay: 0s; }
        .card-2 { top: 45%; right: 5%; animation-delay: 1s; }
        .card-3 { bottom: 15%; left: 25%; animation-delay: 2s; }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
        }
        .scroll-arrow {
          display: block;
          width: 24px;
          height: 24px;
          border-right: 2px solid var(--accent);
          border-bottom: 2px solid var(--accent);
          transform: rotate(45deg);
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: rotate(45deg) translate(0, 0); }
          50% { transform: rotate(45deg) translate(5px, 5px); }
        }
        @media (max-width: 900px) {
          .hero-content { grid-template-columns: 1fr; text-align: center; }
          .hero-visual { display: none; }
          .hero-cta { justify-content: center; }
        }
      `}</style>
    </section>
  );
}
