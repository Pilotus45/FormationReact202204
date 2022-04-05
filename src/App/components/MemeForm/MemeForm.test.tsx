import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { unconnectedMemeForm as UCMemeForm } from './MemeForm';
import { DummyMeme } from '../../interfaces/meme';

describe('<MemeForm />', () => {
  test('it should mount', () => {
    render(<UCMemeForm images={[]} currentMeme={DummyMeme} onInputValueChange={() => {}} />);
    
    const memeForm = screen.getByTestId('MemeForm');

    expect(memeForm).toBeInTheDocument();
  });
});