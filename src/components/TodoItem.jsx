import "./TodoItem.css";

const TodoItem = ({dataItem}) => {
  return (
    <div className="TodoItem">
      <input type="checkbox" />
      <div className="content">{dataItem.content}</div>
      <div className="date">{dataItem.date}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
