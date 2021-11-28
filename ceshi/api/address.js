import request from "../utils/requestMock"
import requestRel from "../utils/request"
export function getAddress(params, callback) {
    request("/getAddress", params, callback)
}
export function addAddress(params, callback) {
    request("/addAddress", params, callback)
}


export function getSheng(params, callback) {
    requestRel("https://binstd.apistd.com/area/province?key=6D2d4Tj6jHqHQYLfsFdeMN8yB", params, callback, "POST", false)
}
export function getShi(id,params, callback) {
   requestRel("https://binstd.apistd.com/area/city?key=6D2d4Tj6jHqHQYLfsFdeMN8yB&parentid="+id,params, callback, "POST", false)
}
export function getqu(id,params,callback) {
    requestRel("https://binstd.apistd.com/area/town?key=6D2d4Tj6jHqHQYLfsFdeMN8yB&parentid="+id,params,callback,"POST",false)
}




