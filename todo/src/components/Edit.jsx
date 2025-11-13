import { useContext } from "react";
import { todoContext } from "../App";
import { useRef } from "react";
import { useState } from "react";

const Edit = () => {
    const {todos, setTodos} = useContext(todoContext);
    const inputRef = useRef(0);
    const[content, setContent] = useState("");


    const  onChangeHandle = (e) => {
        setContent(e.target.value);
    }

    const keyDownHandle = (e) => {
        if(e.key === "Enter") {
            todoHandle();
        }
    }

    const todoHandle = () => {
        if(content.trim() === ""){
            alert("할 일을 입력해주세요")
            return
        }


        const newTodo = {
            id: inputRef.current++,
            text: content,
            complete: false
        }
        setTodos([...todos, newTodo])
        setContent("");

    }



    return(
        <div className="input-area">
            <input type="text" onKeyDown={keyDownHandle} value={content} onChange={onChangeHandle} placeholder="오늘의 할일을 입력해주세요" />
            <button onClick={todoHandle}>추가</button >
        </div>

    )
}

export default Edit;