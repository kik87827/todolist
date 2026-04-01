import { useEffect, useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos, onDelete, onModify }) => {
  return (
    <section className="List">
      <h4>Todo List 🌱</h4>
      <input placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onDelete={onDelete}
            onModify={onModify}
          />
        ))}
      </div>
    </section>
  );
};

export default List;
