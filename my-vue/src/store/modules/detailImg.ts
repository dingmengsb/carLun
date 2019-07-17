import {detailImg,more,cols,cars} from '@/server/home.ts'
const state={
    data:[],
    list:[],
    moreImg:[],
    colors:[],
    cars:[]
};

const getters={

};

const actions={
    async detail({commit}:any,payload:any){
        let data = await detailImg(payload)
        commit('details',data.data)
    },
    async more({commit}:any,payload:any){
        let data = await more(payload)
        commit('moreImg',data.data)
    },
    async color({commit}:any,payload:any){
        return new Promise(async (resolve,reject)=>{
            let data = await cols(payload)
            commit('colors',data.data)
        })
    },
    async car({commit}:any,payload:any){
        return new Promise(async (resolve,reject)=>{
            let data = await cars(payload)
            console.log(data.data.list)
            commit('cars',data.data.list)
        })
    }
};

const mutations={
    details(state:any,payload:any){
        return state.data = payload
    },
    moreImg(state:any,payload:any){
        console.log(payload)
        return state.moreImg = payload
    },
    rightUpdata(state:any,payload:any){
        return state.list = payload
    },
    colors(state:any,payload:any){
        return state.colors = payload
    },
    cars(state:any,payload:any){
        return state.cars = payload
    }
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
