import React, { useState } from 'react';
import '../App.css';
import { CircularProgress } from '@material-ui/core';
import instance from '../util/axiosutil';


// todos: add register button that calls createEntry endpoint and check against mongodb

function Login(props){
   const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
// Array Destructuring:
//    const start = useState("");
//    const username = start[0];
//    const setUsername = start[1];


   return (
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    width: '35%',
    marginLeft: 'auto',
    marginRight: 'auto'
      }}>
    <p style={
        {
            fontSize: 40,
            fontWeight: 300,
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    }>Log In Below</p>
    <input style= {{
        padding: '5px'
    }} 
    value={username} 
    name={"username"} 
    placeholder="Username" 
    onChange={(event) => {
        console.log(event.target.value)
        console.log(event.target.name)
        setUsername(event.target.value)
    }}>

    </input>
   
    <input 
    style= {{
        padding: '5px',
    }}
    type="password" 
    value={password} 
    name={"password"} 
    placeholder="Password" 
    onChange={(event) => { 
        console.log(event.target.value)
        console.log(event.target.name)
        setPassword(event.target.value)
    }}>
        
    </input>
    <br></br>
    <div style={
        {
            display: 'flex',
            flexDirection: 'column',
            width: '150px',
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    }><button 
    type="submit"
    style= {{padding: '5px'}}
    onClick={async () =>{
        const result = await instance.post("/login",
        {username, password})
        console.log(result.data)
        sessionStorage.setItem("token", result.data)
        const token = sessionStorage.getItem("token")
        console.log(token)
    }}>Submit</button>
    
    <button 
    style= {{padding: '5px'}}
    onClick={async () => {
        // Question for Brian: how to access the actual token?
       var token = sessionStorage.getItem("token")
       var result = await instance.get("/", {
           headers: {authorization:token}
       })
       console.log(result.status);
    }}>Make Request</button>
    </div>
    </div>
   );
}

export default Login;