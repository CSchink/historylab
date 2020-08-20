import React, { Component } from "react";
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
} from "mdbreact";


class ToolTabs extends Component {
  state = {
    activeItemOuterTabs: "1",
    activeItemInnerPills: "1",
  };

  toggleOuterTabs = tab => e => {
    if (this.state.activeItemOuterTabs2 !== tab) {
      this.setState({
        activeItemOuterTabs: tab
      });
    }
  };

  toggleInnerPills = tab => e => {
    if (this.state.activeItemInnerPills !== tab) {
      this.setState({
        activeItemInnerPills: tab
      });
    }
  };

  render() {
    return (
      <MDBContainer fluid>
        <h2 className="mt-5 text-center">SOTT Lab Tools</h2>
        <br></br>
        <MDBNav tabs className="nav-justified" color="primary">
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItemOuterTabs === "1"} onClick={this.toggleOuterTabs("1")} role="tab" >
              <MDBIcon icon="user" /> Tables
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItemOuterTabs === "2"} onClick={this.toggleOuterTabs("2")} role="tab" >
              <MDBIcon icon="number" /> Charts
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent
          className="card mb-5"
          activeItem={this.state.activeItemOuterTabs}
        >
          <MDBTabPane tabId="1" role="tabpanel">
            <MDBRow>
              <MDBCol md="3">
                <MDBNav pills color="primary" className="flex-column">
                    
                  {/* <MDBNavItem>
                    <MDBNavLink link to="#" active={ this.state.activeItemInnerPills === "1"} onClick={this.toggleInnerPills("1")} >
                      Downloads <MDBIcon icon="download" className="ml-2" />
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem> */}
                    {/* <MDBNavLink link to="#" active={ this.state.activeItemInnerPills === "2"} onClick={this.toggleInnerPills("2")} >
                      Orders & invoices
                      <MDBIcon icon="file-alt" className="ml-2" />
                    </MDBNavLink> */}
                  {/* </MDBNavItem> */}
                  {/* <MDBNavItem>
                    <MDBNavLink link to="#" active={ this.state.activeItemInnerPills === "3"} onClick={this.toggleInnerPills("3")} >
                      Billing Details
                      <MDBIcon icon="address-card" className="ml-2" />
                    </MDBNavLink>
                  </MDBNavItem> */}
                </MDBNav>
              </MDBCol>
              <MDBCol md="9">
                <MDBTabContent activeItem={this.state.activeItemInnerPills}>
                  
                </MDBTabContent>
              </MDBCol>
            </MDBRow>
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
            <MDBRow>
            
            </MDBRow>
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}
export default ToolTabs