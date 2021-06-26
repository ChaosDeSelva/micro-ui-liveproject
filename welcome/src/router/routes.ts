import Home from '../views/Home.vue'
import Signin from '../views/Signin.vue'
import NotFound from '../views/NotFound.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/signin', component: Signin },
  { path: '/:pathMatch(.*)*', component: NotFound },
]
