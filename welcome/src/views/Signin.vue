<template>
  <div class="bg-gray-200 h-screen w-screen">
      <div class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
          <div class="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0" style="height: 500px">
              <div class="flex flex-col w-full md:w-1/2 p-4">
                  <div class="flex flex-col flex-1 justify-center mb-8">
                      <h1 class="text-4xl text-center font-thin">Welcome!</h1>
                      <div class="w-full mt-4">
                          <form class="form-horizontal w-3/4 mx-auto" @submit.prevent="onSubmit">
                              <div class="flex flex-col mt-4">
                                  <input v-model="email" id="email" type="text" class="flex-grow h-8 px-2 border rounded border-grey-400" name="email" required placeholder="Email">
                              </div>
                              <div class="flex flex-col mt-4">
                                  <input v-model="password" id="password" type="password" class="flex-grow h-8 px-2 rounded border border-grey-400" name="password" required placeholder="Password">
                              </div>
                              <div class="flex flex-col mt-8">
                                  <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                                      Sign In
                                  </button>
                              </div>
                          </form>
                          <div class="text-center mt-4">
                              <router-link class="no-underline hover:underline text-blue-dark text-xs" to="/forgot" tag="a">
                                  Forgot Your Password?
                              </router-link>
                          </div>
                          <div class="text-center mt-4">
                              <router-link class="no-underline hover:underline text-blue-dark text-xs" to="/create" tag="a">
                                  Create an Account
                              </router-link>
                          </div>
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
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'Signin',
  setup: () => {
    const email = ref('')
    const password = ref('')

    function onSubmit() {
      console.log(email.value, password.value)
    }

    return {
      email,
      password,
      onSubmit,
      bkgImgUrl,
     }
  }
})
</script>
