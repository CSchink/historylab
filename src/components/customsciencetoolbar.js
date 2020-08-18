import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ModalSkeleton, { modalType } from "./modalskeleton";
import ScienceModalSkeleton from "./sciencemodalskeleton";

const defaultToolbarSelectStyles = {
  iconButton: {},
  iconContainer: {
    marginRight: "24px",
  },
};

function CustomScienceToolbar(props) {
  // const { classes } = this.props;

  const [modal, setModal] = useState(false);

  const hideModal = () => {
    setModal(false);
  };

  const showModal = () => {
    setModal(true);
  };

  return (
    <div>
      {modal && (
        <ScienceModalSkeleton
        //   saveAction={modalType.edit}
          data={props.editData}
          hideModal={hideModal}
          showModal={showModal}
        />
      )}

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

export default CustomScienceToolbar;
