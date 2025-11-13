import { useState, useContext, useEffect } from "react";
import { todoContext } from "../App";

const Footer = () => {
  const { todos, setTodos } = useContext(todoContext);



  // todos가 바뀔 때 원본을 항상 갱신


  // 전체 체크/해제 토글
  const activehandle = () => {
    const toggleTodo = todos.some((todo) => !todo.complete);
    const activeTodo = todos.map((todo) => ({
      ...todo,
      complete: toggleTodo,
    }));
    setTodos(activeTodo);
  };

  // 전체 삭제
  const allClearHandle = () => {
    setTodos([]);

  };

  // 완료 필터 토글
  const filterChecked = () => {
    const checkTodo = todos.filter((todo) => todo.complete)
    setTodos(checkTodo)
  };

  return (
    <div className="footer">
      <p onClick={activehandle}>active</p>
      <p onClick={allClearHandle}>all clear</p>
      <p onClick={filterChecked}>complete</p>
    </div>
  );
};

export default Footer;
