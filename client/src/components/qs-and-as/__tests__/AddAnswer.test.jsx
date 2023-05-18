import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen, userEvent } from '@testing-library/react';
import AddAnswer from '../AddAnswer';

describe('Add Answer', () => {
  beforeEach(() => {
    const show = jest.fn();
    const q = { question_id: 123 };
    const spy = jest.spyOn(document, 'querySelector');
    const mockElement = { innerText: 'Product 123' };
    spy.mockReturnValue(mockElement);
    render(<AddAnswer show={show} q={q} />);
  });

  test('should render lable and input for name', async () => {

    const name = screen.getByText(/nickname/i);
    const nameInput = screen.getByPlaceholderText(/jackson11/i);
    await userEvent.type(nameInput, 'Myusername')
    expect(name).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveValue('Myusername')
  });

  test('should render lable and input for email', () => {
    const email = screen.getByText(/your email/i);
    const emailInput = screen.getByPlaceholderText(/@email.com/i);
    expect(email).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });

  test('should render lable and input for answer', () => {
    const answer = screen.getByText('Your answer');
    const answerInput = screen.getByPlaceholderText(/answer here/i);
    expect(answer).toBeInTheDocument();
    expect(answerInput).toBeInTheDocument();
  });

  // test('should make an axios call with submit', () => {
  //   fireEvent.change(input, {target: {value: '23'}})
  //   fireEvent.change(input, {target: {value: '23'}})
  //   userEvent.click()
  // });
});
