import axios from "axios";
import React, { useEffect, useState } from "react";

function Useeffect(){

    const [counter1,setCounter1] = useState(0);
    const [counter2,setCounter2] = useState(0);
    const [user,setUser]=useState([])

    // USEEEFECT

    // Type-1 Excutes on render and state changes

    useEffect(()=>{
        // console.log("Type-1 Excutes on each render and state changes")

    })

    // Type-2 Excutes on initial render

    useEffect(()=>{
        console.log("Type-2 Excutes on initial render only")

    },[])

    // Type-3 Excutes render on particular state in dependency

    useEffect(()=>{
        console.log(" Type-3 Excutes render on particular state in dependency")

    },[counter2])

    // Type-4 Cleanup

    useEffect(()=>{
       let interval = setInterval(()=>console.log("Hi"),3000)
       return ()=>{
        
        clearInterval(interval)
       }

    },[user])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(res=>setUser(res))
    })

    useEffect(()=>{
      
        axios.get("https://jsonplaceholder.typicode.com/todo").then(res=>setUser(res.data))
    })


    return(
        <div>

            <button onClick={()=>setCounter1(counter1+1)}>Increment by 1</button>
            <button onClick={()=>setCounter2(counter2+2)}>Increment by 2</button>

            <h1>{counter1}</h1>
            <h1>{counter2}</h1>

            

            <h1>TOTAL = {counter1}+{counter2} = {counter1+counter2}</h1>

            <h2>{user.map((data)=>(<div>
               <h2>{data.id}</h2> 
              <h3> {data.username}</h3>
               <h4>{data.email}</h4>
               <h5> {data.phone}</h5>

               <h6>{}</h6>
                
                
            </div>))}</h2>


        </div>
    )
}

export default Useeffect;