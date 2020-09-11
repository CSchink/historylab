import React, { useState } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

function OutlineModal (props) {
 const [outline, setOutline] = useState(false)

 const hideModal = ()=>{
     setOutline(false)
 }

 const showModal = ( ) =>{
     setOutline(true)
 }

      return (
        <MDBContainer>
    
          

          <MDBModal isOpen={props.showOutline} size="lg"  frame  position="top">
            <MDBModalHeader>MDBModal title</MDBModalHeader>
            <MDBModalBody>
              {props.data}
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={props.hideOutline}>Close</MDBBtn>
              <MDBBtn color="primary">Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      );
    }
  
  export default OutlineModal;