import { createApp } from 'vue'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import { firebase } from '@firebase/app'
import '@/assets/skeleton.css'
import '@/assets/bg.css'
import '@/assets/global.css'

const app = createApp(App)

const router = createRouter({
	history: createWebHistory(),
	routes,
})

const configOptions = {
	apiKey: 'AIzaSyBKGImVg6czCzo13R5AJW4sdVSAvi8RtQY',
	authDomain: 'reise-8d291.firebaseapp.com',
	databaseURL: 'https://reise-8d291.firebaseio.com',
	projectId: 'reise-8d291',
	storageBucket: 'reise-8d291.appspot.com',
	messagingSenderId: '763832880654',
	appId: '1:763832880654:web:e7790ec71dbf9d8440365f',
	measurementId: 'G-J9WV7T481C',
}

firebase.initializeApp(configOptions)

app.use(router)
app.mount('#app')
