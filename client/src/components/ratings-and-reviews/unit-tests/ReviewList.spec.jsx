import React from 'react';
import axios from 'axios';
import { render, screen, fireEvent } from '@testing-library/react';
import ReviewList from '../review-list/ReviewList';
// import * as index from '../index';
import {
  reviews,
  filterReview,
  buttonToggle,
  modalHandler,
  moreReviewHandler,
  sortReviewHandler,
  sampleAPIReviews,
} from './SampleData';

/* eslint "no-undef": 0 */
/* eslint "no-unused-vars": 0 */
describe('Review List component testing', () => {
  // Mock useContext
  const contextObj = {
    filterReview,
    buttonToggle,
    modalHandler,
    moreReviewHandler,
    sortReviewHandler,
  };
  const useContext = jest.spyOn(React, 'useContext')
    .mockImplementation(() => (contextObj));
  // Mock import context (unsuccessful)
  // jest.mock('../index', () => ({ __esModule: true, default: null, FilterContext: 'testing' }));

  // Mock axios calls
  jest.mock('axios');
  axios.get = jest.fn()
    .mockResolvedValueOnce(sampleAPIReviews)
    .mockResolvedValueOnce(sampleAPIReviews);

  it('The list component should exist', () => {
    const { container } = render(
      <ReviewList reviews={reviews} />,
    );
    expect(container.querySelector('.list.container')).toBeTruthy();
  });
});
