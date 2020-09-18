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
  const sortedArray = notifyMessage.sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.Date) - new Date(a.Date);
  })
 

  return (
    <MDBContainer>
      <MDBRow >
        <MDBCol sm="12">
          {sortedArray.map((item) => {
           
              return (
                <Fragment key={item._id}>
                  <br></br>
                  <MDBCard border ={ item.Table === "History Lab" ? "primary" : "secondary" }>
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
                        {item.User} posted in {item.Table}
                      </MDBCardTitle>
                      <br></br>
                      <MDBCardText>
                        <strong>{item.Entry}</strong>
                      </MDBCardText>
                      <br></br>
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
                </Fragment>
              );
            }
          )}

          
          </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default PanelPage;
