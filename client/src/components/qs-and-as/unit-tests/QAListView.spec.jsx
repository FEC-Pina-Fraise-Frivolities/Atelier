import React from 'react';
import { render, screen } from '@testing-library/react';
import QAListView from '../QAListView';

describe('QAList View Test', () => {
  it('Should only display at most 4 questions on initial render', () => {
    let { container } = render(<QAListView />);
    let questions = container.getElementsByClassName('qLine')
    expect(questions.length < 4 ).toBe(true);
  });
});
