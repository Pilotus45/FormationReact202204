import React, { Component } from 'react'
import style from './App.module.css'
import FlexVLayout from './components/layouts/FlexVLayout/FlexVLayout';
import MemeForm from './components/MemeForm/MemeForm';
import MemeThumbnail from './components/MemeThumbnail/MemeThumbnail';
import MemeViewer from './components/MemeViewer/MemeViewer';

interface I_AppProps {
  AppName?: string;
}



class App extends Component<I_AppProps> {

  render(): React.ReactNode {
    return (
      <div className={style.App}>
        <MemeThumbnail />
        <FlexVLayout>
          <div>
            <MemeViewer />
          </div>          
          <MemeForm />
        </FlexVLayout>
      </div>
    );
  }
}

export default App;