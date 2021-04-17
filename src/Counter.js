import React, { useState } from 'react'

export default function Counter({ appName, initialValue }) {
  const [counter, setCounter] = useState(initialValue);
  const [userInput, setUserInput] = useState(0);
  const [counterName, setCounterName] = useState(appName);
  return (
  <>
    <input onChange={(e) => setCounterName(e.target.value)}></input>
    <h1>{counterName}</h1>
    <h2>{counter}</h2>
    <input
    onChange={(e) => setUserInput(Number(e.target.value))}></input> <br />
    <button onClick={() => setCounter((prevState) => prevState + userInput)}>Increment by {userInput}</button>
    {counter <= 0 ? '' : 
    <button onClick={() => setCounter((prevState) => 
    prevState - userInput)}>Decrement by {userInput}</button>}
    <button onClick={() => setCounter(0)}>Reset</button><br />
    </>
  );
}
