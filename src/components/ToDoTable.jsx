import React from 'react'
import ToDoRowItem from './ToDoRowItem'

const ToDoTable = (props) => {
    return (
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                </tr>
            </thead>
            <tbody>
                <ToDoRowItem id={props.todos[0].id} description={props.todos[0].description} assigned={props.todos[0].assigned} />
                <ToDoRowItem id={props.todos[1].id} description={props.todos[1].description} assigned={props.todos[1].assigned} />
                <ToDoRowItem id={props.todos[2].id} description={props.todos[2].description} assigned={props.todos[2].assigned} />
            </tbody>
        </table>
    )
}

export default ToDoTable