import { useRef, useState } from "react";
import "./Editor.css";

const Editor = ({ onCreate }) => {
  const [inputData, setInputData] = useState("");
  const contentRef = useRef(null);

  const onChangeContent = (e) => {
    setInputData(e.target.value);
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (inputData === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(inputData);
    setInputData("");
  };
  return (
    <section className="Editor">
      <input
        placeholder="새로운 Todo..."
        value={inputData}
        onKeyDown={onKeydown}
        onChange={onChangeContent}
        ref={contentRef}
      />
      <button onClick={onSubmit}>추가</button>
    </section>
  );
};

export default Editor;
