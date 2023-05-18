import { React } from 'react';
import {
  render, screen, fireEvent, cleanup,
} from '@testing-library/react';
import DeleteButton from '../components/DeleteButton';

afterEach(() => {
  cleanup();
});
describe('Delete Button', () => {
  it('Should have a delete button', () => {
    const setOutfitArr = jest.fn();
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
    };
    global.localStorage = localStorageMock;
    global.localStorage.setItem('outfitArr', JSON.stringify([40336]));
    render(<DeleteButton deleteId={40336} setOutfitArr={setOutfitArr} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(global.localStorage.getItem('outfitArr')).toBe('[]');
  });
});
