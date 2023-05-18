import { render, screen } from '@testing-library/react';
import React from 'react';
import { productData, productStyles } from '../../../mock-data/mock-data';
import result from '../../../mock-data/mock-hooks';
import ProductDetails from '../ProductDetails';

describe('ProductDetails component testing', () => {
  it('Should render a ProductDetails component', () => {
    render(
      <ProductDetails
        productData={productData}
        productStyles={productStyles}
        selectedStyle={result.current.selectedStyle}
        selectedPhoto={result.current.selectedPhoto}
        selectedThumb={result.current.selectedThumb}
      />,
    );
    expect(screen.getAllByRole('generic')).toBeTruthy();
  });
});
