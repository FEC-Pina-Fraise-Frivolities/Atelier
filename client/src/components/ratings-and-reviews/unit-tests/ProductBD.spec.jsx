import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductBD from '../rating-summary/ProductBD';
import { sampleAPIReviewsMeta } from './SampleData';

/* eslint "no-undef": 0 */
/* eslint "no-unused-vars": 0 */
describe('Product break down testing', () => {
  // Mock props
  const { characteristics } = sampleAPIReviewsMeta;
  it('The component should exist', () => {
    const { container } = render(<ProductBD characteristics={characteristics} />);
    expect(container.querySelector('.product.container')).toBeTruthy();
  });
});
