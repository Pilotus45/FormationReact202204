import React, { Component } from 'react'
import style from './App.module.css'
import Button from './components/Button/Button';
import FlexVLayout from './components/layouts/FlexVLayout/FlexVLayout';
import MemeForm from './components/MemeForm/MemeForm';
import MemeViewer from './components/MemeViewer/MemeViewer';
import I_Meme, { DummyMeme as initialMemeState, I_Image } from './interfaces/meme';
import {SERVER_URL} from './config/config'

interface I_AppProps {
  AppName?: string;
}
interface I_AppState {
  currentMeme:I_Meme;
  images:Array<I_Image>;
  memes:Array<I_Meme>;
}

class App extends Component<I_AppProps, I_AppState> {
  constructor(props: I_AppProps) {
    super(props);
    this.state = { currentMeme:initialMemeState, images: [], memes:[] };
  }

  componentDidMount() {
    const prm = fetch(`${SERVER_URL}/memes`).then((f) => f.json());
    const pri = fetch(`${SERVER_URL}/images`).then((f) => f.json());
    Promise.all([prm, pri]).then(aResp => this.setState({images: aResp[1], memes: aResp[0]}));
  }

  componentDidUpdate(oldProps: I_AppProps, oldState: I_AppState) {
  }
  render(): React.ReactNode {
    return (
      <div className={style.App}>
        {JSON.stringify(this.state)}
        <FlexVLayout>
          <div>
            <MemeViewer meme={this.state.currentMeme} image={this.state.images.find(e=>e.id===this.state.currentMeme.imageId)} />
          </div>          
          <MemeForm currentMeme={this.state.currentMeme} images={this.state.images} onInputValueChange={(newMeme:any)=> {this.setState({currentMeme:{...this.state.currentMeme,...newMeme}})}} />
        </FlexVLayout>
      </div>
    );
  }
}

export default App;