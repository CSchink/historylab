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
import { createEntry, getEditData, editData, editScienceData } from "../connection";
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

function ScienceModalSkeleton(props) {
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
  const [field, setField] = useState(props.data?.Field ?? "");
  const [subfields, setSubfields] = useState(props.data?.Subfields ?? "");
  const [source, setSource] = useState(props.data?.Source ?? "");
  const [page, setPage] = useState(props.data?.Page ?? "");
  const [tags, setTags] = useState(props.data?.Tags ?? "");
  const [_id, set_id] = useState(props.data._id);

  const initialState = () => {
    setDate("");
    setEntry("");
    setField("");
    setSubfields("");
    setSource("");
    setPage("");
    setTags("");
  };


//   async function sendScienceData() {
//     await createScienceEntry({
//         _id: _id,
//         Date: date,
//         Entry: entry,
//         Field: field,
//         Subfields: subfields.split(",").map((r) => r.trim()),
//         Tags: tags.split(",").map((r) => r.trim()),
//         Source: source,
//         Page: page,
//     });
//   }

  async function editScienceLab() {
    await editScienceData({
      _id: _id,
      Date: date,
      Entry: entry,
      Field: field,
      Subfields: subfields.map((r) => r.trim()),
      Tags: tags.map((r) => r.trim()),
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
            <MDBBtn color="secondary" onClick={props.hideModal}>
              Close
            </MDBBtn>
            <MDBBtn
              color="primary"
              onClick={async () => {
                await editScienceLab();
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

export default ScienceModalSkeleton;
