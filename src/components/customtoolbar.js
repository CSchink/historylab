import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import instance from "../util/axiosutil";
import ModalSkeleton, { modalType } from "./modalskeleton";
import AddCircle from "@material-ui/icons/AddCircle";
import OutlineModal from "./outlinemodal";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

const defaultToolbarSelectStyles = {
  iconButton: {},
  iconContainer: {
    marginRight: "24px",
  },
};

function CustomToolbarSelect(props) {
  // const { classes } = this.props;

  const [modal, setModal] = useState(false);
  const [outline, setOutline] = useState(false);

  const hideModal = () => {
    setModal(false);
  };

  const showModal = () => {
    setModal(true);
  };

  const hideOutline = () => {
    setOutline(false);
  };

  const showOutline = () => {
    setOutline(true);
  };

  return (
    <div>
      {modal && (
        <ModalSkeleton
          saveAction={modalType.edit}
          data={props.editData}
          hideModal={hideModal}
          showModal={showModal}
        />
      )}
      {outline && (
        <MDBContainer>
          <MDBModal size="lg" frame position="top" isOpen={outline}>
            <MDBModalHeader>Add to Article Builder</MDBModalHeader>
            <MDBModalBody>
              <p>{props.editData.Date}</p>
              <p>{props.editData.Entry}</p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={hideOutline}>
                Close
              </MDBBtn>
              <MDBBtn color="primary">Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      )}
      <Tooltip title={"Add to Article Builder"}>
        <IconButton>
          <AddCircle onClick={showOutline} />
        </IconButton>
      </Tooltip>
      <Tooltip title={"Edit"}>
        <IconButton onClick={showModal}>
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
