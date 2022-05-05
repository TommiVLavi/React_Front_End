import React, {useState} from 'react';
import Table from './TodoTable'

function TodoList(){
    const [desc, setDesc] = useState({text:'',date:''});
    const [todos, setTodos] = useState([]);

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, desc]);
    }

    const inputChanged = (event) =>{
        setDesc({...desc, [event.target.name]: event.target.value});
    }

    const onRemove = id => e => {
        todos.filter(desc => desc.id !== id)
    }

    return(
        <div>
            <label>Description</label>
            <input type="text" name="text" value={desc.text} onChange={inputChanged} />
            <label>Date</label>
            <input type="date" name="date" value={desc.date} onChange={inputChanged}/>
            <button onClick={addTodo}>Add</button>
            <table> 
                <tbody>
                    <tr><th>Description</th><th>Date</th></tr>
                        <Table todos={todos}/>
                </tbody>
            </table>
        </div>
        
    );
}

export default TodoList;