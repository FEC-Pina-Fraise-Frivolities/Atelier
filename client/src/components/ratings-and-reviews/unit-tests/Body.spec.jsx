import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Body from '../review-list/Body';

/* eslint "no-undef": 0 */
/* eslint "no-unused-vars": 0 */
describe('Body component testing', () => {
  const realUseState = React.useState;
  // Mock props
  const body = `this is a great product,
    easy to use, and very cheap but outlook is not that greatCharacter Counter is
    a 100% free online character count calculator that's simple to use.
    Sometimes users prefer simplicity over all of the detailed writing information Word Counter provides,`;
  const photos = [{ id: 1, url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw0nAtF7i_0SH23Oxx74VVNd&ust=1684351983969000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjq3J_K-v4CFQAAAAAdAAAAABAE' }];
  // create states
  const useState = jest.spyOn(React, 'useState')
    .mockImplementationOnce((initial) => (
      realUseState(initial)
    ))
    .mockImplementationOnce((initial) => (
      realUseState(initial)
    ));

  it('Should return an element', () => {
    const { container } = render(<Body body={body} photos={photos} />);
    expect(container.querySelector('.body')).toBeTruthy();
  });

  it('A paragraph with the body text should exist and only display 250 characters', () => {
    const { container } = render(<Body body={body} photos={photos} />);
    expect(container.querySelector('p').textContent.length).toBe(250);
  });

  it('The paragraph should expand after first click, shorten after second click', () => {
    const { container } = render(<Body body={body} photos={photos} />);
    fireEvent.click(container.querySelector('p > input'));
    expect(container.querySelector('p').textContent.length).toBeGreaterThan(250);
    fireEvent.click(container.querySelector('p > input'));
    expect(container.querySelector('p').textContent.length).toBe(250);
  });

  it('The image should pop upon click, close after use hit close', () => {
    const { container } = render(<Body body={body} photos={photos} />);

    fireEvent.click(container.querySelector('.image > img'));
    expect(container.querySelector('.image-modal').style.display !== 'none').toBeTruthy();

    fireEvent.click(container.querySelector('.image-modal > button'));
    expect(container.querySelector('.image-modal').style.display).toBe('none');
  });
});
