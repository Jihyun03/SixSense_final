import React, {Component} from "react";
import './menu_style.css';
import Youtube from "react-youtube";

class Made extends Component {
  render(){
    const name = 'Made';
    const opts = {
      height : '260',
      width : '450',
      playerVars : {
        autoplay : 0,
      },
    };
    return (
      <div> 
        <Youtube videoId="f9uLhQ1paW8" opts={opts} onReady={this._onReady} /> 
        <Youtube videoId="QmAWZMIRYEo" opts={opts} onReady={this._onReady} />
        <Youtube videoId="Jz2NR3KYN3c" opts={opts} onReady={this._onReady} />
        <Youtube videoId="d9BjGRFPmvM" opts={opts} onReady={this._onReady} />
      </div>
        
    
    );
  }
  _onReady(event) {
    event.target.pauseVideo();
  }
}


export default Made;