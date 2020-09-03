import React, { Component } from "react";
import {
  MDBSmoothScroll,
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import ScienceLab from "../components/sciencelab";
import Table from "../components/table";
import Queue from "../components/queue";

class LabPanels extends Component {
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
      <MDBContainer fluid>
        <MDBNav pills color="primary">
          <MDBNavItem>
            <MDBNavLink
              link
              to="/historylab"
              active={this.state.items["default"] === "1"}
              onClick={this.togglePills("default", "1")}
            >
              History Lab
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              link
              to="/sciencelab"
              active={this.state.items["default"] === "2"}
              onClick={this.togglePills("default", "2")}
            >
              Science Lab
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              link
              to="/philosophylab"
              active={this.state.items["default"] === "3"}
              onClick={this.togglePills("default", "3")}
            >
              Philosophy Lab
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
            <h3>Philosophy Lab coming soon!</h3>
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}

export default LabPanels;
