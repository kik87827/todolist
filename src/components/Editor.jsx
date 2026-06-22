import { useRef, useState } from "react";
import "./Editor.css";

const Editor = ({ onCreate }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };
  const onSubmit = (e) => {
    inputRef.current.focus();
    if (input === "") {
      return;
    }

    onCreate(input);
    setInput("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <section className="Editor">
      <input
        placeholder="새로운 Todo..."
        value={input}
        onChange={onChangeInput}
        ref={inputRef}
        onKeyDown={onKeyDown}
      />
      <button onClick={onSubmit}>추가</button>
    </section>
  );
};

export default Editor;
