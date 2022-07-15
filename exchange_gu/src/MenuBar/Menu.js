
import React, { useState } from "react";
import {CSSTransition} from 'react-transition-group';
import Film from './Film'
import Series from './Series'
import Made from './Made'

const arr = ["Films","Series","2x9HD"]

export default function Menu() {
    const [activeIndex, setActiveIndex]=useState(0);

    const tabClickHandler=(index)=>{
        setActiveIndex(index);
    };

    const tabContArr=[
        {
            tabTitle:(
                <li className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(0)}> Films </li>
            ),
            tabCont:(
                <div> <Film/> </div>
            )
        },
        {
            tabTitle:(
                <li className={activeIndex===1 ? "is-active" : ""} onClick={()=>tabClickHandler(1)}> Series </li>
            ),
            tabCont:(
                <div> <Series/> </div>
            )
        },
        {
            tabTitle:(
                <li className={activeIndex===2 ? "is-active" : ""} onClick={()=>tabClickHandler(2)}> 2x9HD </li>
            ),
            tabCont:(
                <div> <Made/> </div>
            )
        }
    ];

    return (
        <div>
          <ul className="tabs is-boxed">
            {tabContArr.map((section, index)=>{
                return section.tabTitle
            })}
          </ul>
          <div>
          	{tabContArr[activeIndex].tabCont}
          </div>
        </div>
    );
}

