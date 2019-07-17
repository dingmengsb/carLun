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
        console.log('cheap',data)
    },
    async city({commit}:any,payload:any){
        let data = await cityList(payload);
        console.log('citylist',data)
        commit('cityId',data.data)
    },
    async ConList({commit}:any,payload:any){
        let data = await cheapCon(payload);
        console.log('ConList',data.data)
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
