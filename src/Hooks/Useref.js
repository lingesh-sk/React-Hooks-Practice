import React, { useEffect, useRef, useState } from 'react'

export default function Useref() {

    const [count,setCount] = useState(0)

    const userefHook = useRef(0)

    console.log("Page renders")

    let Reference =useRef(null) ;
    console.log(Reference)

    useEffect(()=>{
        Reference.current.focus()
    },[])

    const [name,setName]= useState("")

  return (
    <div>

        <h1>Useref Hook</h1>

        <h2>Usecase -1 : Save data without render (No render)</h2>

        <button onClick={()=>setCount(count+5)}>Add</button>

         <h3>Using useState hook {count}</h3> 

        <button onClick={()=>{userefHook.current++}}>Add</button>

        <h3>Using useState hook {userefHook.current}</h3>

        <h2>Usecase -2 : Dom Access</h2>

        <input type="text" ref={Reference} onChange={(e)=>setName(e.target.value)} value={name}/>
        <button onClick={()=>setName("")}>Reset</button>
        <button onClick={()=>Reference.current.style.color='green'}>Change color</button>



    </div>
  )
}
