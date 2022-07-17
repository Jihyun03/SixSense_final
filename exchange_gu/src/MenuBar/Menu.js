import React, { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {CSSTransition} from 'react-transition-group';
import Film from './Film'
import Series from './Series'
import Made from './Made'

const arr = ["Films","Series","2x9HD"]

export default function Menu() {
    const [value, setValue] = React.useState('one');
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
                <Tab value="one" label="Item One" />
                <Tab value="two" label="Item Two" />
                <Tab value="three" label="Item Three" />
            </Tabs>
        </div>
    );
}

