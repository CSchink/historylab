const axios = require('axios');

export async function listEntries(){

return axios.get('http://localhost:3000/listEntries')

}


// async function deleteEntries(client, userName){
//     let result = await client.db("sottlab").collection("logindata").deleteOne({ user: userName })
//     console.log(`${result.deletedCount} document(s) were deleted.`)
// }

export async function userCheck(username, password){
    
    let userData = axios.get('http://localhost:3000/userCheck')
    let results = userData.filter(x => {return x.user})
    return results;
}

