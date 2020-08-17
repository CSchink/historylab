import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from "mdbreact";
import { userSignUp } from "../connection";
import MultiSelect from "./multiselect";

const SignUp = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconfirm, setPasswordConfirm] = useState("")

  return (
    <MDBContainer>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Sign Up for SOTT Lab
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        Welcome to SOTT Lab. Your User Profile will be your guide to the easiest
        and most effective way to use this tool.
      </p>
      
      <MDBRow>
        <MDBCol md="12" className="md-0 mb-5">
          <form>
          <div className="block-example border-top border-primary">
            <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-name" label="First name" value={fname} onChange={(event) => { setFname(event.target.value)}}/>
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-email" label="Last Name" value={lname} onChange={(event) => { setLname(event.target.value)}}/>
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-subject" label="Username" value={username} onChange={(event) => { setUsername(event.target.value)}}/>
                </div>
              </MDBCol>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput type="password" id="contact-subject" label="Password" value={password} onChange={(event) => { setPassword(event.target.value)}}/>
                </div>
              </MDBCol>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput type="password" id="contact-subject" label="Confirm Password" value={passwordconfirm} onChange={(event) => { setPasswordConfirm(event.target.value)}}/>
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-subject" label="Email" value={email} onChange={(event) => { setEmail(event.target.value)}}/>
                </div>
              </MDBCol>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-subject" label="Country" value={country} onChange={(event) => { setCountry(event.target.value)}}/>
                </div>
              </MDBCol>
            </MDBRow>
            </div>
            <br></br>
            <div className="text-center block-example border-top border-primary">
              <br></br>
              <h2>
                <strong>Your Interests</strong>
              </h2>
              <p>
                You can choose keywords you'd like to follow here, or later on
                from your Profile Page
              </p>
            </div>
            <br></br>
            <MultiSelect />
          </form>
          <div className="text-center text-md-left">
            <br></br>
            <MDBBtn color="primary" size="md" onClick={async () => {await userSignUp({
                user: username,
                password: password,
                firstname: fname,
                lastname: lname,
                country: country
              })}}>
              Submit
            </MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SignUp;
