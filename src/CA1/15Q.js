import React, { useState } from 'react';

const MyComponent = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label>Name:</label>
      <input type="text"  onChange={handleChange} />
      <p>Hello, {name}!</p>
    </div>
  );
};

export default MyComponent;
