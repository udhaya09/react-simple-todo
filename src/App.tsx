import "./App.css";
import { ToDoTable } from "./components/ToDoTable";
import { useState } from "react";
import { NewToDoForm } from "./components/NewToDoForm";
import React from "react";

export const App = () => {
  const [showAddNew, setShowAddNew] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [todos, setTodos] = useState([
    { id: 1, description: "Wakeup at 4:30", assigned: "Udhaya" },
    { id: 2, description: "Excercise till 5:30", assigned: "Prakash" },
    { id: 3, description: "Walking till 7:00", assigned: "Prakash" },
    { id: 4, description: "Sleep at 8:30", assigned: "Udhaya" },
  ]);

  const addToDo = (description: string, assigned: string) => {
    console.log("->addToDO");
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].id + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      id: rowNumber,
      description: description,
      assigned: assigned,
    };
    setTodos((todos) => [...todos, newTodo]);
    setShowAddNew(false);
    setIsEdit(false);

    console.log(todos);
  };

  const updateToDo = (id: number, description: string, assigned: string) => {
    console.log("->updateToDo");
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          // If the todo has the matching id, update the description and assigned values
          return {
            ...todo,
            description: description,
            assigned: assigned,
          };
        }
        return todo; // For other todos, keep them unchanged
      });
    });
    setShowAddNew(false);
    setIsEdit(false);
    //console.log(todos);
  };

  const deleteToDo = (id: number) => {
    let filtered = todos.filter(function (value) {
      return value.id !== id;
    });
    setTodos(filtered);
  };

  const [editRecordId, setEditRecordId] = useState(0);

  const editToDo = (id: number) => {
    setShowAddNew(true);
    setIsEdit(true);
    setEditRecordId(id);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          <h3>My TO-DOs</h3>
        </div>
        <div className="card-body">
          <ToDoTable
            todos={todos}
            deleteToDo={deleteToDo}
            editToDo={editToDo}
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              setShowAddNew(!showAddNew);
              setIsEdit(false);
            }}
          >
            {!showAddNew ? "New ToDo" : "Close"}
          </button>
          {showAddNew && (
            <NewToDoForm
              addToDo={addToDo}
              updateToDo={updateToDo}
              isEdit={isEdit}
              id={editRecordId}
              description={
                todos.find((todo) => todo.id === editRecordId)?.description ??
                ""
              }
              assigned={
                todos.find((todo) => todo.id === editRecordId)?.assigned ?? ""
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}
