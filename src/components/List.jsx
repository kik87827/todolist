import "./List.css";
import TodoItem from "./TodoItem";

const List = ({todos}) => {
  console.log(todos);
  return (
    <section className="List">
      <h4>Todo List 🌱</h4>
      <input placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        {
          todos.map((dataItem,index) => <TodoItem key={dataItem.id} dataItem={dataItem} />)
        }
      </div>
    </section>
  );
};

export default List;
