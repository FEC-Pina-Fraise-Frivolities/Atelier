import React from 'react';
import { render, screen } from '@testing-library/react';
import Star from '../review-list/Star';

/* eslint "no-undef": 0 */
describe('Star component testing', () => {
  it('Should create a star component', () => {
    render(<Star rating={3} />);
    expect(screen.getAllByRole('generic')).toBeTruthy();
  });

  it('Should create two sub components', () => {
    const { container } = render(<Star rating={3} />);
    expect(container.querySelectorAll('.star > div').length).toBe(2);
  });
});
