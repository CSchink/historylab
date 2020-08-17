import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import { listEntries } from "../connection.js";
import { hasToken } from "../util/tokenutil.js";
import Chip from "@material-ui/core/Chip";
import CustomToolbarSelect from "./customtoolbar.js";
import { Modal } from "@material-ui/core";
import DataEntry from "./modal.js";
import ModalSkeleton from "./modalskeleton.js";

const moment = require("moment");

const newTheme = createMuiTheme({
  overrides: {
    MUIDataTable: {
      responsiveScroll: {
        //   overflowX: 'none',
        //   height: 'auto',
        maxHeight: "none !important",
      },
    },
  },
});

class Table extends Component {
  constructor() {
    super();
    this.state = {
      historylab: [],
      // rowsSelected: false
      
    };
  }
  
  async componentDidMount() {
    // if(!hasToken()){
    //     this.props.history.push("/");
    // }
    const entries = await listEntries();
    this.setState({ historylab: entries.data });
  }

  updateSelectableRowsHideCheckboxes = (event) => {
    this.setState({
      rowsSelected: event.target.checked,
    });
  };
  render() {
   
    let data = [];

    this.state.historylab.forEach((item) => {
      var arr = [
        moment(item.Date).format("YYYY/MM/DD"),
        item.Entry,
        item.Century,
        item.Category,
        item.Originating,
        item.Target,
        item.Cultural,
        item.ptags,
        item.htags,
        item.Source,
        item.Page,
      ];
      data.push(arr);
    });

    const options = {
      filterType: "multiselect",
      responsive: "standard",
      rowsPerPage: 25,
      download: true,
      rowsPerPageOptions: [10, 25, 50, 100],
      fixedHeader: true,
      selectableRows: "single",
      selectableRowsOnClick: true,
      customToolbarSelect: (selectedRows, displayData, setSelectedRows) => {
        let editData = undefined;

        if (selectedRows.data.length > 0) {
          // let editData = displayData[selectedRows.data[0].index]
          // console.log(editData.data)
          editData = this.state.historylab[selectedRows.data[0].dataIndex];
         
        }

        return <CustomToolbarSelect editData={editData} />;
      },
    };

    var columns = [
      {
        name: "date",
        label: "Date (YYYY/MM/DD)",
        options: {
          filter: false,
          sort: true,
          customSort: (data, colIndex, order) => {
            return data.sort((a, b) => {
              return (
                (new Date(a.data[colIndex]) < new Date(b.data[colIndex])
                  ? -1
                  : 1) * (order === "desc" ? 1 : -1)
              );
            });
          },

          sortDirection: "desc",
        },
      },
      {
        name: "entry",
        label: "Entry",
        options: {
          filter: false,
          sort: false,
        },
      },
      {
        name: "century",
        label: "Century",
        options: {
          filter: true,
          sort: true,
          display: false,
          print: false,
        },
      },
      {
        name: "Category",
        label: "SOTT Category",
        options: {
          filter: true,
          sort: false,
          print: false,
          display: false,
          filterType: "multiselect",
        },
      },

      {
        name: "originating",
        label: "Originating",
        options: {
          filter: true,
          sort: false,
          display: false,
          print: false,
        },
      },
      {
        name: "target",
        label: "Target",
        options: {
          filter: true,
          sort: false,
          display: false,
          print: false,
        },
      },
      {
        name: "Cultural",
        label: "Cultural",

        options: {
          filter: true,
          sort: false,
          print: false,
          filterType: "multiselect",
          display: false,
          customBodyRender: (value) => {
            return value.map((val, key) => {
              if (val !== null) {
                return <Chip label={val} key={key} />;
              }
            });
          },
        },
      },
      {
        name: "ptags",
        label: "Ponerology",
        options: {
          filter: true,
          sort: false,
          print: false,
          display: false,
          customBodyRender: (value) => {
            return value.map((val, key) => {
              if (val !== null) {
                return <Chip label={val} key={key} />;
              }
            });
          },
        },
      },
      {
        name: "htags",
        label: "Tags",
        options: {
          filter: true,
          sort: false,
          print: false,
          filterType: "multiselect",
          customBodyRender: (value) => {
            return value.map((val, key) => {
              if (val !== null) {
                return <Chip label={val} key={key} />;
              }
            });
          },
        },
      },
      {
        name: "source",
        label: "Source",
        options: {
          filter: true,
          sort: false,
          display: false,
          print: false,
        },
      },
      {
        name: "page",
        label: "Page",
        options: {
          filter: false,
          sort: false,
          display: false,
          print: false,
        },
      },
    ];

    return (
      <div>
        <DataEntry />
        <MuiThemeProvider theme={newTheme}>
          <MUIDataTable columns={columns} data={data} options={options} />
        </MuiThemeProvider>
      </div>
    );
  }
}
export default Table;
