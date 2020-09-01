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
import { createEntry, getEditData, editData } from "../connection";
import TagsAutoSelect from "./tagsautoselect";

export const modalType = {
  create: 1,
  edit: 2,
};

// <ModalSkeleton saveAction={saveAction.resetState} />

// function f(first, second) {
//     // first
// }

// f(1, 2);
// f(2);
// f(2);
// f(2);
// f(2);

// function b(obj) {
//     // obj.first
// }

// b({first: 1, second: 2});
// b({first: 1});
// b({first: 1});
// b({first: 1});
// b({first: 1});
// <Moda data={{date: 1234}}

function ModalSkeleton(props) {
  const [modal, setModal] = useState(true);
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
// props.data?.bar?.baz;

// COALESCE(1, 2); // 1
// COALESCE(null, 2); // 2

  const [date, setDate] = useState(props.data?.Date ?? "");
  const [entry, setEntry] = useState(props.data?.Entry ?? "");
  const [century, setCentury] = useState(props.data?.Century ?? "");
  const [category, setCategory] = useState(props.data?.Category ?? "");
  const [origin, setOrigin] = useState(props.data?.Originating ?? "");
  const [target, setTarget] = useState(props.data?.Target ?? "");
  const [ctags, setCtags] = useState(props.data?.Cultural ?? "");
  const [ptags, setPtags] = useState(props.data?.ptags ?? "");
  const [tags, setTags] = useState(props.data?.htags ?? "");
  const [source, setSource] = useState(props.data?.Source ?? "");
  const [page, setPage] = useState(props.data?.Page ?? "");
  const [_id, set_id] = useState(props.data._id)


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



async function editHistoryLab(){
    
    await editData({
       _id: _id,
       Date: date,
       Entry: entry,
       Century: century,
       Category: category,
       Origin: origin,
       Target: target,
       Cultural: ctags.map((r) => r.trim()),
       ptags: ptags.map((r) => r.trim()),
       htags: tags.map((r) => r.trim()),
       Source: source,
       Page: page,
    })
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
      {/* <Fragment>
        <MDBBtnFixed
          floating
          size="lg"
          color="blue"
          icon="plus-circle"
          style={{ bottom: "45px", right: "24px" }}
          onClick={showModal}
        />
      </Fragment> */}

      <MDBContainer>
        <MDBModal size="lg" isOpen={props.showModal}>
          <MDBModalHeader>{props.header}</MDBModalHeader>
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
                     
                      setCategory(event.target.value);
                    }}
                  />
                </MDBCol>
                <MDBCol md="6">
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
                <MDBCol md="6">
                  <MDBInput
                    label="Ponerology Tags"
                    value={ptags}
                    onChange={(event) => {
                      setPtags(event.target.value);
                    }}
                  />
                </MDBCol>
                <MDBCol md="6">
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
            <MDBBtn color="secondary" onClick={props.hideModal}>
              Close
            </MDBBtn>
            <MDBBtn
              color="primary"
            //   onClick={props.onClick}
              onClick={async () => {
                if (props.saveAction === modalType.create) {
                    //todo: reset the state
                    await sendData()
                    initialState()
                    
                } else if (props.saveAction === modalType.edit) {
                    //todo: close the modal
     
                    await editHistoryLab()
                    props.hideModal()
                }
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

export default ModalSkeleton;