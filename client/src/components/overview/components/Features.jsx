import React from 'react';

function Features({ features }) {
  return (

    <div className="productFeatures">
      <h4><em>Features</em></h4>
      { features.map((feature) => (
        <div className="feature" key={feature.feature}>
          <em><b>{feature.feature}</b></em>
          :
          {'  '}
          {feature.value}
        </div>
      ))}

    </div>

  );
}

export default Features;
