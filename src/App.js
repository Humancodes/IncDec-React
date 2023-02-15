import React ,{useState} from "react";
import "./index.css"


function App() {
  const [count,setCount] = useState(0);

  function increment() {
      setCount(count+1);
  }
  function decrement() {
    setCount(count-1)

  }
  return (
    <>
        <div className="Box">
        <div className="count">{count}</div>
        <button onClick={increment} className="button">+</button>
        <button onClick={decrement} className="button">-</button>
        </div>
        
    </>
  )
}

export default App;
