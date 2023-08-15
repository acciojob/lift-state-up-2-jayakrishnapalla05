import React from 'react';


const Child=({setValue,value})=>{

 return(
    <>
    <div style={{backgroundColor:'coral',padding:'1rem'}} className='child'>
        <h2>Child Component</h2>
        <input type="text" onChange={(e)=>setValue(e.target.value)} value={value}/>
    </div>
    </>
 )
}

export default Child;