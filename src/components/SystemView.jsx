import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const SystemView = ({ onBack, toggleSetting, settings }) => {
  const animationsOn = settings && settings.animations;

  // ESC key navigation
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onBack();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onBack]);

  const systemOptions = [
    { icon: '🎵', name: 'BGM', key: 'bgm' },
    { icon: '🔊', name: 'SFX', key: 'sfx' },
    { icon: '✨', name: 'ANIMATIONS', key: 'animations' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: 80, opacity: 0, rotateY: -30 },
    visible: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      className="p5-system-screen"
      initial={animationsOn ? { scale: 0.8, opacity: 0, rotate: 5 } : undefined}
      animate={animationsOn ? { scale: 1, opacity: 1, rotate: 0 } : undefined}
      exit={animationsOn ? { scale: 1.2, opacity: 0 } : undefined}
      transition={animationsOn ? { duration: 0.4, ease: "circOut" } : undefined}
    >
      <div className="p5-system-content">
        <motion.h2
          className="p5-section-title"
          initial={animationsOn ? { y: -50, opacity: 0 } : undefined}
          animate={animationsOn ? { y: 0, opacity: 1 } : undefined}
          transition={animationsOn ? { type: 'spring' } : undefined}
        >
          SYSTEM
        </motion.h2>

        <motion.div
          className="p5-section-container"
          variants={animationsOn ? containerVariants : undefined}
          initial={animationsOn ? "hidden" : undefined}
          animate={animationsOn ? "visible" : undefined}
        >
          <motion.div className="p5-settings-section" variants={animationsOn ? itemVariants : undefined}>
            <h3 className="p5-section-subtitle">SETTINGS</h3>
            <div className="p5-settings-list">
              {systemOptions.map((option) => (
                <div key={option.name} className="p5-setting-row">
                  <span className="p5-setting-icon">{option.icon}</span>
                  <span className="p5-setting-name">{option.name}</span>
                  <span className="p5-setting-status">{settings[option.key] ? 'ON' : 'OFF'}</span>
                  <button className="p5-toggle-btn" onClick={() => toggleSetting(option.key)}>
                    {settings[option.key] ? 'ON' : 'OFF'}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="p5-about-section" variants={animationsOn ? itemVariants : undefined}>
            <h3 className="p5-section-subtitle">ABOUT THIS SITE</h3>
            <div className="p5-about-card">
              <p className="p5-about-text">
                Built with React + Vite, inspired by Persona 5's stylish UI.
                Features framer-motion animations and interactive elements.
              </p>
              <div className="p5-tech-badges">
                {['React', 'Vite', 'Framer Motion', 'CSS'].map((tech) => (
                  <span key={tech} className="p5-tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.button
          className="p5-back-control"
          onClick={onBack}
          initial={animationsOn ? { opacity: 0 } : undefined}
          animate={animationsOn ? { opacity: 1 } : undefined}
          transition={animationsOn ? { delay: 0.8 } : undefined}
        >
          RETURN [ESC]
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SystemView;
