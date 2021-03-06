import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBSmoothScroll,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFormInline,
  MDBAnimation,
} from "mdbreact";
import "../index.css";
import Pills from "./pills";
import YouTubeTutorial from "./youtube";
import { useHistory } from "react-router-dom";

function ClassicFormPage() {
  //   state = {
  //     collapseID: ""
  //   };

  //   toggleCollapse = collapseID => () =>
  //     this.setState(prevState => ({
  //       collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  //     }));

  //   render() {
  //     const overlay = (
  //       <div
  //         id="sidenav-overlay"
  //         style={{ backgroundColor: "transparent" }}
  //         onClick={this.toggleCollapse("navbarCollapse")}
  //       />
  //     );
  const history = useHistory();
  return (
    <div id="classicformpage">
      <MDBView>
        <MDBMask className="d-flex justify-content-center align-items-center gradient">
          <MDBContainer>
            <MDBRow>
              <MDBAnimation className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                <h1 className="h1-responsive font-weight-bold">
                  Welcome to SOTT Lab
                </h1>
                <hr className="hr-light" />
                <h6 className="mb-4">Get started below!</h6>
              </MDBAnimation>
            </MDBRow>

            <MDBRow>
              <MDBSmoothScroll to="section1">
                <MDBBtn outline color="light">
                  History Lab Tutorial
                </MDBBtn>
              </MDBSmoothScroll>

              <MDBSmoothScroll to="section2">
                <MDBBtn outline color="light">
                  Science Lab Tutorial
                </MDBBtn>
              </MDBSmoothScroll>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>
      <br></br>
      <br></br>
      <div id="section1">
        <h1 style={{ textAlign: "center" }}>History Lab Tutorial</h1>
        <Pills />
      </div>
      <br></br>
      <img src={require("../assets/sciencelab.jpg")}/>
      <br></br>
      <div id="section2">
        <br></br>
        <h1 style={{ textAlign: "center" }}>Science Lab Tutorial Coming Soon!</h1>
        <br></br>
        <Pills />
      </div>
    </div>
  );
}

export default ClassicFormPage;
