import React, {useState} from 'react';

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
                    {
                        todos.map((desc, index) => 
                            <tr key={index}>
                                <td>{desc.text}</td>
                                <td>{desc.date}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
        
    );
}

export default TodoList;