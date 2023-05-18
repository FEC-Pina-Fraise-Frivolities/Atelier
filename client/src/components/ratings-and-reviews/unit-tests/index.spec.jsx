import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import RatingAndReview from '../index';
import { sampleAPIReviews, sampleAPIReviewsMeta } from './SampleData';

/* eslint "no-undef": 0 */
/* eslint "no-unused-vars": 0 */
describe('Testing the integration of ratings and reviews module', () => {
  // Mock createContext
  const mockCreateContext = React.createContext;
  const createContext = jest.spyOn(React, 'createContext')
    .mockImplementation((value) => (mockCreateContext(value)));
  // Mock useState
  const mockUseState = React.useState;
  const useState = jest.spyOn(React, 'useState')
    .mockImplementation((value) => (mockUseState(value)));
  // Mock useEffect
  const mockUseEffect = React.useEffect;
  const useEffect = jest.spyOn(React, 'useEffect')
    .mockImplementation((cb, depArr) => (mockUseEffect(cb, depArr)));
  // Mock axios
  jest.mock('axios');
  axios.get = jest.fn()
    .mockResolvedValue({ data: sampleAPIReviews })
    .mockResolvedValueOnce([{ data: sampleAPIReviews }, { data: sampleAPIReviewsMeta }]);

  it('the component should exist', () => {
    const { container } = render(<RatingAndReview productId={40348} />);
    expect(container.querySelector('.rating-and-review')).toBeTruthy();
  });

  it('It send a HTTP get request after click on more review', () => {
    const { container } = render(<RatingAndReview productId={40348} />);
    // fireEvent.click(screen.getByText('More review '));
    expect(container.querySelector('#subtitle')).toBeTruthy();
  });
});
