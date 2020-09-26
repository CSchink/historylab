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
    
          

          <MDBModal size="lg"  frame  position="top" isOpen={props.showOutline}>
            <MDBModalHeader>MDBModal title</MDBModalHeader>
            <MDBModalBody>
              <h2>Entry</h2>
              <p>{props.data}</p>
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