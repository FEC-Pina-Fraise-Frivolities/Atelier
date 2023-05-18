import { React } from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import OutfitList from '../components/OutfitList';

afterEach(() => {
  cleanup();
});

describe('Outfit List', () => {
  it('Should have a list', () => {
    const setOutfitArr = jest.fn();
    const setStoreArr = jest.fn();
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
    };

    const storeArr = {
      40336: {
        ratings: 3, name: 'pdd sunglasses', originalPrice: 9, salePrice: null, category: 'glass', photos: [null, null],
      },
    };
    global.localStorage = localStorageMock;
    global.localStorage.setItem('outfitArr', JSON.stringify([40336, 40337, 40338, 40339, 40440, 40441]));
    const { container } = render(<OutfitList
      productId={40436}
      setStoreArr={setStoreArr}
      storeArr={storeArr}
      setOutfitArr={setOutfitArr}
    />);
    const list = container.getElementsByClassName('list');
    expect(list.length).toBe(1);
    const button = container.getElementsByClassName('addCard');
    fireEvent.click(button[0]);
    expect(global.localStorage.getItem('outfitArr')).toBe('[40436,40336,40337,40338,40339,40440,40441]');
  });
});
