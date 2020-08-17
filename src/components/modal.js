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
import instance from "../util/axiosutil";
import { createEntry } from "../connection";
import TagsAutoSelect from "./tagsautoselect";
import ModalSkeleton from "./modalskeleton";
import {modalType} from "./modalskeleton"
function DataEntry() {
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
  const [date, setDate] = useState("");
  const [entry, setEntry] = useState("");
  const [century, setCentury] = useState("");
  const [category, setCategory] = useState("");
  const [origin, setOrigin] = useState("");
  const [target, setTarget] = useState("");
  const [ctags, setCtags] = useState("");
  const [ptags, setPtags] = useState("");
  const [tags, setTags] = useState("");
  const [source, setSource] = useState("");
  const [page, setPage] = useState("");

  const initialState = () => {
    setDate("");
    setEntry("");
    setCentury("");
    setCategory("");
    setOrigin("");
    setTarget("");
    setCtags("");
    setPtags("");
    setTags("");
    setSource("");
    setPage("");
  };

  const hideModal = () => {
    setModal(false);
  };

  const showModal = () => {
    setModal(true);
  };

  async function sendData (){
      await createEntry({
        Date: date,
        Entry: entry,
        Century: century,
        Category: category,
        Origin: origin,
        Target: target,
        Cultural: ctags.split(",").map((r) => r.trim()),
        ptags: ptags.split(",").map((r) => r.trim()),
        htags: tags.split(",").map((r) => r.trim()),
        Source: source,
        Page: page,
      });
  }

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
              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    label="Date"
                    value={date}
                    onChange={(event) => {
                      // setDate(event.target.value);
                      setDate(event.target.value);
                    }}
                  />
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    label="Century"
                    value={century}
                    onChange={(event) => {
                      setCentury(event.target.value);
                    }}
                  />
                </MDBCol>
              </MDBRow>
            
            <MDBInput
              label="Entry"
              value={entry}
              type="textarea"
              rows="2"
              onChange={(event) => {
                setEntry(event.target.value);
              }}
            />
            <MDBRow>
              <MDBCol md="6">
                <MDBInput
                  label="Originating"
                  value={origin}
                  onChange={(event) => {
                    setOrigin(event.target.value);
                  }}
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBInput
                  label="Target"
                  value={target}
                  onChange={(event) => {
                    setTarget(event.target.value);
                  }}
                />
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol md="6">
                <MDBInput
                  label="SOTT Category"
                  value={category}
                  onChange={(event) => {
                    console.log(event.target);
                    setCategory(event.target.value);
                  }}
                />
              </MDBCol>
              <MDBCol md='6'>
              <MDBInput
                label="Cultural Tags"
                value={ctags}
                onChange={(event) => {
                  setCtags(event.target.value);
                }}
              />
              </MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol md='6'>
              <MDBInput
                label="Ponerology Tags"
                value={ptags}
                onChange={(event) => {
                  setPtags(event.target.value);
                }}
              />
              </MDBCol>
              <MDBCol md='6'>
              <MDBInput
                label="General Tags"
                value={tags}
                onChange={(event) => {
                  setTags(event.target.value);
                }}
              />
              </MDBCol>
            </MDBRow>
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
                await sendData({
                  Date: date,
                  Entry: entry,
                  Century: century,
                  Category: category,
                  Origin: origin,
                  Target: target,
                  Cultural: ctags.split(",").map((r) => r.trim()),
                  ptags: ptags.split(",").map((r) => r.trim()),
                  htags: tags.split(",").map((r) => r.trim()),
                  Source: source,
                  Page: page,
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

export default DataEntry;
