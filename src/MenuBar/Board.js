import React, {Component} from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import './menu_style.css';
import BoardList from '../components/BoardList'

  class Film extends Component {
    render(){
      return (
          <div className="Film" align="center">
            <a href="https://www.youtube.com/channel/UCLc7X-VyFkfoJO9-2ciRJBA"><img src={require("../Images/youtube.ico")} width={48} height={48}/></a>
            <a href="https://m.cafe.naver.com/9kyo.cafe?"><img src={require("../Images/naver.ico")} width={48} height={48}/></a>
            <a href="https://m.cafe.daum.net/gugyohwan/_rec"><img src={require("../Images/daum.ico")} width={48} height={48}/></a>
          </div>  
      );
    }
  }
  
  export default Film;