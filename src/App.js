import React, { Component }  from 'react';
import './App.css';
import Tab from './components/Menu';

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <h1 className="App-intro"> Todo List</h1>
            </div>
            
            <Tab/>
        </div>
    );
}

export default App;