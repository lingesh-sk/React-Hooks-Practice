import React, { useContext } from "react";
import { AppContext } from "./Usecontext";

function ChildC() {
  const { user, setUser } = useContext(AppContext);
  return (
    <div>
      <h1>This is {user}</h1>
      {/* <button onClick={()=>{setUser("Grapes")}}>Click here to change name</button> */}
      <input
        type="text"
        style={{ backgroundColor: "powderblue", padding: "10px" }}
        placeholder="Enter any Fruit name"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
    </div>
  );
}

export default ChildC;
