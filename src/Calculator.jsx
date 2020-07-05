import React from 'react'
import {add, sub,mul, div } from "./Calc";

function calculator() {   
    return(
        <>
        <ul>
            <li>addition is {add(12, 2)}</li>
            <li>sub is {sub(12, 2)}</li>
            <li>multiply is {mul(12, 2)}</li>
            <li>division is {div(12, 2)}</li>
        </ul>
        </>
    );
}

export default calculator;