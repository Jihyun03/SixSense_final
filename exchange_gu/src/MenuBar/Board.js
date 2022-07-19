import React, {Component} from "react";
import './menu_style.css';
import Card from '../MenuBar/Card' 

  class Film extends Component {
    render(){
      const name = 'Film';
      return (
        <div className="Film">
          <div><img src={require("../Images/youtube.ico")} width={48} height={48}/><a href="https://www.youtube.com/channel/UCLc7X-VyFkfoJO9-2ciRJBA">Youtube</a></div>
          <div><img src={require("../Images/naver.ico")} width={48} height={48}/><a href="https://m.cafe.naver.com/9kyo.cafe?">Naver Fan Cafe</a></div>
          <div><img src={require("../Images/daum.ico")} width={48} height={48}/><a href="https://m.cafe.daum.net/gugyohwan/_rec">Daum Fan Cafe</a></div>
        </div>
      );
    }
  }
  
  export default Film;