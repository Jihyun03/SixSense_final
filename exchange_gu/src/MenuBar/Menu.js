import React, { Fragment, useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Board from './Board'
import Made from './Made'
import Gesture from '../Gesture/Gesture'
import Deck from '../Deck/Deck'


const arr = ["Board","GCGF", "2x9HD", "Card"]
const pagearr =[
    <Board/>, <div className="Gesture"><Gesture/></div>, <Made/>, <div className="Deck"><Deck/></div>
]

export default function Menu() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Tabs
                className="TabLists"
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                centered = "true"
            >
                <Tab value={0} label={arr[0]}/>
                <Tab value={1} label={arr[1]}/>
                <Tab value={2} label={arr[2]}/>
                <Tab value={3} label={arr[3]}/>
            </Tabs>
            <div>{pagearr[value]}</div>
        </div>
    );
}

