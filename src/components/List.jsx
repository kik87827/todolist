import "./List.css";
import TodoItem from "./TodoItem";

const List = () => {
  return (
    <section className="List">
      <h4>Todo List 🌱</h4>
      <input placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </section>
  );
};

export default List;
