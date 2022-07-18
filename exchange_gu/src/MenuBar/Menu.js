import React, { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Board from './Board'
import Made from './Made'
import Gesture from '../Gesture/Gesture'

<<<<<<< HEAD

const arr = ["Films", "GCGF", "2x9HD"];
const pagearr =[
    <Film/>, <Gesture/>, <Made/> 
=======
const arr = ["Board","GCGF","2x9HD"]
const pagearr =[
    <Board/>, <Gesture className="Gesture"/>, <Made/>
>>>>>>> b66b456c19982365ba0b8f7037d4524ee5d7b38b
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
            </Tabs>
            <div>{pagearr[value]}</div>
        </div>
    );
}

