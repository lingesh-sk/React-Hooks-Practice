import React, { useContext } from 'react'
import ChildC from './childC'
import { data1, data2 } from './Usecontext'

function ChildB() {
    const n = useContext(data1)
    const g = useContext(data2)

  return (
    <div>
        <h1>This is {n} and my gender is {g}</h1>
        <ChildC/>
    </div>
  )
}

export default ChildB