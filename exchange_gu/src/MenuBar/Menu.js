import React, { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Film from './Film'
import Made from './Made'
import Gesture from '../Gesture/Gesture'

const arr = ["Films","GCGF","2x9HD"]
const pagearr =[
    <Film/>, <Gesture className="Gesture"/>, <Made/>
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
                {/* <Tab className="FarClose" value={3} label={arr[3]}/> */}
            </Tabs>
            <div>{pagearr[value]}</div>
        </div>
    );
}

