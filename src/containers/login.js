import React, { useState } from 'react';
const axios = require('axios');

// todos: add register button that calls createEntry endpoint and check against mongodb

function Login(props){
   const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
// Array Destructuring:
//    const start = useState("");
//    const username = start[0];
//    const setUsername = start[1];


   return (
    <div><p>"This is the login screen!"</p>
    <input value={username} name={"username"} onChange={(event) => {
        console.log(event.target.value)
        console.log(event.target.name)
        setUsername(event.target.value)
    }}>

    </input>
    <input value={password} name={"password"} onChange={(event) => { 
        console.log(event.target.value)
        console.log(event.target.name)
        setPassword(event.target.value)
    }}>
        
    </input>
    <button onClick={async () =>{
        const result = await axios.default.post("http://localhost:3000/login",
        {username, password})
        console.log(result.data)
        sessionStorage.setItem("token", result.data)
        const token = sessionStorage.getItem("token")
        console.log(token)
    }}>Submit</button>
    <button onClick={async () => {
       var token = sessionStorage.getItem("token")
       var result = await axios.default.get("http://localhost:3000/", {
           headers: {authorization:token}
       })
       console.log(result.status);
    }}>Make Request</button>
    </div>
   );
}

export default Login;