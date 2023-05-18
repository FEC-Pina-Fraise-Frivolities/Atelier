import React from 'react';
import {
  render, screen, fireEvent, cleanup,
} from '@testing-library/react';
import LeftArrow from '../components/LeftArrow';
import RightArrow from '../components/RightArrow';

afterEach(() => {
  cleanup();
});
describe('Arrow Working', () => {
  const index = 3;
  it('Left Arrow', () => {
    const setIndex = jest.fn();
    jest.spyOn(React, 'useState').mockImplementationOnce((initState) => [initState, setIndex]);
    render(<LeftArrow index={3} setIndex={setIndex} />);
    const arrow = screen.getByRole('button');
    fireEvent.click(arrow);
    expect(setIndex).toHaveBeenCalledTimes(1);
  });

  it('Right Arrow', () => {
    const setIndex = jest.fn();
    jest.spyOn(React, 'useState').mockImplementationOnce((initState) => [initState, setIndex]);
    render(<RightArrow index={3} setIndex={setIndex} />);
    const arrow = screen.getByRole('button');
    fireEvent.click(arrow);
    expect(setIndex).toHaveBeenCalledTimes(1);
  });
});
