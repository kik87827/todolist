import { useState } from "react";
import "./TodoItem.css";

const TodoItem = ({ id, content, isDone, date, onDelete, onModify }) => {
  const onChangeCheck = (e) => {
    onModify(id);
  };
  const onDeleteEvent = (e) => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <input checked={isDone} onChange={onChangeCheck} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onDeleteEvent}>삭제</button>
    </div>
  );
};

export default TodoItem;
