import instance from './util/axiosutil'

export async function listEntries(){
  
const token = sessionStorage.getItem('token')

return instance.get('/listEntries', {
    headers: {authorization:token} 
})

}

// async function deleteEntries(client, userName){
//     let result = await client.db("sottlab").collection("logindata").deleteOne({ user: userName })
//     console.log(`${result.deletedCount} document(s) were deleted.`)
// }


