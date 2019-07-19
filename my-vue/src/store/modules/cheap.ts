import {cheap,cityList,cheapCon,citylists,cityRight,setBaos} from "@/server/home"
const state={
  cityIds:'',
  conList:'',
  cityList:[]=[],
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
    async citylist({commit}:any,payload:any){
        let data= await citylists(payload);
        commit("citylist",data.data)
        return data.data;
    },
    async cityRights({commit}:any,payload:any){
       let data =await cityRight(payload);
       return data.data;
    },
    async setBao({commit}:any,payload:any){
        let data= await setBaos(payload);
        return data
    }
};

const mutations={
    cityId(state:any,payload:any){
        return state.cityIds = payload
    },
    Conlis(state:any,payload:any){
        return state.conList = payload
    },
    citylist(state:any,payload:any){
        return state.cityList=payload;
    }
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
