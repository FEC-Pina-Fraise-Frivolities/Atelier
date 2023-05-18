import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Bar from '../rating-summary/Bar';

/* eslint "no-undef": 0 */
/* eslint "no-unused-vars": 0 */
describe('Bar testing', () => {
  // Mock useContext
  const contextObj = {
    filterReview: [],
    setFilterReview: jest.fn().mockImplementation((arr) => {
      contextObj.filterReview = arr;
    }),
  };
  const useContext = jest.spyOn(React, 'useContext')
    .mockImplementation(() => (contextObj));
  // Mock useState
  const mockUseState = React.useState;
  const useState = jest.spyOn(React, 'useState')
    .mockImplementation((initial) => (mockUseState(initial)));
  // Mock props
  const percentage = '50%';
  const starName = '5 stars';

  it('The component should exist', () => {
    const { container } = render(<Bar percentage={percentage} starName={starName} />);
    expect(container.querySelector('.bar.container')).toBeTruthy();
  });

  it('There should be two bar components', () => {
    const { container } = render(<Bar percentage={percentage} starName={starName} />);
    expect(container.querySelectorAll('.double-bar > div').length).toBe(2);
  });

  it('Filterhandler should be trigger twiced after two clicks', () => {
    const { container } = render(<Bar percentage={percentage} starName={starName} />);
    fireEvent.click(container.querySelector('.bar.container'));
    fireEvent.click(container.querySelector('.bar.container'));
    expect(contextObj.setFilterReview).toHaveBeenCalledTimes(2);
  });
});
