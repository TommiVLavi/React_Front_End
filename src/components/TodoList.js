import React, {useState} from 'react';
import Table from './TodoTable'
import But from '@mui/material/Button';
import Text from '@mui/material/TextField';
import Stack from '@mui/material/Stack'
import { alpha } from '@material-ui/core/styles';

import { DatePicker, DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function TodoList(){
    const [desc, setDesc] = useState({text:'',date: new Date(), strDate: ''});
    const [todos, setTodos] = useState([]);

    const addTodo = (event) => {
        event.preventDefault();

        setDesc({...desc, strDate: desc.date.toDateString()})
        setTodos([...todos, desc]);
        console.log("Done")
    }

    const inputChanged = (event) => {
        setDesc({...desc, [event.target.name]: event.target.value});
    }

    const dateChanged = (event) => {
        setDesc({...desc, date: event})
        console.log(desc.date)
    }

    return(
        <div>
            
            <Stack direction="row" spacing={4} justifyContent="center" alignItems="center">
                
                <Text
                    label="Description"
                    variant="standard"
                    name="text" 
                    value={desc.text}
                    onChange={inputChanged}
                />

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker value={desc.date} onChange={value => dateChanged(value)}/>
                </MuiPickersUtilsProvider>

                <But onClick={addTodo} variant="contained">ADD</But>
            </Stack>

            <Table todos={todos}/>
        </div>
        
    );
}

export default TodoList;