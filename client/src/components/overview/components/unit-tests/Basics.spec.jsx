import { render, screen } from '@testing-library/react';
import React from 'react';
import Basics from '../Basics/Basics';

/* eslint "no-undef": 0 */
describe('Basics component testing', () => {
  const productData = {
    id: 40346,
    campus: 'hr-rfp',
    name: 'Morning Joggers',
    slogan: 'Make yourself a morning person',
    description: "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
    category: 'Pants',
    default_price: '40.00',
    created_at: '2021-08-13T14:38:44.509Z',
    updated_at: '2021-08-13T14:38:44.509Z',
    features: [
      {
        feature: 'Fabric',
        value: '100% Cotton',
      },
      {
        feature: 'Cut',
        value: 'Skinny',
      },
    ],
  };

  const selectedStyle = {
    style_id: 240510,
    name: 'Black',
    original_price: '40.00',
    sale_price: null,
    'default?': true,
    photos: [
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      },
    ],
  };

  it('Should render a Basics component', () => {
    render(
      <Basics productData={productData} selectedStyle={selectedStyle} />,
    );
    expect(screen.getAllByRole('generic')).toBeTruthy();
  });
});
