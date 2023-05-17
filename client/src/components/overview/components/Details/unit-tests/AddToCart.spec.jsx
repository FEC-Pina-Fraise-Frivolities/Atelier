import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import result from '../../../mock-data/mock-hooks';
import AddToCart from '../AddToCart';

global.alert = jest.fn(() => 'Please select a size!');

describe('AddToCart component testing', () => {
  it('Should render an AddToCart component', () => {
    render(
      <AddToCart
        selectedSize={result.current.selectedSize}
        selectedQuantity={result.current.selectedQuantity}
        skusNull={result.current.skusNull}
        skuRef={result.current.skuRef}
      />,
    );
    expect(screen.getAllByRole('generic')).toBeTruthy();
  });
  it('Should resolve a fetch request onClick', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      text: () => Promise.resolve('Created'),
    }));
    const handleClick = global.fetch;
    const { queryByText } = render(
      <AddToCart
        selectedSize={result.current.selectedSize}
        selectedQuantity={result.current.selectedQuantity}
        skusNull={result.current.skusNull}
        skuRef={result.current.skuRef}
      />,
    );
    const button = queryByText('Add to Cart');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(screen.getAllByRole('generic')).toBeTruthy();
  });

  it('Should throw an error if fetch request failed', () => {
    global.fetch = jest.fn(() => Promise.reject(console.error('add to cart failed', undefined)));
    const handleClick = global.fetch;
    const { queryByText } = render(
      <AddToCart
        selectedSize={result.current.selectedSize}
        selectedQuantity={result.current.selectedQuantity}
        skusNull={result.current.skusNull}
        skuRef={result.current.skuRef}
      />,
    );

    const button = queryByText('Add to Cart');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('Should alert the user if no size was selected', () => {
    const handleClick = global.alert;
    const { queryByText } = render(
      <AddToCart
        selectedSize={null}
        selectedQuantity={result.current.selectedQuantity}
        skusNull={result.current.skusNull}
        skuRef={result.current.skuRef}
      />,
    );

    const button = queryByText('Add to Cart');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('Should render an empty string if skusNull == true', () => {
    const { queryByText } = render(
      <AddToCart
        selectedSize={result.current.selectedSize}
        selectedQuantity={result.current.selectedQuantity}
        skusNull
        skuRef={result.current.skuRef}
      />,
    );
    const button = queryByText('Add to Cart');
    expect(button).toBeFalsy();
  });
});
