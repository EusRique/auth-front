import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

//Modules
import User from "@/store/User";
import Snackbar from "@/store/Snackbar";

export default new Vuex.Store({
  modules: {
    User,
    Snackbar
  }
})