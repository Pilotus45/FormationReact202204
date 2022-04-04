import React from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Button bgColor="lightBlue" buttonClicked={(arg:any) => {console.log(arg)}} />
      <Button color="black">
        <div>div 1</div>
        <div>div 2</div>
      </Button>
      <Button text="Crouton" appStyle={{border: '2px solid black'}} />
    </div>
  );
}

export default App;
