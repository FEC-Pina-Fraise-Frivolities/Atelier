import React from 'react';
import { render, screen } from '@testing-library/react';
import QEntry from '../QEntry';
import question from './UnitSample';

describe('Answer Display Testing', () => {
  test('should display 2 answers on initial render', () => {
    const { container } = render(<QEntry question={question}/>)
    const arr = container.getElementsByClassName('answer').length;
    expect(arr).toBe(2);
  });

});