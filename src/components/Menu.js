import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

function TabMenu() {
    const [value, setValue] = useState('one');

    const handleChange = (event, value) => {
        setValue(value);
    }

    return (
        <div>
            <Tabs value={value} onChange={handleChange}>
                <Tab value="one" label="Item One" />
                <Tab value="two" label="Item Two" />
                <Tab value="three" label="Item Three" />
            </Tabs>

            {value == 'one' && <div>Item One</div> }
            {value == 'two' && <div>Item Two</div> }
            {value == 'three' && <div>Item Three</div>}
        </div>
    );
}

export default TabMenu;