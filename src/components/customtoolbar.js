import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import instance from "../util/axiosutil";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBAutocomplete,
  MDBInput,
} from "mdbreact";
import ModalSkeleton, { modalType } from "./modalskeleton";

const defaultToolbarSelectStyles = {
  iconButton: {},
  iconContainer: {
    marginRight: "24px",
  },
};

function CustomToolbarSelect(props) {
  // const { classes } = this.props;
  const [entry, setEntry] = useState("");
  const [modal, setModal] = useState(false);

  const hideModal = () => {
    setModal(false);
  };

  const showModal = () => {
    setModal(true);
  };

  return (
    <div>
      {/* <MDBContainer>
        <MDBModal size="lg" isOpen={modal}>
          <MDBModalHeader>Edit Below</MDBModalHeader>
          <MDBModalBody>
            
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={hideModal}>
              Close
            </MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer> */}
      {modal && (
        <ModalSkeleton
          saveAction={modalType.edit}
          data={props.editData}
          isOpen={modal}
        />
      )}

      <Tooltip title={"Edit"}>
        <IconButton
          onClick={showModal}

          //   async () => {
          //   setEntry(data);
          //   console.log(data);

          //   const newData = await instance.get("/findOne", {
          //     entry,
          //   });
          //   console.log(data);
          // }}
        >
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={"Delete"}>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default CustomToolbarSelect;
