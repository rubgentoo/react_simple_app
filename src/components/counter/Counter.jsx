import React, {useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    if(count > 15 ) return;
    setCount(count =>  count + 1);
  };

  const decrement = () => {
    if(count === 0 ) return;
    setCount(count => count - 1);
  }
  return (
    <>
    {
      count >= 10 && <h1>Counter is too high!!!</h1>
    }
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default Counter