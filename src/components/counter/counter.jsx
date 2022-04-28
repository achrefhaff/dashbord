import React,{useState} from 'react'
import"./counter.css"
export default function Counter() {
    const [counter, setCounter] = useState(0);
 const countt =() =>{
   return(counter)
 }
    //increase counter
    const increase = () => {
      setCounter(count => count + 1);
    };
   
    //decrease counter
    const decrease = () => {
      if(counter > 0){
      setCounter(count => count - 1);
    }
    else {
      setCounter(0)
    }
    };
   
    //reset counter 
    const reset = () =>{
      setCounter(0)
    }
   
    return (
      <div className="counter">
        <span className="counter__output">{counter}</span>
        <div className="btn__container">
          <button className="control__btnp" onClick={increase}>+</button>
          <button className="control__btnm" onClick={decrease}>-</button>
          
        </div>
      </div>
      
    );
  }

