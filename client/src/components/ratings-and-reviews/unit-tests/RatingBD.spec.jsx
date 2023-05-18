import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RatingBD from '../rating-summary/RatingBD';
import { sampleAPIReviewsMeta } from './SampleData';

/* eslint "no-undef": 0 */
/* eslint "no-unused-vars": 0 */
describe('Rating breakdown testing', () => {
  // Mock props
  const { ratings, recommended } = sampleAPIReviewsMeta;

  it('The component should exist', () => {
    const { container } = render(<RatingBD ratings={ratings} recommended={recommended} />);
    expect(container.querySelector('.rating.container')).toBeTruthy();
  });

  it('The component should have 5 bars', () => {
    const { container } = render(<RatingBD ratings={ratings} recommended={recommended} />);
    expect(container.querySelectorAll('.bar.container').length).toBe(5);
  });
});
