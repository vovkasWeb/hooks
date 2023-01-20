import { useState } from "react";
import './App.css';

const App= ()=>{

const dublAddValue=i=>{
	setNumber(number=>number * number);
}
const dublDelValue=i=>{
	setNumber(number=>number / number);
}
const rundlValue=()=>{
	setNumber(number=> Math.random()*(50-1)+1);
}
const resetValue=()=>{
	setNumber(number=>2);
}
	const [number,setNumber] = useState(2);
  return (
    <div className="App">
      <h1>{number}</h1>
		<div>
			<button onClick={()=>dublAddValue(number)}>int</button>
			<button onClick={()=>dublDelValue(number)}>dec</button>
			<button onClick={()=>rundlValue()}>run</button>
			<button onClick={()=>resetValue()}>reset</button>
		</div>
    </div>
  );
}

export default App;
