import React, { useMemo, useState } from "react";

function Usememo() {
  const [counter, setCounter] = useState(0);
  const result = useMemo(() => {
    return factorial(counter);
  }, [counter]);
  const [inputs, setInputs] = useState("");

  function factorial(num) {
    let i = 0;
    while (i < 100000000) i++;
    if (num < 0) {
      return -1;
    }
    if (num === 0) {
      return 1;
    }
    return num * factorial(num - 1);
  }
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>ADD</button>
      <h1>
        Factorial of {counter} is {result}
      </h1>
      <button onClick={() => setCounter(counter - 1)}>SUB</button>
      <br />
      <input
        type="text"
        value={inputs}
        onChange={(e) => setInputs(e.target.value)}
      />
      <h1>value of input of is {inputs}</h1>
    </div>
  );
}

export default Usememo;
