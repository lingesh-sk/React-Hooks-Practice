import React, { useReducer } from 'react'

function UseReducer() {

    const initialState = 2000

    function transactionReducer(state,action){
        switch (action.type) {
            case "deposit":
            return state+ action.payload;
            case "withdraw":
            return state- action.payload
            case "reset":
            return 0
        
            default:
                return state;
        }
    }



    const [state,dispatch]= useReducer(transactionReducer,initialState)
  return (
    <div>
        <h1 style={{marginTop:"108px"}} >{`Account Balance is ${state}`}</h1>

        <button style={{margin:"18px"}} onClick={()=>dispatch({type:"deposit",payload:1000}) }>Deposit</button> 

        <button style={{margin:"18px"}}  onClick={()=>dispatch({type:"withdraw",payload:100})}>Withdraw</button> 

        <button style={{margin:"18px"}} onClick={()=>dispatch({type:"reset",payload:0})}>Reset</button>
        
    </div>
  )
}

export default UseReducer