import React from 'react'

const ToDoRowItem = (props) => {

    return (
        <tr>
            <th scope='row'>{props.id}</th>
            <td>{props.description}</td>
            <td>{props.assigned}</td>
            <td>
            <button className='btn btn-sm btn-success' onClick={() => props.editToDo(props.id)}>Edit</button>            
            <button className='btn btn-sm btn-danger' onClick={() => props.deleteToDo(props.id)}>Delete</button>            
            </td>
        </tr>
    )
}

export default ToDoRowItem