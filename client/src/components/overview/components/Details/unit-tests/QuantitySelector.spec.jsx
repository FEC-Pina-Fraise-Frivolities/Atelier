import { render, screen } from '@testing-library/react';
import React from 'react';
import result from '../../../mock-data/mock-hooks';
import QuantitySelector from '../QuantitySelector';

describe('QuantitySelector component testing', () => {
  it('Should render a QuantitySelector component', () => {
    render(
      <QuantitySelector
        slectedStyle={result.current.selectedStyle}
        selectedSize={result.current.selectedSize}
        selectedQuantity={result.current.selectedQuantity}
        skusNull={false}
        setSelectedQuantity={result.current.setSelectedQuantity}
      />,
    );
    expect(screen.getAllByRole('generic')).toBeTruthy();
  });
  // it('Should select a quantity', () => {
  //   render(
  //     <QuantitySelector
  //       slectedStyle={result.current.selectedStyle}
  //       selectedSize={result.current.selectedSize}
  //       selectedQuantity={result.current.selectedQuantity}
  //       skusNull={result.current.skusNull}
  //       setSelectedQuantity={result.current.setSelectedQuantity}
  //     />,
  //   );
  //   console.log('!!!!!!!!!!!!!!!SELECTED SIZE!!!!!!!!!', result.current.selectedSize);
  //   console.log('!!!!!!!!!!!!!!!SELECTED QUANTITY!!!!!!!!!', result.current.selectedQuantity);
  // expect(screen.findByRole('option', '1').selected).toBe(true);
  // });
});
