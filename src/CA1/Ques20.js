import React, { useState } from 'react';

const Ques20 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = () => {
    console.log('Button clicked!');
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <button onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      style={{ background: isHovered ? 'lightblue' : 'lightgreen' }}
    >
      Click me!
    </button>
  );
};
export default Ques20;
