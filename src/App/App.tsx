import React, { Component } from 'react'
import style from './App.module.css'
import Button from './components/Button/Button';
import FlexVLayout from './components/layouts/FlexVLayout/FlexVLayout';
import MemeForm from './components/MemeForm/MemeForm';
import MemeViewer from './components/MemeViewer/MemeViewer';

interface I_AppProps {
  AppName?: string;
}
interface I_AppState {
  counter: number;
  uneValue: string;
}
class App extends Component<I_AppProps, I_AppState> {
  constructor(props: I_AppProps) {
    super(props);
    this.state = { counter: 0, uneValue: "Hello" };
  }
  componentDidMount() {
    console.log(
      "%c%s",
      "font-size:24pt;color:green;font-weight:900",
      "Le component App est monté"
    );
  }
  componentDidUpdate(oldProps: I_AppProps, oldState: I_AppState) {
    console.log(
      "%c%s",
      "font-size:16pt;color:blue;font-weight:900",
      "==========cmp updated========"
    );
    console.log("props->", oldProps, this.props);
    console.log("state->", oldState, this.state);
    console.log(
      "%c%s",
      "font-size:16pt;color:blue;font-weight:900",
      "============================="
    );
  }
  render(): React.ReactNode {
    return (
      <div className={style.App}>
        <FlexVLayout>
          <MemeViewer />
          <MemeForm />
        </FlexVLayout>
      </div>
    );
  }
}

export default App;