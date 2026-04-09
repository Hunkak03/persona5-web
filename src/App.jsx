import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useSound from 'use-sound';
import { Howler } from 'howler';
import { useSettings } from './context/SettingsContext.jsx';
import P5Menu from './components/P5Menu';
import P5VideoBackground from './components/P5VideoBackground';
import ItemsView from './components/ItemsView';
import SkillsView from './components/SkillsView';
import PersonaView from './components/PersonaView';
import StatusView from './components/StatusView';
import SystemView from './components/SystemView';
import './App.css';

import hoverSfx from './assets/sounds/hover.mp3';
import bgMusic from './assets/sounds/bgm.mp3';
import selectSfx from './assets/sounds/select.mp3';

function App() {
  const { settings, toggleSetting } = useSettings();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentView, setCurrentView] = useState('main');
  const [isBgmPlaying, setIsBgmPlaying] = useState(false);

  const bgmRef = useRef(null);

  const [playHover] = useSound(hoverSfx, { volume: 0.4 });
  const [playBgm, { sound: bgmSound, stop: stopBgm }] = useSound(bgMusic, { volume: 0.2, loop: true, html5: true });
  const [playSelect] = useSound(selectSfx, { volume: 0.5 });

  // Handle BGM toggle
  useEffect(() => {
    if (settings.bgm) {
      if (!isBgmPlaying) {
        playBgm();
        setIsBgmPlaying(true);
      }
    } else {
      if (isBgmPlaying) {
        stopBgm();
        setIsBgmPlaying(false);
      }
    }
  }, [settings.bgm]);

  const handleStart = useCallback(() => {
    if (Howler.ctx.state === 'suspended') Howler.ctx.resume();
    if (settings.bgm) {
      playBgm();
      setIsBgmPlaying(true);
    }
    setHasStarted(true);
  }, [settings.bgm]);

  const handleMenuClick = useCallback((index) => {
    if (settings.sfx) playSelect();
    const viewMap = {
      0: 'items',
      1: 'skills',
      2: 'persona',
      3: 'status',
      4: 'system'
    };
    setCurrentView(viewMap[index] || 'main');
  }, [settings.sfx]);

  // Global ESC key handler
  const handleEsc = useCallback((e) => {
    if (e.key === 'Escape' && currentView !== 'main') {
      if (settings.sfx) playSelect();
      setCurrentView('main');
    }
  }, [currentView, settings.sfx]);

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [handleEsc]);

  // Helper to get motion config based on animations setting
  const getMotionConfig = (config) => {
    if (!settings.animations) {
      return { initial: undefined, animate: undefined, exit: undefined, transition: undefined };
    }
    return config;
  };

  return (
    <div className="game-container">
      <div className="video-background-layer">
        <P5VideoBackground />
      </div>

      {!hasStarted ? (
        <div className="start-overlay" onClick={handleStart}>
          <h1 className="pulse-text">TAKE YOUR HEART</h1>
        </div>
      ) : (
        <div className="interactive-layer">
          <AnimatePresence mode="wait">
            {currentView === 'main' && (
              <motion.div
                key="main-menu"
                className="menu-layer"
                {...getMotionConfig({
                  initial: { x: -200, opacity: 0 },
                  animate: { x: 0, opacity: 1 },
                  exit: { x: -1000, skewX: 20, opacity: 0 },
                  transition: { duration: 0.5, ease: "easeOut" }
                })}
              >
                <P5Menu
                  activeIndex={activeIndex}
                  onHover={(i) => {
                    if (i !== activeIndex) {
                      if (settings.sfx) playHover();
                      setActiveIndex(i);
                    }
                  }}
                  onItemClick={() => handleMenuClick(activeIndex)}
                />
              </motion.div>
            )}

            {currentView === 'items' && (
              <motion.div
                key="items-view"
                {...getMotionConfig({
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 1.2 }
                })}
              >
                <ItemsView onBack={() => { if (settings.sfx) playSelect(); setCurrentView('main'); }} settings={settings} />
              </motion.div>
            )}

            {currentView === 'skills' && (
              <motion.div
                key="skills-view"
                {...getMotionConfig({
                  initial: { opacity: 0, x: 500 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: -500 }
                })}
              >
                <SkillsView onBack={() => { if (settings.sfx) playSelect(); setCurrentView('main'); }} settings={settings} />
              </motion.div>
            )}

            {currentView === 'persona' && (
              <motion.div
                key="persona-view"
                {...getMotionConfig({
                  initial: { opacity: 0, x: -500 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: 500 }
                })}
              >
                <PersonaView onBack={() => { if (settings.sfx) playSelect(); setCurrentView('main'); }} settings={settings} />
              </motion.div>
            )}

            {currentView === 'status' && (
              <motion.div
                key="status-view"
                {...getMotionConfig({
                  initial: { opacity: 0, y: 500 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -500 }
                })}
              >
                <StatusView onBack={() => { if (settings.sfx) playSelect(); setCurrentView('main'); }} settings={settings} />
              </motion.div>
            )}

            {currentView === 'system' && (
              <motion.div
                key="system-view"
                {...getMotionConfig({
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 1.2 }
                })}
              >
                <SystemView onBack={() => { if (settings.sfx) playSelect(); setCurrentView('main'); }} toggleSetting={toggleSetting} settings={settings} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      <svg className="p5-distort-filter">
        <filter id="p5-distort">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" />
          <feDisplacementMap in="SourceGraphic" scale="8" />
        </filter>
      </svg>
    </div>
  );
}

export default App;