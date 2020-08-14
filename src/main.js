import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from "firebase"

const configOptions = {
	apiKey: "AIzaSyBm8FD1icuVyrhoRPjwhuWWQXJXiYgvsqI",
	authDomain: "cura-64684.firebaseapp.com",
	databaseURL: "https://cura-64684.firebaseio.com/",
	projectId: "cura-64684",
	storageBucket: "cura-64684.appspot.com",
	messagingSenderId: "862840094498",
	appId: "1:862840094498:web:6e57b96b9b0e801cc76f7b"
};

Vue.config.productionTip = false


import '@/assets/skeleton.css';
import '@/assets/bg.css';
import '@/assets/global.css';

firebase.initializeApp(configOptions);


new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')