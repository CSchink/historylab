const {MongoClient} = require('mongodb');

async function connect(){
    const uri="mongodb+srv://dbCorey:MVDhmYhNQkp2y8T@cluster0-ymebw.mongodb.net/sottlab?retryWrites=true&w=majority"
    const client = new MongoClient(uri);
    return await client.connect();
}

async function listDatabases(client){
    let databasesList = await client.db().admin().listDatabases();
 
    return databasesList.databases;
};

async function listEntries(client){
    const cursor = await client.db('sottlab').collection('historylab').find({}).limit(10);
    let results = await cursor.toArray();
    return results;
}

async function deleteEntries(client, userName){
    let result = await client.db("sottlab").collection("logindata").deleteOne({ user: userName })
    console.log(`${result.deletedCount} document(s) were deleted.`)
}

async function createEntry(client, newEntry){
    const result = await client.db("sottlab").collection("logindata").insertOne(newEntry);
    console.log(`New entry created with the following id: ${result.insertedId}`);
}

module.exports = { listDatabases, connect, listEntries, deleteEntries, createEntry }