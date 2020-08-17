import instance from "./util/axiosutil";

const token = sessionStorage.getItem("token");

export async function listEntries() {
  // const token = sessionStorage.getItem("token");

  return instance.get("/listEntries", {
    headers: { authorization: token },
  });
}

export async function createEntry(request) {
  // const token = sessionStorage.getItem("token");
   
  return instance.post("/createEntry", request, {
    headers: { authorization: token },
  });
}

export async function createScienceEntry(request){
  
  return instance.post("/createScienceEntry", request, {
    headers: {authorization: token },
  });
}

export async function listScienceEntries(){
  // const token = sessionStorage.getItem("token");

  return instance.get("/listScienceEntries", {
    headers: { authorization: token }
  })
}

export async function editData(request){
 console.log(request)
  return instance.put("/editData", request, {
    headers: {authorization: token}
  })
}

export async function userSignUp(request){

  return instance.post("/signup", request, {
    headers: {authorization: token}
  })
}

// async function deleteEntries(client, userName){
//     let result = await client.db("sottlab").collection("logindata").deleteOne({ user: userName })
//     console.log(`${result.deletedCount} document(s) were deleted.`)
// }
