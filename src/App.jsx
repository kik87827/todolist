import { useReducer, useRef, useState } from "react";
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
  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(Number(mockData.length));

  const reducer = (state, { type, data }) => {
    switch (type) {
      case "CREATE":
        return [data, ...state];
      case "UPDATE":
        return state.map((todo) =>
          todo.id === data ? { ...todo, isDone: !todo.isDone } : state,
        );
      case "DELETE":
        return state.filter((item) => item.id !== data);
      default:
        return state;
    }
  };

  const onCreate = (content) => {
    /* const newTodos = [
      {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      },
      ...todos,
    ];

    setTodos(newTodos); */
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    });
  };

  const onModify = (targetId) => {
    /* const modifyTodos = todos.map((item) => {
      if (targetId == item.id) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      }
    }); */
    /* const modifyTodos = todos.map((todo) =>
      todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo,
    );
    setTodos(modifyTodos); */
    dispatch({
      type: "UPDATE",
      data: targetId,
    });
  };

  const onDelete = (targetId) => {
    /* const filteredTodos = todos.filter((item) => item.id !== targetId);
    setTodos(filteredTodos); */
    dispatch({
      type: "DELETE",
      data: targetId,
    });
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onModify={onModify} onDelete={onDelete} />
    </div>
  );
}

export default App;
