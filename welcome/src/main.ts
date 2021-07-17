import { createApp } from 'vue'
import * as Realm from 'realm-web'
import App from './App.vue'
import router from './router'
import '../index.css'

const app = createApp(App)
app.use(router)

const realmApp: Realm.App = new Realm.App({ id: import.meta.env.VITE_REALM_KEY });
// app.config.globalProperties.realmApp = new Realm({ id: process.env.REALM_KEY! })
app.provide('RealmApp', realmApp)

app.mount('#app')