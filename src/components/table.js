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
      historyLabArrays: [],
      historylab: [],
      stateFilter: {
        century: [],
        category: "",
        originating: "",
        target: "",
        cultural: [],
        ptags: [],
        htags: [],
        source: "",
      },
      // centuryfilteroptions: [],
      // originatingfilteroptions: [],
      // rowsSelected: false

      // add state value for each set of filter options
    };
  }

  async componentDidMount() {
    // if(!hasToken()){
    //     this.props.history.push("/");
    // }
    const entries = await listEntries();
    let data = [];

    // move this into state ??
    entries.data.forEach((item) => {
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

    this.setState({
      historylab: entries.data,
      historyLabArrays: data,
      stateFilter: entries.data,
      // .map((d, i) => d[i])
      // .filter(this.onlyUnique)
      // .sort(),
    });
  }

  updateSelectableRowsHideCheckboxes = (event) => {
    this.setState({
      rowsSelected: event.target.checked,
    });
  };

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  uniqueList = (string) => {
    string
      .split(",")
      .filter(function (item, i, allItems) {
        return i == allItems.indexOf(item);
      })
      .join(",");
  };
  render() {
    const self = this;

    const options = {
      filterType: "multiselect",
      responsive: "standard",
      rowsPerPage: 10,
      download: true,
      rowsPerPageOptions: [10, 25, 50, 100],
      fixedHeader: true,
      // onTableChange: function(action, tableState) {
      //   console.log(action, tableState);
      // },
      onFilterChange: function (
        changedColumn,
        filterList,
        type,
        changedColumnIndex,
        displayData
      ) {
        // debugger;
        console.log("changedColumn", changedColumn, "filterList", filterList);

        // get index of column based on changedColumn using columns
        const index = columns.findIndex((c) => c.name === changedColumn);
        const centuryIndex = columns.findIndex((c) => c.name === "century");
        const originatingIndex = columns.findIndex(
          (c) => c.name === "originating"
        );
        const filteredColumns = columns
          .filter((c) => c.name !== changedColumn)
          .map((c) => c.name);

        console.log("filteredColumns", filteredColumns);
        // console.log((filteredColumns.findIndex()));
        console.log("index", index);

        // get the updated filter list from filterList using column index
        const updatedFilterList = filterList[index];

        console.log("updatedFilterList", updatedFilterList);

        // update every other filter Option state array based on new filterList
        //TODO: make it better

        const newHistoryLab = self.state.historyLabArrays.filter((hl) =>
          updatedFilterList.includes(hl[index])
        );
        console.log(columns);
        console.log(
          "changedColumn",
          changedColumn,
          "newHistoryLab",
          newHistoryLab
        );
        // const newerHistoryLab = newHistoryLab.map((nhl) => nhl[index]).filter(self.onlyUnique).sort()
        console.log(
          " newHistoryLab.map((nhl) => nhl[centuryIndex])",
          newHistoryLab.map((nhl, i) => nhl[i])
        );
        // run a distinct after the map?

        // .sort())
        let newData = [];

        newHistoryLab.filter(self.onlyUnique).forEach((hl) =>
          newData.push({
            category: hl[3],
            originating: hl[4],
            century: hl[2],
            target: hl[5],
            ptags: hl[7],
            cultural: hl[6],
            source: hl[9],
          })
        );

        let newestData = newData.forEach((result) => {
          Object.keys(result).forEach((a, key) => {
            if (typeof result[key] === "string") {
              result[key] = result[key]
              console.log("string", result[key]);
            } else if (Array.isArray(result[key])) {
             result[key] = result[key].reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
              console.log("array", result[key])
            }
            return result
          })
          console.log(result)
        });
        console.log("sorting debugger", newestData);

        self.setState({
          stateFilter: newData,
        });
        // newHistoryLab.map((nhl) => nhl[index]).filter(self.onlyUnique).sort()});
        // console.log(newHistoryLab.map((nhl) => nhl[filteredColumns]).filter(self.onlyUnique).sort())
        console.log("Is this state", self.state.stateFilter);
        // example: century
        // filter out the changedColumn

        // if (changedColumn === 'century') {
        //   state.originatingfilteroptions.filter((ofo) => updatedFilterList.)
        // } else if (changedColumn === 'originating') {

        // }

        // console.log(changedColumn)
        // console.log(filterList)
        // console.log(type)
        // console.log(displayData)
        // console.log(changedColumnIndex)
      },
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
          filterOptions: {
            names: this.state.stateFilter.century,
          },
          filter: true,
          sort: true,
          display: false,
          print: false,
        },
      },
      {
        name: "category",
        label: "SOTT Category",
        options: {
          filterOptions: {
            names: this.state.stateFilter.category,
          },
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
          filterOptions: {
            names: this.state.stateFilter.originating,
          },
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
          filterOptions: {
            names: this.state.stateFilter.target,
          },
          filter: true,
          sort: false,
          display: false,
          print: false,
        },
      },
      {
        name: "cultural",
        label: "Cultural",

        options: {
          filterOptions: {
            names: this.state.stateFilter.cultural,
          },
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
          filterOptions: {
            names: this.state.stateFilter.ptags,
          },
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
          filterOptions: {
            names: this.state.stateFilter.htags,
          },
          filter: true,
          sort: false,
          print: false,
          display: false,
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
          filterOptions: {
            names: this.state.stateFilter.source,
          },
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
          <MUIDataTable
            columns={columns}
            data={this.state.historyLabArrays}
            options={options}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}
export default Table;
