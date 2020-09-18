import React, { useState, useEffect } from "react";
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
import ImageInput from "./imageupload";
import instance from "../util/axiosutil";
import ImageUpload from "./imageupload";

const url = "https://api.cloudinary.com/v1_1/dtdsoufsu/image/upload";
const preset = "nytxylff";

function SignUp() {
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconfirm, setPasswordConfirm] = useState("");

  function resetState() {
    setEmail("");
    setImage("");
    setUsername("");
    setPassword("");
    setPasswordConfirm("");
  }

  const submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", preset);
    console.log(formData);
    try {
      const res = await instance.post(url, formData);
      const imageUrl = res.data.secure_url;
      console.log(imageUrl);
      await userSignUp({
        user: username,
        password: password,
        image: imageUrl,
      });
    } catch (err) {
      console.error(err);
    }
    resetState();
  };

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
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="contact-subject"
                      label="Username"
                      value={username}
                      onChange={(event) => {
                        setUsername(event.target.value);
                      }}
                    />
                  </div>
                </MDBCol>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="password"
                      id="contact-subject"
                      label="Password"
                      value={password}
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                    />
                  </div>
                </MDBCol>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="password"
                      id="contact-subject"
                      label="Confirm Password"
                      value={passwordconfirm}
                      onChange={(event) => {
                        setPasswordConfirm(event.target.value);
                      }}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="contact-subject"
                      label="Email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                  </div>
                </MDBCol>
                <MDBCol md="12">
                  <MDBInput
                    type="text"
                    label="Insert Image"
                    value={image}
                    onChange={(event) => {
                      setImage(event.target.value);
                    }}
                  />
                  {/* <MDBInput
                    type="file"
                    id="contact-subject"
                    
                    label="Insert Image"
                    value={image}
                    onChange={(event) => {
                      setImage(event.target.input.files[0]);
                      console.log(event.target)
                    }}
                  /> */}
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
          <br></br>
          <div className="text-center text-md-left">
            <br></br>
            <MDBBtn
              color="primary"
              size="lg"
              onClick={async () => {
                await onSubmit();
              }}
            >
              Submit
            </MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignUp;
