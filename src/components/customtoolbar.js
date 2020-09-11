import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import instance from "../util/axiosutil";
import ModalSkeleton, { modalType } from "./modalskeleton";
import AddCircle from "@material-ui/icons/AddCircle";
import OutlineModal from "./outlinemodal";

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
        <OutlineModal
          hideOutline={hideOutline}
          showOutline={showOutline}
          data={props.editData}
        />
      )}
      <Tooltip title={"Add to Builder"}>
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
