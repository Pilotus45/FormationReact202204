import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { unconnectedMemeThumbnail as UCMemeThumbnail } from './MemeThumbnail';

describe('<MemeThumbnail />', () => {
  test('it should mount', () => {
    render(<UCMemeThumbnail memes={[]} images={[]} />);
    
    const memeThumbnail = screen.getByTestId('MemeThumbnail');

    expect(memeThumbnail).toBeInTheDocument();
  });
});