
import React from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  return (
    <div style={{backgroundColor:'#a2ec0b',padding:'1rem'}} className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
      <p>{inputValue}</p>
      <Child setValue={setInputValue} value={inputValue}/>
    </div>
  )
}

export default App
