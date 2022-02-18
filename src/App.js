import React, { useState } from 'react';

const App=()=>{
  const [name,setName] = useState("I'm Learning React")
    return(
        <div>
            <center>
                <h1>Hello World</h1>
                <p> Instrested on {name}</p>
                <button onClick={()=>setName("I'm Learning Angular")}> CHANGE </button>
            </center>
        </div>
    )
}
export default App