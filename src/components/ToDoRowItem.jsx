import React from 'react'

const ToDoRowItem = (props) => {

    return (
        <tr>
            <th scope='row'>{props.id}</th>
            <td>{props.description}</td>
            <td>{props.assigned}</td>
        </tr>
    )
}

export default ToDoRowItem