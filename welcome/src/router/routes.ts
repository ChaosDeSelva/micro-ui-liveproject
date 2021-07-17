import Home from '../views/Home.vue'
import Signin from '../views/Signin.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import CreateAccount from '../views/CreateAccount.vue'
import NotFound from '../views/NotFound.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/signin', component: Signin },
  { path: '/forgot-password', component: ForgotPassword },
  { path: '/create-account', component: CreateAccount },
  { path: '/:pathMatch(.*)*', component: NotFound },
]
