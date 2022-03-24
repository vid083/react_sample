import React, {useState} from 'react';

const App = () => {
    const [user,setUser] = useState("");
    const handler = e => { 
        setUser(e.target.value)
    }
  return (
    <div>
        <input type='text' value={user} onChange={handler}/>
        <h2>{user}</h2>
    </div>
  )
}

export default App