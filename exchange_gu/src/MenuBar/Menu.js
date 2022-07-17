import React, { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {CSSTransition} from 'react-transition-group';
import Film from './Film'
import Series from './Series'
import Made from './Made'

const arr = ["Films","Series","2x9HD"]
const pagearr =[
    <Film/>, <Series/>, <Made/>
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
                <Tab value={0} label={arr[0]} />
                <Tab value={1} label={arr[1]} />
                <Tab value={2} label={arr[2]} />
            </Tabs>
            <div>{pagearr[value]}</div>
        </div>
    );
}

