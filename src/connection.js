const axios = require('axios');

export async function listEntries(){
  
const token = sessionStorage.getItem('token')

return axios.get('http://localhost:3000/listEntries', {
    headers: {authorization:token}
})

}

// async function deleteEntries(client, userName){
//     let result = await client.db("sottlab").collection("logindata").deleteOne({ user: userName })
//     console.log(`${result.deletedCount} document(s) were deleted.`)
// }


