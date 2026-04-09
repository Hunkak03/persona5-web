import React from 'react';

const P5MenuItem = ({ label, active, onHover, onClick }) => {
  const letters = label.split("");

  return (
    <div
      className={`p5-menu-item ${active ? 'active' : ''}`}
      onMouseEnter={onHover}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      {active && (
        <div className="shape-wrapper">
          <div className="shape red-fill">
            <svg viewBox="0 0 108.1 47" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
              <polygon fill="#FF0000" points="29.5,8.5 150.7,0 108.1,32.7 3.1,47" />
            </svg>
          </div>
          <div className="shape cyan-fill">
            <svg viewBox="0 0 108.1 47" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
              <polygon fill="#00FFFF" points="0.3,17 125.1,0 68.8,45.6 24.3,39" />
            </svg>
          </div>
        </div>
      )}
      <div className="p5-item-text">
        {letters.map((char, i) => (
          <span
            key={i}
            className="p5-letter"
            style={{
              '--rotation': `${(i % 2 === 0 ? 3 : -3)}deg`,
              '--y-offset': `${(i % 2 === 0 ? 2 : -2)}px`
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default P5MenuItem;