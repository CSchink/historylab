// const {MongoClient} = require('mongodb');

// async function connect(){
//     const uri="mongodb+srv://dbCorey:MVDhmYhNQkp2y8T@cluster0-ymebw.mongodb.net/sottlab?retryWrites=true&w=majority"
//     const client = new MongoClient(uri);
//     return await client.connect();
// }

// async function listDatabases(client){
//     let databasesList = await client.db().admin().listDatabases();
 
//     return databasesList.databases;
// };

// async function listEntries(client){
//     const cursor = await client.db('sottlab').collection('historylab').find({}).limit(10);
//     let results = await cursor.toArray();
//     return results;
// }

// async function deleteEntries(client, userName){
//     let result = await client.db("sottlab").collection("logindata").deleteOne({ user: userName })
//     console.log(`${result.deletedCount} document(s) were deleted.`)
// }

// async function createEntry(client, newEntry){
//     const result = await client.db("sottlab").collection("logindata").insertOne(newEntry);
//     console.log(`New entry created with the following id: ${result.insertedId}`);
// }

// module.exports = { listDatabases, connect, listEntries, deleteEntries, createEntry }
// const {
//     Stitch,
//     RemoteMongoClient,
//     AnonymousCredential
// } = require('mongodb-stitch-browser-sdk');

// const client = Stitch.initializeDefaultAppClient('historylab-lovsg');

// const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('sottlab');

// async function connect() {client.auth.loginWithCredential(new AnonymousCredential()).then(user =>
//   db.collection('logindata').updateOne({owner_id: client.auth.user.id}, {$set:{number:42}}, {upsert:true})
// ).then(() =>
//   db.collection('historylab').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
// ).then(docs => {
//     console.log("Found docs", docs)
//     console.log("[MongoDB Stitch] Connected to Stitch")
// }).catch(err => {
//     console.error(err)
// });
// }

// module.exports = {connect};