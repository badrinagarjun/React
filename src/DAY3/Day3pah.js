import React, { useState } from 'react';

function Transformation() {
  const [transformation, setTransformation] = useState("Kaioken");

  const toggleTransformation = () => {
    setTransformation((prevTransformation) => {
      if (prevTransformation === "Kaioken") {
        return "SuperSaiyan";
      } else {
        return "Kaioken";
      }
    });
  };

  const renderTransformationClass = () => {
    if (transformation === "Kaioken") {
      return "Kaioken";
    } else {
      return "SuperSaiyan";
    }
  };

  return (
    <div >
      <h1>Goku's Transformation</h1>
      <div className={renderTransformationClass()}>
        Current Transformation: {transformation}
      </div>
      <button onClick={toggleTransformation}>Toggle Transformation</button>
    </div>
  );
}

export default Transformation;