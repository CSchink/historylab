import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { listScienceEntries } from "../connection";
import ScienceEntry from "./scienceentry";
import { render } from "react-dom";
import Chip from "@material-ui/core/Chip";

class ScienceLab extends Component {
  constructor() {
    super();
    this.state = {
      sciencelab: [],
    };
  }

  async componentDidMount() {
    const entries = await listScienceEntries();
    this.setState({ sciencelab: entries.data });
    console.log(entries.data);
  }

  render() {
    const options = {
      filterType: "multiselect",
      responsive: "standard",
      rowsPerPage: 25,
      download: true,
      rowsPerPageOptions: [10, 25, 50, 100],
      fixedHeader: true,
      selectableRows: "single",
    };

    var columns = [
      {
        name: "Field",
        label: "Field",
      },
      {
        name: "Subfields",
        label: "Subfields",
        options: {
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
        name: "Entry",
        label: "Entry",
        options: {
          filter: false,
          sort: false,
        },
      },
      {
        name: "Tags",
        label: "Keywords",
        options: {
        //   display: false,
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
        name: "Date",
        label: "Date",
        options: {
          display: false,
        },
      },
      {
        name: "Source",
        label: "Source",
        options: {
          display: false,
        },
      },
      {
        name: "Page",
        label: "Page",
        options: {
          display: false,
        },
      },
    ];
    let data = [];

    this.state.sciencelab.forEach((item) => {
      var arr = [
        item.Field,
        item.Subfields,
        item.Entry,
        item.Tags,
        item.Date,
        item.Source,
        item.Page,
      ];
      data.push(arr);
    });

    return (
      <div>
        <ScienceEntry />
        <MUIDataTable data={data} columns={columns} options={options} />
      </div>
    );
  }
}

export default ScienceLab;
