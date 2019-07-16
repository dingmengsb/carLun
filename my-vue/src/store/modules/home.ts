import {addLists,rightUpdate} from "@/server/home"
const state={
  list:[],
  arrs:[],
  num:0,
  lists:[],
  choos:false,
};

const getters={

};

const actions={
  async addList({commit}:any,payload:any){
     let data= await addLists();
     let arr:String[]=[];
     data.data.forEach((item:any)=>{
        item.Spelling=item.Spelling.substr(0,1)
        arr.push(item.Spelling);
      });
      arr=Array.from(new Set(arr))
      commit("addLisasync",arr);
      commit("addLisync",data.data);
  },
  async updataNum({commit}:any,payload:any){
    commit('updataNums',payload)
  },
  async rightUp({commit}:any,payload:any){
        let data = await rightUpdate(payload);
        commit('rightUpdata',data.data)
        commit('choos',true)
 },
};

const mutations={
  addLisync(state:any,payload:any){
    return state.list=payload
  },
  addLisasync(state:any,payload:any){
    return state.arrs=payload
  },
  updataNums(state:any,payload:any){
    return state.num=payload
  },
  rightUpdata(state:any,payload:any){
   return state.lists = payload
},
choos(state:any,payload:any){
  return state.choos=payload;
}
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
