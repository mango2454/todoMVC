import { useContext } from "react";
import { todoContext } from "../App";
import { useState } from "react";

const TodoItem = ({ id, text, complete }) => {

    const [isEditing, setIsEditing] = useState(false);
    const[eaditingText, setEditingText] = useState(text);



    const {todos, setTodos} = useContext(todoContext);  
const deleltHandle = () => {
    const newTodos = todos.filter((todo) => todo.id != id)
    setTodos(newTodos)
}

const onChangeCheckbox = () => {
    const newTodos = todos.map((todo) => 
        //todo와 todocoplete를 복사 todo.id와 id가 맞으면
        //복사한 컴플리트에서todo complete를 반대로 변환
        todo.id === id ? {...todo, complete : !todo.complete}: todo)
    setTodos(newTodos)
}

const doubleClickHandle = () => {
    setIsEditing(true)
}

const onChangeText = (e) => {
    setEditingText(e.target.value);
}

const keyDownHandle = (e) => {
    if(e.key === "Enter") {
        saveText();
    }


}

const saveText = () => {
    if(eaditingText.trim() ==="") {
        alert("할 일을 입력해주세요")
        return
    }


const newTodos = todos.map((todo) =>
  todo.id === id ? { ...todo, text: eaditingText } : todo
);
    setTodos(newTodos)
    setIsEditing(false)
}


  return (
    <li className="todo-item">
      {/* 체크박스는 단순 표시용, 기능 없음 */}
      <input type="checkbox" onClick={onChangeCheckbox} checked={complete} readOnly />
      
      {isEditing ? (
        <input type="text" 
        value={eaditingText} 
        onChange={onChangeText}
        onKeyDown={keyDownHandle}
        onBlur={saveText}
        />
      ): (
        <span onDoubleClick={doubleClickHandle}  className={complete ? "completed" : ""}>{text}</span>
      )}
      
      <button className="delete-btn" onClick={deleltHandle}>삭제</button>
    </li>
  );
};

export default TodoItem;
