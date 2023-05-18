import { React } from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import RelatedList from '../components/RelatedList';

afterEach(() => {
  cleanup();
});

describe('List component testing', () => {
  const productId = 40346;
  it('Should show a list', () => {
    render(<RelatedList productId={productId} />);
    expect(screen.getAllByRole('generic')).toBeTruthy();
  });

  it('not in the store', async () => {
    const setProductId = jest.fn();
    const setStoreArr = jest.fn();
    const mockValue = { data: [40437, 40438, 40439, 40450, 40451] };
    axios.get.mockImplementation(() => Promise.resolve(mockValue));

    await act(async () => {
      render(<RelatedList
        productId={productId}
        setProductId={setProductId}
        storeArr={[]}
        setStoreArr={setStoreArr}
      />);
    });
    const list = await screen.getAllByRole('button');
    expect(list.length).toBe(5);
  });

  it('in the store', async () => {
    const setProductId = jest.fn();
    const setStoreArr = jest.fn();

    const mockValue = { data: [40437, 40438, 40439, 40450, 40451, 40451, 40460, 40470] };
    axios.get.mockImplementation(() => Promise.resolve(mockValue));
    await act(async () => {
      render(<RelatedList
        productId={productId}
        setProductId={setProductId}
        storeArr={[40438]}
        setStoreArr={setStoreArr}
      />);
    });
    const list = await screen.getAllByRole('button');
    expect(list.length).toBe(5);
  });
});
