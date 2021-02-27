import Vue from 'vue'
import App from './App.vue'
import router from './router'

//Plugins
import vuetify from './plugins/vuetify'

//CSS
import './assets/css/global.css'

Vue.config.productionTip = false

Vue.prototype.$vuetifyInstance = vuetify

new Vue({
	router,
	vuetify,
	render: h => h(App),
}).$mount('#app')
