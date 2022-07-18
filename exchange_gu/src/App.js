import React, {Component} from 'react';
import './App.css';
import Menu from './MenuBar/Menu'
import Zoom from './Zoom/Zooming'
import StoreImgList from './Zoom/StoreImgList'
import SignIn from './Members/SignIn'
import Logout from './Members/Logout'
// import Swipe from './Swipe/Swipe'
// import Deck from './Deck/Deck'
// import Gesture from './Gesture/Gesture'


class App extends Component {
  render(){
    const name = 'react';
    return (
      <div className="react">
        <div style={{float : "right"}}><SignIn/></div>
         {/* <div className="MenuBar"><Menu/></div> */}
         {/* <div className="Zoom"><Zoom/></div> */}

         {/* <Swipe/> */}
         {/* <Gesture/> */}
        <div className="container mt-5 carousel">
          <h1 className="slider_title">Exchange_gu</h1>
            <StoreImgList />  
       </div>
       <Menu/>
       <div style={{float : "right"}}><Logout/></div>
       {/* <div className='Deck'><Deck/></div> */}
     </div>
    );
  }
}


export default App;