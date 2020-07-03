import React from "react";
import "./TodoItem.scss";

function TodoItem(props) {
  const { title, id, createdAt, content } = props.todo;

  return (
    <div className="todo-item">
      <div className="heading-box">
        <h2>{title}</h2>
        <span>{createdAt.toDateString()}</span>
      </div>
      <p className="content">{content}</p>
      <div className="operation-todo">
        <button className="edit"><i class="fal fa-edit"></i></button>
        <button className="delete"><i class="fal fa-trash-alt"></i></button>
      </div>
    </div>
  );
}

export default TodoItem;
