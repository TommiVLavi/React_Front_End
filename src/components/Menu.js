import React, { useState } from 'react';
import List from './TodoList'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

function TabMenu() {
    const [value, setValue] = useState('home');

    const change = (event, value) => {
        setValue(value);
    }

    return (
        <div>
            <Tabs value={value} onChange={change}>
                <Tab value="home" label="HOME"/>
                <Tab value="todos" label="TODOS"/>
            </Tabs>

            {value == 'home' && <div>Welcome, buddy!</div>}
            {value == 'todos' && <List/>}
        </div>
    );
}

export default TabMenu;