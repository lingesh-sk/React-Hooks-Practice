import React, { useState } from "react";

function Usestate() {
  // Numbers

  const [number, setNumber] = useState(0);

  // String
  const [text, setText] = useState("");

  const [hardText, setHardText] = useState("John");

  const [addClick,setAddclick]= useState([])

  // Boolean

  const [show, setShow] = useState(true);

  //   Object

  const [name, setName] = useState({ fname: "", lname: "" });

  // Array

  const [arrdetail, setArrDetails] = useState([
    {
      teamName: "CSK",
      teamSize: 15,
      teamDetails: [
        {
          owner: "Indian cements",
          strength: 92,
        },
      ],
    },
    {
      teamName: "MI",
      teamSize: 18,
      teamDetails: [{ owner: "Reliance", strength: 95 }],
    },
    {
      teamName: "RCB",
      teamSize: 19,
      teamDetails: [
        {
          owner: "Kingfisher Airlines",
          strength: 92,
        },
      ],
    },
  ]);

  return (
    <>
      <h3>Numbers with Usestate</h3>
      <button onClick={() => setNumber(number + 1)}>Add</button>
      <button onClick={() => setNumber(number - 1)}>Sub</button>
      <button onClick={() => setNumber(0)}>Reset</button>
      <h1>{number}</h1>
      <hr />
      <h3>String with Usestate</h3>
      <input type="text" onChange={(e) => setText(e.target.value)} /> <button onClick={()=>{
        setAddclick([...addClick,text])
        
      }}>Add</button>
      <h1>{text}</h1>
      {
        addClick.map((add)=>{return <h1>{add}</h1>})
      }

      <button onClick={() => setHardText("Wick")}>Change name</button>
      <h2>{hardText}</h2>
      <hr />
      <h3>Boolean with Usestate</h3>
      {/* <button onClick={()=>setShow(!show)}>Click to show</button> */}
      <button onClick={() => setShow((prev) => !prev)}>Click to show</button>
      {show === true && <h1>Boolean with Usestate</h1>}
      <h4>{` Current value of state is ${show}`}</h4>
      <hr />
      <h3>Object with Usestate</h3>
      {JSON.stringify(name)} <br /> <br />
      <input
        type="text"
        onChange={(e) => setName({ ...name, fname: e.target.value })}
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(e) => setName({ ...name, lname: e.target.value })}
      />
      <h1>
        {name.fname} + {name.lname} = {name.fname + name.lname} is an premium
        car brand
      </h1>
      <hr/>
      <h3>Array with Usestate</h3>
      {arrdetail.map((val, i) => (
        <div>
          <h1 key={i}>{val.teamName}</h1>
          <h1 key={i}>{val.teamSize}</h1>
        </div>
      ))}
      {arrdetail.map((val, i) => (
        <h1 key={i}>
          {val.teamDetails.map((nestedArr, j) => (
            <div>
              <h3 key={j}>{nestedArr.owner}</h3>
              <h5>{nestedArr.strength}</h5>
            </div>
          ))}
        </h1>
      ))}

      <button ></button>
    </>
  );
}
export default Usestate;
