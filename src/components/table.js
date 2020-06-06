import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import {
    createMuiTheme,
    MuiThemeProvider,
    withStyles
  } from "@material-ui/core/styles";
 import {listEntries} from '../connection.js'

var moment = require('moment');

const newTheme = createMuiTheme({
    overrides: {
      MUIDataTable: {

        responsiveScroll: {
        //   overflowX: 'none',
        //   height: 'auto',
        maxHeight: 'none !important'
        },
      },
    },
})

class Table extends Component{

    constructor() {
        super();
        this.state = {
            historylab: []     
        };
    }
    
async componentDidMount(){
      const entries = await listEntries()
      this.setState({historylab: entries.data})
    }
render(){
    const options = {
        filterType: 'multiselect',
        selectableRows: 'none',
        responsive: 'scroll',
        rowsPerPage: 25,
        download: false,
        rowsPerPageOptions: [10,25,50,100],
}
    var columns = [ 
        {
            name:"date",
            label: "Date",
            options:{
                filter: false,
                sort: true,
                sortDirection: 'desc'
            }
        },
        {
        name: "entry",
        label:"Entry",
        options:{
            filter: false,
            sort: false
        }
        }, 
        {
            name: "century",
            label: "Century",
        options:{
            filter: true,
            sort: true
        } 
    },
        {
        name: 'event',
        label: 'Event',
        options: {
            filter: true,
            sort: false,
           }
        },
        {
        name: 'originating',
        label: 'Originating',
        options: {
            filter: true,
            sort: false,
            display: false,
           }
        },
        {
        name: "target",
        label: 'Target',
        options: {
            filter: true,
            sort: false,
            display: false,
           }
        },
        {
            name: "source",
            label: 'Source',
            options: {
                filter: true,
                sort: false,
                display: false,
                }
            },
            {
                name: "page",
                label: 'Page',
                options: {
                    filter: false,
                    sort: false,
                    display: false,
                    }
                }
    ]
        
    var data=[]
    this.state.historylab.forEach((item) => {
        var arr=[moment(item.Date).format('YYYY DD MMMM'),
                item.Entry,
                item.Century,
                item.Event,
                item.Originating,
                item.Target,
                item.Source,
                item.Page
            ]
        data.push(arr)
        })
return(
    <div>
    <MuiThemeProvider theme={newTheme}>
        <MUIDataTable
                    columns={columns}
                    data={data}
                    options={options}
                    />
    </MuiThemeProvider>
    </div>
)
}
}
export default Table;