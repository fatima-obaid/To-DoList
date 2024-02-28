
import { useRef, useState } from "react";
import "./App.css"
function App() {

  const[x ,setx] = useState([]);
  const inputRef = useRef();
  const add=()=>{
  const value = inputRef.current.value
  const newData= {completed : false , value}
 setx([...x, newData])
 inputRef.current.value = ""
}
const itemDone = (index) =>{
  const newx= [...x]
  x[index].completed = !x[index].completed 
  setx(newx)
}

const toDelete = (index) =>{
  const newx =[...x]
  newx.splice(index,1)
    setx(newx)
}
  return (
  
  <div  className="App">
   <h2>TO-DO List</h2>
   <input  ref={inputRef} placeholder="Add your task ..."  />
   <i class="fas fa-plus" onClick={add}></i>
   <ul>
     {
       x.map(({value,completed} , index) => {
       return <div className="delet">
        <li className={completed ? "diffstyle" : "d2" }   onClick={() => itemDone(index)}>{value}</li>
        <i  onClick={() => toDelete(index)}    class="fas fa-times"></i>
       </div>
       })
     }
   </ul>
   <div class="div6">
      <div class="div6-0"></div>
      <div class="div6-1"></div>
      <div class="div6-2"></div>
      <div class="div6-3"></div>
      <div class="div6-4"></div>
      <div class="div6-5"></div>
      <div class="div6-6"></div>
    </div>
    <div class="div7"></div>
  </div>
  );
}

export default App;
