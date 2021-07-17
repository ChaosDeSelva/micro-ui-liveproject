<template>
  <div class="bg-gray-200 h-screen w-screen">
    <div class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
      <div
        class="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0"
        style="height: 500px"
      >
        <div class="flex flex-col w-full md:w-1/2 p-4">
          <div class="flex flex-col flex-1 justify-center mb-8">
            <h1 class="text-4xl text-center font-thin">
              Welcome!
            </h1>
            <div class="w-full mt-4">
              <form
                class="form-horizontal w-3/4 mx-auto"
                @submit.prevent="onSubmit"
              >
                <div class="flex flex-col mt-4">
                  <input
                    id="email"
                    v-model="email"
                    type="email"
                    class="flex-grow h-8 px-2 border rounded border-grey-400"
                    name="email"
                    required
                    placeholder="Email"
                  >
                </div>
                <div class="flex flex-col mt-4">
                  <input
                    id="password"
                    v-model="password"
                    type="password"
                    class="flex-grow h-8 px-2 rounded border border-grey-400"
                    name="password"
                    required
                    placeholder="Password"
                  >
                </div>
                <div class="flex flex-col mt-8">
                  <div
                    v-if="hasErrors"
                    class="pb-3"
                  >
                    <ErrorMessage
                      title="Error"
                      :message="message"
                    />
                  </div>
                  <button
                    type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                  >
                    Sign In
                  </button>
                </div>
              </form>
              <div class="text-center mt-4">
                <router-link
                  class="no-underline hover:underline text-blue-dark text-xs"
                  to="/forgot-password"
                  tag="a"
                >
                  Forgot Your Password?
                </router-link>
              </div>
              <div class="text-center mt-4">
                <router-link
                  class="no-underline hover:underline text-blue-dark text-xs"
                  to="/create-account"
                  tag="a"
                >
                  Create an Account
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div
          class="hidden md:block md:w-1/2 rounded-r-lg"
          :style="`background-image: url(${bkgImgUrl}); background-size: cover; background-position: center center;`"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import bkgImgUrl from '@/assets/images/records-bkg.jpeg'
import { ref, defineComponent, inject } from 'vue'
import * as Realm from 'realm-web'
import ErrorMessage from '../components/ErrorMessage.vue'

interface Router {
  navigateTo: Function
}

interface BootStrap {
  router: Router
}

declare global {
    interface Window {
      bootstrap: BootStrap;
    }
}

export default defineComponent({
  name: 'Signin',

  components: {
    ErrorMessage,
  },

  setup: () => {
    const email = ref('')
    const password = ref('')
    const hasErrors = ref(false)
    const message = ref('')
    const realmApp: Realm.App = inject('RealmApp')!

    async function loginEmailPassword(email: string, password: string) {
      // Create an anonymous credential
      const credentials = Realm.Credentials.emailPassword(email, password)
      try {
        // Authenticate the user
        const user: Realm.User = await realmApp.logIn(credentials)
        // `App.currentUser` updates to match the logged in user
        return user
      } catch(err) {
        hasErrors.value = true
        message.value = err.error
      }
    }

    function onSubmit() {
      if (email.value && password.value) {
        loginEmailPassword(email.value, password.value).then(user => {
          if (user) {
            window.bootstrap.router.navigateTo('/play')
          } else {
            hasErrors.value = true
          }
        })
      } else {
        hasErrors.value = true
        message.value = 'All fields are required.'
      }
    }

    return {
      message,
      hasErrors,
      email,
      password,
      onSubmit,
      bkgImgUrl,
     }
  },
})
</script>
