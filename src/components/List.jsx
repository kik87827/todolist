import { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterItems = () => {
    const filterItem = todos.filter(({ content }) =>
      content.toLowerCase().includes(search.toLowerCase()),
    );
    return filterItem.length || search === "" ? filterItem : todos;
  };

  const getFilterItems = filterItems();

  return (
    <section className="List">
      <h4>Todo List 🌱</h4>
      <input
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {getFilterItems.map((todo, index) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </section>
  );
};

export default List;
