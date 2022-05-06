import React from 'react';

export default function Todolist(props) {
    return(
        <div>
            <table> 
                <tbody>
                    <tr><th>Description</th><th>Date</th></tr>
                    {props.todos.map((desc, index) => 
                    <tr key={index}>
                        <td>{desc.text}</td>
                        <td>{desc.strDate}</td>
                        
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}