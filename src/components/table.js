import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import {
    Stitch,
    AnonymousCredential,
    RemoteMongoClient
  } from "mongodb-stitch-browser-sdk";


const moment = require('moment');

class Table extends Component{

    constructor() {
        super();
        this.state = {
            historylab: []     
        };
    }
    
componentDidMount(){
    this.client = Stitch.initializeDefaultAppClient("historylab-lovsg");
    const mongodb = this.client.getServiceClient(
        RemoteMongoClient.factory,
        "mongodb-atlas"
      );
      this.db = mongodb.db("sottlab");
      this.displayHistoryLabOnLoad();
      
    }

displayHistoryLab(){
    this.db
    .collection("historylab")
    .find({}, {limit: 100})
    .asArray()
    .then(historylab => {
    this.setState({historylab});
})
}

displayHistoryLabOnLoad(){
    this.client.auth
    .loginWithCredential(new AnonymousCredential())
    .then(this.displayHistoryLab)
    .catch(console.error)
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
        var data = [
        moment(item.Date).format('YYYY DD MMMM'),
        item.Entry,
        item.Century,
        item.Event,
        item.Originating,
        item.Target,
        item.Source,
        item.Page
    ]
        rows.push(data);
      })
return(
    <ReactDataGrid
    columns={columns}
    rowGetter={rows}
    minHeight={150} />);
}
}

export default Table;