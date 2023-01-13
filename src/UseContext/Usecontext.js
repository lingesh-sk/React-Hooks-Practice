import React, { createContext, useState } from "react";
import ChildA from "./childA";


export const data1 = createContext();
export const data2 = createContext();
export const AppContext = createContext("");


function Usecontext() {

    const [user, setUser] = useState("Apple");
    const name = "james";
    const gender = "male";
  return (
    <div>
         <AppContext.Provider value={{ user, setUser }}>
        <data1.Provider value={name}>
          <data2.Provider value={gender}>
            <ChildA/>
          </data2.Provider>
        </data1.Provider>
      </AppContext.Provider>
    </div>
  )
}

export default Usecontext