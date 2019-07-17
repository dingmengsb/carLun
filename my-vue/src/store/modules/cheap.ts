import {cheap,cityList,cheapCon} from "@/server/home"
const state={
  cityIds:'',
  conList:''
};

const getters={

};

const actions={
    async cheapList({commit}:any,payload:any){
        let data = await cheap(payload);

    },
    async city({commit}:any,payload:any){
        let data = await cityList(payload);
       
        commit('cityId',data.data)
    },
    async ConList({commit}:any,payload:any){
        let data = await cheapCon(payload);
     
        commit('Conlis',data.data)
    },
};

const mutations={
    cityId(state:any,payload:any){
        return state.cityIds = payload
    },
    Conlis(state:any,payload:any){
        return state.conList = payload
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
