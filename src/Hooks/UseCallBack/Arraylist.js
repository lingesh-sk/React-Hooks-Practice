import React, { memo } from "react";

function Arraylist({ todo, addTodo }) {

    console.log("Todo Component rendered")
  return (
    <div>
        <h2>Array List</h2>
      {(todo.length) ? (
        <div>
          {todo.map((n, index) => {
            return <h4 key={index}>{n}</h4>;
          })}
         
        </div>
      ) : (
        <div>Array List is empty</div>
      )}

      <button onClick={addTodo}>Add element</button>
    </div>
  );
}

export default memo(Arraylist);
