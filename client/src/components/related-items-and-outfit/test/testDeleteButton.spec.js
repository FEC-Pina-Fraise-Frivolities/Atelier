import { React } from 'react';
import { render, screen } from '@testing-library/react';
import OutfitList from '../components/OutfitList';
import DeleteButton from '../components/DeleteButton';

describe('Delete Button', () => {
  it('Should have a delee button', () => {
    const { container } = render(<OutfitList />);
    const deleteButton = container.getElementsByClassName('relatedbutton');
    expect(container.getElementsByClassName('relatedbutton').length).toBe(1);
  });
});
