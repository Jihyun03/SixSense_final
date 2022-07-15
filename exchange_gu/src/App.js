import React, {Component} from 'react';
import './App.css';
import Menu from './MenuBar/Menu'
import Zoom from './Zoom/Zooming'

class App extends Component {
  render(){
    const name = 'react';
    return (
      <div className="react">
        <div className="MenuBar"><Menu/></div>
        <div className="Zoom"><Zoom/></div>
    </div>
    );
  }
}


export default App;

