import { useContext } from "react";
import { todoContext } from "../App";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = () => {

    const [search, setSearch] = useState("");

  const { todos } = useContext(todoContext);



  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

const todoFilter = search.trim() === "" ? todos :
todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="List">
      <input type="text" placeholder="검색어를 입력해주세요" onChange={onChangeSearch} value={search} />
      <ul className="todo-list">
        {todoFilter.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default List;


