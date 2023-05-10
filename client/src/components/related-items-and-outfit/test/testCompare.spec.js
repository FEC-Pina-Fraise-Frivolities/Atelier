import { React } from 'react';
import { render, screen } from '@testing-library/react';
import RelatedList from '../components/RelatedList';

describe('List component testing', () => {
  const productId = 40346;
  it('Should show a list', () => {
    render(<RelatedList productId={productId} />);
    expect(screen.getAllByRole('generic')).toBeTruthy();
  });
});
