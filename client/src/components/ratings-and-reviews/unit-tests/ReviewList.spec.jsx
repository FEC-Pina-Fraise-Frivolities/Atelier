import { React, useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReviewList from '../review-list/ReviewList';
import { FilterContext } from '../index';

/* eslint "no-undef": 0 */
/* eslint "no-unused-vars": 0 */
describe('Review List component testing', () => {
  // Mock context
  const mockUseContext = React.useContext;
  const useContext = jest.spyOn(React, 'useContext')
    .mockImplementation((context) => (mockUseContext(context)));
  // Mock props
  const reviews = [{
    review_id: 1279887,
    rating: 4,
    summary: 'Best purchase ever!',
    recommend: true,
    response: null,
    body: 'I was so pleased with the service I received from this business. They went above and beyond to help me find the perfect item.” “I was very impressed with the quality of the product I received. It was exactly what I was hoping for',
    date: '2023-05-12T00:00:00.000Z',
    reviewer_name: 'Jayz',
    helpfulness: 0,
    photos: [],
  }];
  // Mock states
  const [showForm, setShowForm] = useState(false);
  const [reviewParams, setReviewParams] = useState({ sort: 'relevant', count: 3 });

  it('The list component should exist', () => {
    const { container } = render(<ReviewList reviews={reviews} />);
    expect(container.querySelector('.list.container')).toBeTruthy();
  });
});
