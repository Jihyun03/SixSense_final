import React, {Component} from "react";
import './menu_style.css';
import Youtube from "react-youtube";
// import Loading from "./Loading";

class Made extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //       loading: false,
  //   };
  // }
  // componentDidMount() {
  //   this.state.loading = false;
  // }
  render(){
    const name = 'Made';
    const loading = this.state;
    const opts = {
      height : '260',
      width : '450',
      playerVars : {
        autoplay : 0,
      },
    };
    
    return (
      <div>
          {/* {loading ? <Loading /> : null} */}
          <div className="contents">
              <div className="videoBlock" style={{display: 'flex', justifyContent : 'center'}}> 
                <Youtube className="video" videoId="f9uLhQ1paW8" opts={opts} onReady={this._onReady} /> 
                <Youtube className="video" videoId="QmAWZMIRYEo" opts={opts} onReady={this._onReady} />
                <Youtube className="video" videoId="Jz2NR3KYN3c" opts={opts} onReady={this._onReady} />
              </div>
              <div className="videoBlock" style={{display: 'flex', justifyContent : 'center'}}>
                <Youtube className="video" videoId="d9BjGRFPmvM" opts={opts} onReady={this._onReady} />
                <Youtube className="video" videoId="XlfSjvN4-z0" opts={opts} onReady={this._onReady} />
                <Youtube className="video" videoId="-et5T6tjdqA" opts={opts} onReady={this._onReady} />
              </div>
              <div className="videoBlock" style={{display: 'flex', justifyContent : 'center'}}>
                <Youtube className="video" videoId="l1GjxSSyVSk" opts={opts} onReady={this._onReady} />
                <Youtube className="video" videoId="OihPIOBzbSg" opts={opts} onReady={this._onReady} />
                <Youtube className="video" videoId="koT2zYZIbIM" opts={opts} onReady={this._onReady} />
              </div>
              <div className="videoBlock" style={{display: 'flex', justifyContent : 'center'}}>
                <Youtube className="video" videoId="rWgT7N8-_po" opts={opts} onReady={this._onReady} />
                <Youtube className="video" videoId="B7GLwkC8B0Y" opts={opts} onReady={this._onReady} />
                <Youtube className="video" videoId="EyLzOZZuNHA" opts={opts} onReady={this._onReady} />
              </div>
              <div className="videoBlock" style={{display: 'flex', justifyContent : 'center'}}>
                <Youtube className="video" videoId="GfzDsvZtpwc" opts={opts} onReady={this._onReady} />
                <Youtube className="video" videoId="7y-eps3O-Ko" opts={opts} onReady={this._onReady} />
                <Youtube className="video" videoId="j9QzZ5hwDhA" opts={opts} onReady={this._onReady} />
              </div>
          </div>
      </div>

    );
  }
  _onReady(event) {
    event.target.pauseVideo();
  }
}


export default Made;