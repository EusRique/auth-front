import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//Modules
import User from "@/store/User";

export default new Vuex.Store({
  modules: {
    User
  }
})