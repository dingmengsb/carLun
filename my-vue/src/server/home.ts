import request from "@/util/request";
export function addLists(){
  return request.post("/v2-car-getMasterBrandList.html")
}
export function rightUpdate(payload:any){
  return request.get(`v2-car-getMakeListByMasterBrandId.html?MasterID=${payload * 1}&_1563195024011`)
}

export function getDetiles(payload:any){
   return request.get(`v2-car-getInfoAndListById.html?SerialID=${payload}`)
}

export function cheap(payload:any){
  console.log('cheap',payload)
  return request.get(`h1-statis-push.html?msg=${{"type":"询问底价","openudid":"3d014272-e724-671a-b4de-4092049ad4ee","app":"","refer":null}}&&_=1563276200562`)
}
export function cityList(payload:any){
  console.log('cityList',payload)
  return request.get(`location-client.html?_1563276200564`)
}
export function cheapCon(payload:any){
  console.log('cheapCon',payload)
  return request.get(`v2-dealer-alllist.html?carId=${payload.carId}&cityId=${payload.cityId}&_1563276200625`)
}
export function detailImg(payload:any){
  if(payload.ColorID){
      return request.get('/v2-car-getImageList.html?SerialID='+payload.SerialID+'&ColorID='+payload.ColorID)
  }else{
      return request.get('/v2-car-getImageList.html?SerialID='+payload.SerialID)
  }
  
}
export function more(payload:any){
  return request.get('/v2-car-getCategoryImageList.html?SerialID='+payload.SerialID+'&ImageID='+payload.ImageID+'&Page='+payload.Page+'&PageSe='+payload.PageSe)
}
export function cols(payload:any){
  return request.get('v2-car-getModelImageYearColor.html?SerialID='+payload)
}
export function cars(payload:any){
  return request.get('v2-car-getInfoAndListById.html?SerialID='+payload)
}
