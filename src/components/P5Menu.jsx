import React from 'react';
import P5MenuItem from './P5MenuItem';

const P5Menu = ({ activeIndex, onHover, onItemClick }) => {
  const menuItems = ["Items", "Skills", "Persona", "Status", "System"];

  return (
    <div className="p5-menu-container" style={{ display: 'flex', flexDirection: 'column' }}>
      {menuItems.map((item, index) => (
        <P5MenuItem
          key={item}
          label={item}
          active={index === activeIndex}
          onHover={() => onHover(index)}
          onClick={onItemClick}
        />
      ))}
    </div>
  );
};

export default P5Menu;