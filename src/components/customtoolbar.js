import React, { useState } from 'react';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import instance from "../util/axiosutil";

const defaultToolbarSelectStyles = {
    iconButton: {
    },
    iconContainer: {
      marginRight: "24px",
    },
  };
  
  
  
function CustomToolbarSelect (data){
    // const { classes } = this.props;
    const [entry, setEntry] = useState("");
    
    return(
        <div >
        <Tooltip title={"Edit"} onClick={async () => {
            setEntry(data)
            console.log(data)
            
              const newData = await instance.get("/findOne", {
                 entry
              });
              console.log(data)
            }} >
          <IconButton >
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={"Delete"}>
          <IconButton >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
    )
}

export default CustomToolbarSelect;