import { useState } from "react";
import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onModify, onDelete }) => {
  const onInputChange = (e) => {
    onModify(id);
  };

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onInputChange} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
