import React, { Component } from "react";
import {CSSTransition} from 'react-transition-group';
import './menu_style.css';
import Film from './Film'
import Series from './Series'
import Made from './Made'

const obj = {
    0 : <Film />,
    1 : <Series />,
    2 : <Made />
}
const arr = ["Films","Series","2x9HD"]

class Menu extends Component{
    state = {
        activeTab : 0
    }
    clickHandler = (id) => {
        this.setState({activeTab : id})
    }
    render(){
        return(
            <div className="wrapper">
                <ul className="tabs">
                    {/* <li onClick={this.clickHandler(0)}>Films</li>
                    <li onClick={this.clickHandler(1)}>Series</li>
                    <li onClick={this.clickHandler(2)}>2x9HD</li> */}
                    {arr.map((v,idx)=> {
                        return <li key={idx} onClick= {()=>{this.clickHandler(idx)}}> {v} </li>
                    })}
                </ul>
                <div className="contents">
                    {obj[this.state.activeTab]}
                </div>
            </div>
        );
    }
}
export default Menu;