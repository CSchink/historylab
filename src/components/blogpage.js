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

  async function sendUserData() {
    await userSignUp();
  }
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
                  <MDBInput type="text" id="contact-name" label="First name" />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-email" label="Last Name" />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-subject" label="Email" />
                </div>
              </MDBCol>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-subject" label="Country" />
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
            <MDBBtn color="primary" size="md">
              Submit
            </MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SignUp;
