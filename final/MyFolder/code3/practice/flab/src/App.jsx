import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// we cannot use useState inside the classes we only use inside the function component

function App() {
  // const [count, setCount] = useState(1)
  const [count, setCount] = useState(()=>{return 1})

  function decrementCount(){
    // setCount(count-1)   it is not correct way
    setCount(prevCount => prevCount -1)
  }
  function incrementCount(){
    setCount(prevCount => prevCount +1)
  }

  return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App
