import { useRef, useState } from "react";
import "./Editor.css";

<<<<<<< HEAD
const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef(null);
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <section className="Editor">
      <input
        ref={inputRef}
        placeholder="새로운 Todo..."
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
      />
=======
const Editor = ({onCreate}) => {
  const [input,setInput] = useState("");
  const inputRef = useRef(null);
  const onChangeInput = (e) => {
    setInput(e.target.value);
  }
  const onSubmit = (e) => {
    
    inputRef.current.focus();
    if(input === ''){
      return;
    }
    
    
    onCreate(input);
    setInput('');
  }

  const onKeyDown = (e) => {
    if(e.keyCode === 13){
        onSubmit()
      }
  }

  return (
    <section className="Editor">
      <input placeholder="새로운 Todo..." value={input} onChange={onChangeInput} ref={inputRef} onKeyDown={onKeyDown} />
>>>>>>> 306de8c576d62e4aa32b1c43a764e01cf897808c
      <button onClick={onSubmit}>추가</button>
    </section>
  );
};

export default Editor;
