import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

const TodoList = () => {
  const TodoListData = [
    {
      Name: "Dishes",
      Completed: false,
      Id: 0,
    },
    {
      Name: "Trash",
      Completed: true,
      Id: 1,
    },
    {
      Name: "Laundry",
      Completed: false,
      Id: 2,
    },
  ];

  return (
    <div className="container">
      <h1>Welcome to the todo list!</h1>
      <div className="TodoListContainer">
        <ul>
          {TodoListData.map((TodoListItem) => (
            <TodoItem TodoListItem={TodoListItem} key={TodoListItem.Id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
