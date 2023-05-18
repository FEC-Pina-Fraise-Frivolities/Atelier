import { React } from 'react';
import {
  render, screen, fireEvent, cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import ComparisonView from '../components/ComparisonView';

afterEach(() => {
  cleanup();
});

describe('test compare', () => {
  test((''), async () => {
    const mockValueOne = {
      data: {
        features: [
          {
            feature: '5 Year Warranty',
            value: null,
          },
          {
            feature: 'Cut',
            value: '"Loose"',
          },
          {
            feature: 'Stitching',
            value: '"Cross Stitch"',
          },
        ],
      },
    };
    const mockValueTwo = {
      data: {
        features: [
          {
            feature: 'Green Leaf Certified',
            value: null,
          },
          {
            feature: 'Cut',
            value: '"Skinny"',
          },
          {
            feature: 'Non-GMO',
            value: null,
          },
        ],
      },
    };

    axios.get.mockImplementation((url) => {
      switch (url) {
        case '/products/40689':
          return Promise.resolve(mockValueOne);
        case '/products/40690':
          return Promise.resolve(mockValueTwo);
        default:
      }
    });

    await act(async () => {
      render(<ComparisonView productId={40689} nextId={40690} />);
    });
    const table = await screen.getAllByRole('table');
    expect(table.length).toBe(1);
  });
});
