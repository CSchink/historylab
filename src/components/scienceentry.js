import React, { useState, Fragment } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBBtnFixed,
  MDBIcon,
} from "mdbreact";
import { useAccount } from "../context/account-context";
import { createScienceEntry, newNotifications } from "../connection";

function ScienceEntry() {
  const [modal, setModal] = useState(false);
  //   const [state, setState] = useState({
  //     date: "",
  //     entry: "",
  //     century: "",
  //     category: "",
  //     origin: "",
  //     target: "",
  //     ctags: "",
  //     ptags: "",
  //     tags: "",
  //     source: "",
  //     page: "",
  //   });
  let today = new Date();
  const [date, setDate] = useState("");
  const [entry, setEntry] = useState("");
  const [field, setField] = useState("");
  const [subfields, setSubfields] = useState("");
  const [source, setSource] = useState("");
  const [page, setPage] = useState("");
  const [tags, setTags] = useState("");
  const accountContext = useAccount();
  const initialState = () => {
    setDate("");
    setEntry("");
    setField("");
    setSubfields("");
    setSource("");
    setPage("");
    setTags("");
  };

  const hideModal = () => {
    setModal(false);
  };

  const showModal = () => {
    setModal(true);
  };

  //   function resetState() {
  //     setState({
  //       date: "",
  //       entry: "",
  //       century: "",
  //       category: "",
  //       origin: "",
  //       target: "",
  //       ctags: "",
  //       ptags: "",
  //       tags: "",
  //       source: "",
  //       page: "",
  //     });
  //   }

  return (
    <div>
      <Fragment>
        <MDBBtnFixed
          floating
          size="lg"
          color="blue"
          icon="plus-circle"
          style={{ bottom: "45px", right: "24px" }}
          onClick={showModal}
        />
      </Fragment>

      <MDBContainer>
        <MDBModal size="lg" isOpen={modal}>
          <MDBModalHeader>Data Entry</MDBModalHeader>
          <MDBModalBody>
            <MDBContainer fluid>
              <MDBInput
                label="Publication Date"
                value={date}
                onChange={(event) => {
                  // setDate(event.target.value);
                  setDate(event.target.value);
                }}
              />

              <MDBInput
                label="Entry"
                value={entry}
                type="textarea"
                rows="2"
                onChange={(event) => {
                  setEntry(event.target.value);
                }}
              />

              <MDBInput
                label="Field"
                value={field}
                onChange={(event) => {
                  setField(event.target.value);
                }}
              />

              <MDBInput
                label="Subfields"
                value={subfields}
                onChange={(event) => {
                  setSubfields(event.target.value);
                }}
              />

              <MDBInput
                label="Keywords"
                value={tags}
                onChange={(event) => {
                  setTags(event.target.value);
                }}
              />

              <MDBInput
                label="Source"
                value={source}
                onChange={(event) => {
                  setSource(event.target.value);
                }}
              />
              <MDBInput
                label="Page"
                value={page}
                onChange={(event) => {
                  setPage(event.target.value);
                }}
              />
            </MDBContainer>
          </MDBModalBody>

          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={hideModal}>
              Close
            </MDBBtn>
            <MDBBtn
              color="primary"
              onClick={async () => {
                await createScienceEntry({
                  Date: date,
                  Entry: entry,
                  Field: field,
                  Subfields: subfields.split(",").map((r) => r.trim()),
                  Tags: tags.split(",").map((r) => r.trim()),
                  Source: source,
                  Page: page,
                });
                await newNotifications({
                  Entry: entry,
                  User: accountContext.account.user,
                  Image: accountContext.account.image,
                  Date: today.toLocaleDateString(),
                  Time: today.toLocaleTimeString(),
                  Type: "entered",
                  Table: "Science Lab",
                });
                initialState();
              }}
            >
              Submit
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    </div>
  );
}

export default ScienceEntry;
