import React from 'react';
import ReactDataGrid from 'react-data-grid';

const connection = require('./connection.js')
const express = require('express');
const app = express();


class Table extends Component{

    constructor(props) {
        super(props);
        this.state = {
            historylab: []     
        };
    }

componentDidMount(){
    app.get('/listEntries', async function(req, res){
    let client = await connection.connect();
    let entries = await connection.listEntries(client);
    res.json(entries);
    this.setState({historylab: entries});
    
})
}

render(){
    var columns = [
        { key: 'Date', name: 'Date' },
        { key: 'Entry', name: 'Entry' },
        { key: "Century", name: "Century"},
        { key: "Event", name:"Event"  },
        { key: "Originating", name:"Originating" },
        { key:"Target", name:"Target"  },
        { key: "Source", name:"Source"  },
        { key:"Page", name:"Page"  },
         ];
      
    var rows = [] 
      this.state.historylab.forEach((item) => {
        var arr=[
        moment(item.Date).format('YYYY DD MMMM'),
        item.Entry,
        item.Century,
        item.Event,
        item.Originating,
        item.Target,
        item.Source,
        item.Page
    ]
        rows.push(arr)
      })
      let rowCount = rows.length;
return(
    <ReactDataGrid
    columns={columns}
    rowGetter={i => rows[i]}
    rowsCount={rowCount}
    minHeight={150} />);
}
}

export default Table;