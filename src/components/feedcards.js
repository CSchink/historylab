import React, { useState, Fragment } from "react";
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
import { useAccount } from "../context/account-context";

const PanelPage = (props) => {
  const accountContext = useAccount();
  const notifyMessage = accountContext.account.notifications.data;
  console.log(notifyMessage);

  return (
    <MDBContainer>
      {notifyMessage.map((item) => (
        <Fragment key={item._id}>
          <MDBRow className="mb-4">
            <MDBCol sm="12">
              <MDBCard border="primary">
                <MDBCardBody>
                  <MDBAvatar className="mx-auto white">
                    <img
                      src={item.Image}
                      className="rounded-circle float-right"
                      width="120"
                      height="120"
                      alt="alignment"
                    />
                  </MDBAvatar>
                  <MDBCardTitle>
                    {item.User} posted the following in SOTT Lab:
                  </MDBCardTitle>
                  <MDBCardText>
                    <strong>{item.Entry}</strong>
                  </MDBCardText>
                  <MDBCardText>
                    <p>
                      on {item.Date} at {item.Time}
                    </p>
                  </MDBCardText>
                  {/* <MDBPopover placement="left" popover clickable id="popper2">
                <MDBBtn rounded outline color="primary">
                  
                </MDBBtn>
                <div>
                  <MDBPopoverHeader>Details</MDBPopoverHeader>
                  <MDBPopoverBody>More details in here</MDBPopoverBody>
                </div>
              </MDBPopover> */}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </Fragment>
      ))}
    </MDBContainer>
  );
};

export default PanelPage;
