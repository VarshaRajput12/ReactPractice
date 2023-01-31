import React from 'react'
import { sum, multiply, division } from './JsCode'

function Calculations() {
  return (
    <>
        <ul>
            <li>{`Sum of two numbers => ${sum(2, 8)}`} </li>
            <li>{`multiply of two numbers => ${multiply(2, 8)}`} </li>
            <li>{`division of two numbers => ${division(65, 8)}`} </li>
        </ul>
    </>
  )
}

export default Calculations