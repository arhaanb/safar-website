import Home from './views/Home.vue'
import About from './views/About.vue'
import Register from './views/Register.vue'
import NotFound from './views/404.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/*',
    name: '404',
    component: NotFound,
  },
]
