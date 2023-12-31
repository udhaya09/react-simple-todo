import React from "react";
import { ToDoRowItem } from "./ToDoRowItem";
import { TodoModel } from "../models/TodoModel";

export const ToDoTable: React.FC<{
  todos: TodoModel[];
  deleteToDo: Function;
  editToDo: Function;
}> = (props) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Assigned</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map((todo) => (
          <ToDoRowItem
            key={todo.id}
            id={todo.id}
            description={todo.description}
            assigned={todo.assigned}
            deleteToDo={props.deleteToDo}
            editToDo={props.editToDo}
          />
        ))}
      </tbody>
    </table>
  );
};
