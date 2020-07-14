import React, { useState } from "react";
import "../App.css";
import instance from "../util/axiosutil";
import { hasToken } from "../util/tokenutil";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../context/auth-context";
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
// import history from '../util/historyutil';
import {
    useHistory
  } from "react-router-dom";
// todos: add register button that calls createEntry endpoint and check against mongodb

function Login(props) {
  const authContext = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  // Array Destructuring:
  //    const start = useState("");
  //    const username = start[0];
  //    const setUsername = start[1];
//   if (hasToken()) {
//     props.history.push("/data");
//   }

  return (
    <div>
      {/* <Container style={{width: '700px'}}> */}
        <Jumbotron
        style={{
          backgroundColor: "white",
          height: "400px",
          backgroundImage:
            "url(" +
            "http://wallpaperose.com/wp-content/uploads/2014/02/Lighthouse-Shining-over-Rough-Seas.jpg" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></Jumbotron>
      {/* </Container> */}
      {/* <Navbar fixed="top">
         <Navbar.Brand href="#home">
   <img
     src="https://www.sott.net/fb/sottlogo.jpg"
     width="150"
     height="80"
   />
  </Navbar.Brand>       
       </Navbar> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // paddingTop: '50px'
        }}
      >
        <p
          style={{
            fontSize: 60,
            fontWeight: 300,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Log In Below
        </p>
        <input
          style={{
            padding: "5px",
          }}
          value={username}
          name={"username"}
          placeholder="Username"
          onChange={(event) => {
            console.log(event.target.value);
            console.log(event.target.name);
            setUsername(event.target.value);
          }}
        ></input>
        <br></br>
        <input
          style={{
            padding: "5px",
          }}
          type="password"
          value={password}
          name={"password"}
          placeholder="Password"
          onChange={(event) => {
            console.log(event.target.value);
            console.log(event.target.name);
            setPassword(event.target.value);
          }}
        ></input>
        <br></br>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <button
            type="submit"
            style={{
              color: "white",
              padding: "5px",
              border: "none",
              borderRadius: "12px",
              backgroundColor: "#1E90FF",
            }}
            onClick={async () => {
              const result = await instance.post("/login", {
                username,
                password,
              });
              authContext.login(result.data);
              history.push('/data')
            }}
          >
            Submit
          </button>

          {/* <button 
    style= {{padding: '5px'}}
    onClick={async () => {
        // Question for Brian: how to access the actual token?
       var token = sessionStorage.getItem("token")
       var result = await instance.get("/", {
           headers: {authorization:token}
       })
       console.log(result.status);
    }}>Make Request</button> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
