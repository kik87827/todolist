import { useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

const sampleData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래연습하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(sampleData);
  const idRef = useRef(todos.length);

  const onCreate = (content) => {
    const pushTodos = [
      {
        id: idRef.current++,
        content: content,
        isDone: false,
        date: new Date().getTime(),
      },
      ...todos,
    ];
    setTodos(pushTodos);
  };

  const onDelete = (id) => {
    const updateItems = todos.filter((item) => item.id !== id);
    setTodos(updateItems);
  };

  const onModify = (id) => {
    const updateItems = todos.map((item) => {
      return item.id === id ? { ...item, isDone: !item.isDone } : item;
    });
    setTodos(updateItems);
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onDelete={onDelete} onModify={onModify} />
    </div>
  );
}

export default App;
