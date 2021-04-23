import React from "react";
import HeaderCard from "../HeaderCard";

const todos = [
  { completed: false, text: "We don't pitch" },
  { completed: false, text: "We don't pitch" },
  { completed: false, text: "We don't pitch" },
  { completed: false, text: "We don't pitch" },
  { completed: false, text: "We don't pitch" },
  { completed: false, text: "We don't pitch" },
  { completed: false, text: "We don't pitch" },
  { completed: false, text: "We don't pitch" },
  { completed: false, text: "We don't pitch" },
];

const TodoListItem = ({ todo }) => {
  return (
    <div className="todo-item">
      <input type="radio" />
      <span className="text">{todo.text}</span>
    </div>
  );
};

const TodoList = () => {
  return (
    <div>
      {todos.map((todo) => {
        return <TodoListItem todo={todo} />;
      })}
    </div>
  );
};

const RemindersCard = () => {
  return (
    <HeaderCard className="reminders-card" header="Reminders">
      <div className="header">
        <h2 className="title">Commandments</h2>
        <div className="counter">10</div>
      </div>
      <TodoList />
    </HeaderCard>
  );
};

export default RemindersCard;
