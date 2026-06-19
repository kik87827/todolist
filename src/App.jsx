import { useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

function App() {
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

  return (
    <div className="App">
      <Header />
      <Editor  onCreate={onCreate} />
      <List todos={todos} />
    </div>
  );
}

export default App;
