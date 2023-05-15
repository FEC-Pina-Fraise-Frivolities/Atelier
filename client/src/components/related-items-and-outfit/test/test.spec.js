import { React } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardDetail from '../components/CardDetail';

describe('Card Detail', () => {
  it('Should have name', () => {
    const setProductId = jest.fn();
    const setStoreArr = jest.fn();
  render(<CardDetail
      ratings={3}
      name="pdd sunglasses"
      originalPrice={9}
      salePrice={null}
      category="sunglasses"
      photoArr={[]}
      setProductId={setProductId}
      id={40330}
      setStoreArr={setStoreArr}
      storeArr={[]}
    />);
    const name = screen.getByText('pdd sunglasses');
    expect(name).toBeInTheDocument();
  });
});
