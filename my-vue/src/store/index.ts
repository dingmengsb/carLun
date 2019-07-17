import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from "vuex/dist/logger"
import home from "./modules/home"
import detil from "./modules/detil"
import cheap from "./modules/cheap"
import detailImg from "./modules/detailImg"
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    home,
    detil,
    cheap,
    detailImg
  },
  plugins:[createLogger()],
})
