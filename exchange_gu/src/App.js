import React, {Component} from 'react';
import './App.css';
import Menu from './MenuBar/Menu'
import StoreImgList from './Zoom/StoreImgList'
// import Swipe from './Swipe/Swipe'


class App extends Component {
  render(){
    const name = 'react';
    return (
      <div className="react">
         {/* <Swipe/> */}
       <div className="container mt-5 carousel">
          <h1 className="slider_title">Exchange_gu</h1>
            <StoreImgList />  
       </div>
       <Menu/>
     </div>
    );
  }
}


export default App;