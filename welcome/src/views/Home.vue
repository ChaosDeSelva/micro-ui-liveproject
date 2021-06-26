<template>
  <div class="bg-gray-200 h-screen w-screen">
      <div style="background-color: black; position: relative; z-index: 1;">
        <div class="h-screen bg-cover" style="background-image:url('./images/records-bkg.jpeg'); opacity: 0.3;">
      </div>
      <!--Main-->
      <div style="position: absolute; top:0; width: 100%; z-index: 10;">
        <div class="container pt-48 md:pt-72 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <!--Left Col-->
          <div class="flex flex-col w-full xl:w-2/5 items-start overflow-y-hidden">
            <h1 class="my-4 text-3xl md:text-5xl text-white font-bold leading-tight text-left slide-in-bottom-h1">Micro Music UI</h1>
            <p class="leading-normal text-white md:text-2xl mb-8 text-left slide-in-bottom-subtitle">The only way to stream music online!</p>
            <router-link class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded" tag="button" to="/signin">Sign In</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home',
})
</script>
