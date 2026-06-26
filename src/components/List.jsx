import { useMemo, useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos, onModify, onDelete }) => {
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

  // 의존성 배열 : deps

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzedData 호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return { totalCount, doneCount, notDoneCount };
  }, [todos]);


  return (
    <section className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total : {totalCount}</div>
        <div>done : {doneCount}</div>
        <div>notDone : {notDoneCount}</div>
      </div>
      <input
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {getFilterItems.map((todo, index) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onModify={onModify}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
};

export default List;
