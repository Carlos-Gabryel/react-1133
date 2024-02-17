import React, { useRef, useState } from "react";

export function CounterWithRef() {
  const counterRef = useRef(0);
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    counterRef.current += 1;
    setCounter(counterRef.current);
  };

  const decrementCounter = () => {
    counterRef.current -= 1;
    setCounter(counterRef.current);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
}
