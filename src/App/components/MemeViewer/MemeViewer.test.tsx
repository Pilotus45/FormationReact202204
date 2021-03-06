import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { unconnectedMemeViewer as UCMemeViewer } from './MemeViewer';
import { DummyMeme } from '../../interfaces/meme';

describe('<MemeViewer />', () => {
  test('it should mount', () => {
    render(<UCMemeViewer meme={DummyMeme} image={{id: 0,
      url:'bender.png',
      w:800,
      h:1461,
      name:'bender'}}/>);
    
    const memeViewer = screen.getByTestId('MemeViewer');

    expect(memeViewer).toBeInTheDocument();
  });
});