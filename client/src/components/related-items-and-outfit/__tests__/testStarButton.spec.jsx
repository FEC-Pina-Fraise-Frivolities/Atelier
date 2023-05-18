import React from 'react';
import {
  render, screen, fireEvent, cleanup,
} from '@testing-library/react';
import StarButton from '../components/StarButton';

afterEach(() => {
  cleanup();
});
describe('Star Working', () => {
  it('show a compare table', () => {
    const { container } = render(<StarButton productId={1} nextId={2} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(container.getElementsByClassName('compareTable').length).toBe(1);
  });
});
