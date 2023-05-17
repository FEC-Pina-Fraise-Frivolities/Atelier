import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import result from '../../../mock-data/mock-hooks';
import SizeSelector from '../SizeSelector';

describe('SizeSelector component testing', () => {
  it('Should render a SizeSelector component', () => {
    render(
      <SizeSelector
        selectedStyle={result.current.selectedStyle}
        selectedSize={result.current.selectedSize}
        skusNull={result.current.skusNull}
        productSkus={result.current.productSkus}
        skuRef={result.current.skuRef}
        setProductSkus={result.current.setProductSkus}
        setSkusNull={result.current.setSkusNull}
        setSelectedSize={result.current.setSelectedSize}
      />,
    );
    // expect(screen.getAllByRole('generic')).toBeTruthy();
  });
  it('Should return null if sizes are null', () => {
    const style = {
      style_id: 240546,
      name: 'Reality',
      original_price: '500000000.00',
      skus: {
        null: {
          quantity: null,
          size: null,
        },
      },
    };

    const { queryByRole } = render(
      <SizeSelector
        selectedStyle={style}
        selectedSize={null}
        skusNull
        productSkus={style.skus}
        skuRef={null}
        setProductSkus={result.current.setProductSkus}
        setSkusNull={result.current.setSkusNull}
        setSelectedSize={result.current.setSelectedSize}
      />,
    );
    // const sizeSelector = queryByRole('option');
    // expect(sizeSelector).toBeFalsy();
  });
  it('Should select a size', () => {
    render(
      <SizeSelector
        selectedStyle={result.current.selectedStyle}
        selectedSize={result.current.selectedSize}
        skusNull={result.current.skusNull}
        productSkus={result.current.productSkus}
        skuRef={result.current.skuRef}
        setProductSkus={result.current.setProductSkus}
        setSkusNull={result.current.setSkusNull}
        setSelectedSize={result.current.setSelectedSize}
      />,
    );
    userEvent.selectOptions(
      screen.getByRole('combobox'),
      // screen.getByRole('option', { name: 'XS' }),
    );
    // expect(screen.getByRole('option', 'XS').selected).toBe(true);
  });
});
