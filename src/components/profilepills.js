import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import ChatPage from "./chatpage";
import Notifications from "./notifications";
import Table from "./table";
import ScienceLab from "./sciencelab";

class ProfilePills extends Component {
  state = {
    items: {
      default: "1",
    },
  };

  togglePills = (type, tab) => (e) => {
    e.preventDefault();
    if (this.state.items[type] !== tab) {
      let items = { ...this.state.items };
      items[type] = tab;
      this.setState({
        items,
      });
    }
  };

  render() {
    return (
    
      <MDBContainer className="mt-4" fluid>
        <MDBRow>
          <MDBCol md="12">
            <MDBNav className="mt-5 nav-pills">
              <MDBNavItem>
                <MDBNavLink
                  link
                  to="#"
                  active={this.state.items["default"] === "1"}
                  onClick={this.togglePills("default", "1")}
                >
                  History Lab
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  link
                  to="#"
                  active={this.state.items["default"] === "2"}
                  onClick={this.togglePills("default", "2")}
                >
                  Science Lab
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  link
                  to="#"
                  active={this.state.items["default"] === "3"}
                  onClick={this.togglePills("default", "3")}
                >
                  Messages
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            <MDBTabContent activeItem={this.state.items["default"]}>
              <MDBTabPane tabId="1">
                <Table />
              </MDBTabPane>
              <MDBTabPane tabId="2">
                <ScienceLab />
              </MDBTabPane>
              <MDBTabPane tabId="3">
                <ChatPage />
              </MDBTabPane>
            </MDBTabContent>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default ProfilePills;
