import instance from "./util/axiosutil";



function token() {
  const verify = sessionStorage.getItem("token");
  return verify;
}

export async function listOutlines(request) {
  // const token = sessionStorage.getItem("token");

  return instance.post("/listOutlines", request, {
    headers: { authorization: token() },
  });
}

export async function listEntries() {
  // const token = sessionStorage.getItem("token");

  return instance.get("/listEntries", {
    headers: { authorization: token() },
  });
}

export async function createEntry(request) {
  // const token = sessionStorage.getItem("token");
  
  return instance.post("/createEntry", request, {
    headers: { authorization: token() },
  });
}

export async function createScienceEntry(request) {
  return instance.post("/createScienceEntry", request, {
    headers: { authorization: token() },
  });
}

export async function listScienceEntries() {
  // const token = sessionStorage.getItem("token");

  return instance.get("/listScienceEntries", {
    headers: { authorization: token() },
  });
}

export async function editData(request) {
  return instance.put("/editData", request, {
    headers: { authorization: token() },
  });
}

export async function editScienceData(request) {
  return instance.put("/editScienceData", request, {
    headers: { authorization: token() },
  });
}

export async function userSignUp(request) {
  return instance.post("/signup", request, {
    headers: { authorization: token() },
  });
}

export async function getAccount(request, token) {
  const accountdataresponse = await instance.post("/getaccount", request, {
    headers: { authorization: token },
  });
  return accountdataresponse.data;
}

export async function getNotifications(request) {
 const newnotifications = await instance.post('getnotifications' + 'new', {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.body.newNotifications)
})
return newnotifications
}

// async function deleteEntries(client, userName){
//     let result = await client.db("sottlab").collection("logindata").deleteOne({ user: userName })
//     console.log(`${result.deletedCount} document(s) were deleted.`)
// }
