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
    const sizeSelector = queryByRole('option');
    expect(sizeSelector).toBeFalsy();
  });
  it('Should select a size', () => {
    const setSelectedSize = jest.fn();
    const { container } = render(
      <SizeSelector
        selectedStyle={result.current.selectedStyle}
        selectedSize={result.current.selectedSize}
        skusNull={result.current.skusNull}
        productSkus={result.current.productSkus}
        skuRef={result.current.skuRef}
        setProductSkus={result.current.setProductSkus}
        setSkusNull={result.current.setSkusNull}
        setSelectedSize={setSelectedSize}
      />,
    );
    userEvent.selectOptions(
      container.querySelector('.sizeSelector option[name="M"]'),
    );
    // expect(setSelectedSize).toHaveBeenCalledTimes(1);
    console.log(container.querySelector('option[name="M"]'));
    expect(container.querySelector('option[name="M"]').selected).toBe(true);
  });
});
