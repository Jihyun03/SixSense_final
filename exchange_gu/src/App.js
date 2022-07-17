import React, {Component} from 'react';
import './App.css';
import Menu from './MenuBar/Menu'
import Zoom from './Zoom/Zooming'
import StoreImgList from './Zoom/StoreImgList'
// import Swipe from './Swipe/Swipe'
// import Deck from './Deck/Deck'
// import Gesture from './Gesture/Gesture'
<<<<<<< HEAD
=======

>>>>>>> 36c1a36a3170e0b0d07e298546da45e97ce09206


class App extends Component {
  render(){
    const name = 'react';
    return (
<<<<<<< HEAD
      <div className="react">
         <div className="MenuBar"><Menu/></div>
    {/* //     <div className="Zoom"><Zoom/></div> */}
           <div className="container mt-5 carousel">
              <h1 className="slider_title">Exchange_gu</h1>
                <StoreImgList />
          </div>
         {/* <Swipe/> */}
         {/* <Deck /> */}
     </div>
    // );
    // return <Deck/>
    // <Gesture/>
=======
    //   <div className="react">
    //     {/* <div className="MenuBar"><Menu/></div> */}
    //     {/* <div className="Zoom"><Zoom/></div> */}

    //     <Swipe/>
    //     <Deck />
    // </div>
    <div>
      <div className="container mt-5 carousel">
            <h1 className="slider_title">Exchange_gu</h1>
            <StoreImgList />  
      </div>
      <Menu/>
    </div>
>>>>>>> 36c1a36a3170e0b0d07e298546da45e97ce09206
    );
  }
}


export default App;

