import React, { Component, useEffect } from 'react'
import style from './App.module.css'
import FlexVLayout from './components/layouts/FlexVLayout/FlexVLayout';
import MemeForm from './components/MemeForm/MemeForm';
import MemeThumbnail from './components/MemeThumbnail/MemeThumbnail';
import MemeViewer from './components/MemeViewer/MemeViewer';
import Navbar from './components/Navbar/Navbar';
import { Route, Switch, withRouter } from 'react-router-dom'
import FlexHLayout from './components/layouts/FlexHLayout/FlexHLayout';
import { connect } from 'react-redux';
import I_Meme, { DummyMeme } from './interfaces/meme';
import { CURRENT_ACTIONS } from './store/store';
import Modal from './components/Modal/Modal';
import ListPdf from './components/ListPdf/ListPdf';



interface I_AppProps {
  AppName?: string;
}

class App extends Component<I_AppProps> {

  render(): React.ReactNode {
    return (
      <div className={style.App}>
        <FlexHLayout>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <div className={style.home}>Page d'accueil</div>
            </Route>
            <Route path="/listPDF" exact component={ListPdf} />
            <Route path="/editor" exact component={RoutedEditor} />
            <Route path="/editor/:id" component={RoutedEditor} />
            <Route path="/thumbnail">
              <MemeThumbnail />
            </Route>
            <Route path="/">
              <div className={style.Erreur}>Page Innexistante</div>
            </Route>            
          </Switch>
        </FlexHLayout>
        <Modal />
      </div>
    );
  }
}

function Editor(props: any) {
  console.log(props);
  useEffect(() => {
    props.update(
      props.memes.find((m: I_Meme) => m.id === parseInt(props.match.params.id))
    );
    return () => {
      props.update(undefined);
    };
  }, [props]);
  return (
    <FlexVLayout>
      <div>
        <MemeViewer />
      </div>
      <MemeForm />
    </FlexVLayout>
  );
}
function mstp(state: any, own: any) {
  return { ...own, memes: state.ressources.memes };
}
function mdtp(dispatch: Function) {
  return {
    update: (meme: I_Meme | undefined) => {
      dispatch({
        type: CURRENT_ACTIONS.UPDATE_CURRENT,
        value: meme ? meme : DummyMeme,
      });
    }
  };
}
const RoutedEditor = withRouter(connect(mstp, mdtp)(Editor));
export default App;