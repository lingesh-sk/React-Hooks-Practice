import React, { useCallback, useState } from "react";
import Arraylist from "./Arraylist";

function UseCallback() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);

  const addTodo = useCallback(() => {
    setTodo((prev) => [...prev, Math.floor(Math.random() * 1000)])
  }, [todo]);

  return (
    <div>
      <h1>UseCallback</h1>
      <Arraylist todo={todo} addTodo={addTodo} />
      <h2>Count is = {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}

export default UseCallback;
