import React from 'react';

function Features({ features }) {
  return (

    <div className="productFeatures">

      { features.map((feature) => (
        <div className="feature">
          {feature.feature}
          :
          {feature.value}
        </div>
      ))}

    </div>

  );
}

export default Features;
