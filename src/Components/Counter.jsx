import React from "react";
import "./Counter.css"
const Counter = () =>{
    const [count,setCount] = React.useState(1);

    function add(){
       setCount(count + 1);
    }
    function sub(){
        setCount(count - 1);
     }
     function mul(){
        setCount(count * 2)
    }
   


   return ( 
       <div className="main">
      <div><h1>Counter:{count} </h1></div>
      <button onClick={add} >ADD</button>
      <button onClick={sub} >SUB</button>
      <button onClick={mul}>MUL</button>
       </div>
   )

}


export {Counter}