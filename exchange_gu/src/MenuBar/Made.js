import React, {Component} from "react";
import './menu_style.css';
import Youtube from "react-youtube";

class Made extends Component {
  render(){
    const name = 'Made';
    const opts = {
      height : '390',
      width : '640',
      playerVars : {
        autoplay : 1,
      },
    };
    return (
        <Youtube videoId="f9uLhQ1paW8" opts={opts} onReady={this._onReady}/>
    
    );
  }
  _onReady(event) {
    event.target.pauseVideo();
  }
}


export default Made;