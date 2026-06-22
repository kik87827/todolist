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
<<<<<<< HEAD
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
=======
  const mockData = [
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
      content: "노래 연습하기",
      date: new Date().getTime(),
    },
  ];
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(Number(mockData.length))

  const onCreate = (content) => {
    const newTodos = [{
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    },...todos];

    setTodos(newTodos);
  }
>>>>>>> 306de8c576d62e4aa32b1c43a764e01cf897808c

  return (
    <div className="App">
      <Header />
<<<<<<< HEAD
      <Editor onCreate={onCreate} />
      <List todos={todos} onDelete={onDelete} onModify={onModify} />
=======
      <Editor  onCreate={onCreate} />
      <List todos={todos} />
>>>>>>> 306de8c576d62e4aa32b1c43a764e01cf897808c
    </div>
  );
}

export default App;
