import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from "firebase"

const configOptions = {
	apiKey: "AIzaSyBKGImVg6czCzo13R5AJW4sdVSAvi8RtQY",
	authDomain: "reise-8d291.firebaseapp.com",
	databaseURL: "https://reise-8d291.firebaseio.com",
	projectId: "reise-8d291",
	storageBucket: "reise-8d291.appspot.com",
	messagingSenderId: "763832880654",
	appId: "1:763832880654:web:e7790ec71dbf9d8440365f",
	measurementId: "G-J9WV7T481C"
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