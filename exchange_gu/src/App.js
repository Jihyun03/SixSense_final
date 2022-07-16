import React, {Component} from 'react';
import './App.css';
import Menu from './MenuBar/Menu'
import Zoom from './Zoom/Zooming'
import Test from './Zoom/Scrolling'
import StoreImgList from './Zoom/StoreImgList'

class App extends Component {
  render(){
    const name = 'react';
    return (
      <div className="react">
        <div className="MenuBar"><Menu/></div>
        {/* <div className="Zoom"><Zoom/></div> */}
        {/* <Test/> */}
        <div className="container mt-5 carousel">
         <h1 className="slider_title">Exchange_gu</h1>
          <StoreImgList />
        </div>
    </div>
    );
  }
}


export default App;

