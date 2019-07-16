import request from "@/util/request";
export function addLists(){
  return request.post("/v2-car-getMasterBrandList.html")
}
export function rightUpdate(payload:any){
  return request.get(`v2-car-getMakeListByMasterBrandId.html?MasterID=${payload * 1}&_1563195024011`)
}