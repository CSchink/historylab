import React from "react";
import {
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBPopover,
  MDBPopoverBody,
  MDBPopoverHeader,
  MDBAvatar,
} from "mdbreact";

const PanelPage = (props) => {
  return (
    <MDBContainer>
      <MDBRow className="mb-4">
        <MDBCol sm="12">
          <MDBCard border="primary">
            <MDBCardBody>
              <MDBAvatar className="mx-auto white">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg"
                  className="rounded-circle float-right"
                  alt="alignment"
                />
              </MDBAvatar>
              <MDBCardTitle>Something here</MDBCardTitle>
              <MDBCardText>This is where the updates will appear</MDBCardText>
              <MDBPopover placement="left" popover clickable id="popper2">
                <MDBBtn rounded outline color="primary">
                  More
                </MDBBtn>
                <div>
                  <MDBPopoverHeader>Details</MDBPopoverHeader>
                  <MDBPopoverBody>
                    More details in here
                  </MDBPopoverBody>
                </div>
              </MDBPopover>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default PanelPage;
