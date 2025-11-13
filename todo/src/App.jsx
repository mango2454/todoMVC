import { useState, createContext } from "react";
import Header from "./components/header";
import Edit from "./components/Edit";
import List from "./components/List";
import "./App.css";

// ✅ Context 생성
export const todoContext = createContext();

export default function App() {
  // ✅ todos를 state로 관리
  const [todos, setTodos] = useState([

  ]);

  return (
    <todoContext.Provider value={{ todos, setTodos }}>
      <div className="container">
        <Header />
        <Edit />
        <List />
      </div>
    </todoContext.Provider>
  );
}
