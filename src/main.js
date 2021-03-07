import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

//Plugins
import vuetify from "./plugins/vuetify"
import toasted from"./plugins/toasted"

//CSS
import "./assets/css/global.css"

Vue.config.productionTip = false

Vue.prototype.$vuetifyInstance = vuetify

new Vue({
	router,
	store,
	vuetify,
	toasted,
	render: h => h(App),
}).$mount('#app')
