import React from 'react';
import axios from 'axios';
import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import IndividualTile from '../review-list/IndividualTile';

/* eslint "no-undef": 0 */
/* eslint "no-unused-vars": 0 */
describe('Individual Tile of review testing', () => {
  // Mock props
  const review = {
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
  };
  // Mock states
  const mockUseState = React.useState;
  const useState = jest.spyOn(React, 'useState')
    .mockImplementation((initial) => (mockUseState(initial)));

  // Mock axios calls
  jest.mock('axios');
  axios.put = jest.fn().mockResolvedValue('good');

  it('The component should exist after render', () => {
    const { container } = render(<IndividualTile review={review} />);
    expect(container.querySelector('.review.container')).toBeTruthy();
  });

  it('The component should contain following subcomponents', () => {
    const { container } = render(<IndividualTile review={review} />);
    expect(container.querySelector('.star')).toBeTruthy();
    expect(container.querySelector('.name-date')).toBeTruthy();
    expect(container.querySelector('.body')).toBeTruthy();
    expect(container.querySelector('.helpful')).toBeTruthy();
    expect(container.querySelector('.review > h3')).toBeTruthy();
  });

  it('When helpfulness got clicked, it should trigger a POST request and update helpfulness number', async () => {
    const { container } = render(<IndividualTile review={review} />);
    fireEvent.click(container.querySelector('.helpful > button'));
    await waitFor(() => expect(container.querySelector('.helpful > button').textContent).toContain('1'), { timeout: 2000 });
  });
});
