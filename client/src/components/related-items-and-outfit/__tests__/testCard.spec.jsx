import { React } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import CardDetail from '../components/CardDetail';

describe('Card Detail', () => {
  test('null url in photo gallary', () => {
    const setProductId = jest.fn();
    const setStoreArr = jest.fn();
    render(<CardDetail
      ratings={3}
      name="pdd sunglasses"
      originalPrice={9}
      salePrice={1}
      category="sunglasses"
      photoArr={[null, null]}
      setProductId={setProductId}
      id={40330}
      setStoreArr={setStoreArr}
      storeArr={[]}
    />);
    const mainImg = screen.getByRole('img');
    fireEvent.mouseEnter(mainImg);
    fireEvent.mouseLeave(mainImg);
    const name = screen.getByText('pdd sunglasses');
    expect(name).toBeInTheDocument();
  });
});
