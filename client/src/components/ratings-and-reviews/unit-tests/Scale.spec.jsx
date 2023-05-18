import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Scale from '../rating-summary/Scale';
import { sampleAPIReviewsMeta } from './SampleData';

/* eslint "no-undef": 0 */
/* eslint "no-unused-vars": 0 */
describe('Scale testing', () => {
  // Mock props
  let characteristic = sampleAPIReviewsMeta.characteristics.Size;
  const category = 'Size';

  it('The component should exist', () => {
    const { container } = render(<Scale characteristic={characteristic} category={category} />);
    expect(container.querySelector('.character.container')).toBeTruthy();
  });

  it('The component should not exist when characteristic is undefined', () => {
    characteristic = undefined;
    const { container } = render(<Scale characteristic={characteristic} category={category} />);
    expect(container.querySelector('.character.container')).toBeFalsy();
  });
});
