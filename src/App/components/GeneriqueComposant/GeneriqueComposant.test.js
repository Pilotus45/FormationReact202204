import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GeneriqueComposant from './GeneriqueComposant';

describe('<GeneriqueComposant />', () => {
  test('it should mount', () => {
    render(<GeneriqueComposant />);
    
    const generiqueComposant = screen.getByTestId('GeneriqueComposant');

    expect(generiqueComposant).toBeInTheDocument();
  });
});