<template>
  <div class="bg-gray-200 h-screen w-screen">
      <div class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
          <div class="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0" style="height: 500px">
              <div class="flex flex-col w-full md:w-1/2 p-4">
                  <div class="flex flex-col flex-1 justify-center mb-8">
                      <h1 class="text-4xl text-center font-thin">Forgot Password!</h1>
                      <div class="w-full mt-4">
                          <form class="form-horizontal w-3/4 mx-auto" @submit.prevent="onSubmit">
                              <div class="flex flex-col mt-4">
                                  <input v-model="email" id="email" type="email" class="flex-grow h-8 px-2 border rounded border-grey-400" name="email" required placeholder="Email">
                              </div>
                              <div class="flex flex-col mt-8">
                                  <div v-if="hasErrors" class="pb-3">
                                    <ErrorMessage title="Error" :message="message" />
                                  </div>
                                  <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                                      Send Recovery Email
                                  </button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
              <div class="hidden md:block md:w-1/2 rounded-r-lg" :style="`background-image: url(${bkgImgUrl}); background-size: cover; background-position: center center;`"></div>
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import bkgImgUrl from '@/assets/images/records-bkg.jpeg'
import { ref, defineComponent, inject } from 'vue'
import ErrorMessage from '../components/ErrorMessage.vue'
import { useRouter } from 'vue-router'
import * as Realm from 'realm-web'

export default defineComponent({
  name: 'Signin',

  components: {
    ErrorMessage,
  },

  setup: () => {
    const router = useRouter()
    const email = ref('')
    const hasErrors = ref(false)
    const message = ref('')
    const realmApp: Realm.App = inject('RealmApp')!

    async function forgotPassword(email: string) {
      // Create an anonymous credential
      try {
        await realmApp.emailPasswordAuth.sendResetPasswordEmail(email);
      } catch(err) {
        hasErrors.value = true
        message.value = err.error
      }
    }

    function onSubmit() {
      if (email.value) {
        forgotPassword(email.value).then(async () => {
          await router.push('/signin')
        })
      } else {
        hasErrors.value = true
        message.value = 'All fields are required.'
      }
    }

    return {
      email,
      message,
      hasErrors,
      onSubmit,
      bkgImgUrl,
     }
  }
})
</script>
