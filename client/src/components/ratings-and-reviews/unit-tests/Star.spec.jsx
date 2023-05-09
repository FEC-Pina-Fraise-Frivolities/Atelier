import React from 'react';
import { render, screen } from '@testing-library/react';
import Star from '../Star';

/* eslint "no-undef": 0 */
describe('Star component testing', () => {
  it('Should create a star compoents', () => {
    render(<Star rating={3}/>);
    expect(screen.getAllByRole('generic')).toBeTruthy();
  });
});
