import React, { Component }  from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <h1 className="App-intro"> Todo List</h1>
            </div>
            
            <TodoList/>
        </div>
    );
}

export default App;