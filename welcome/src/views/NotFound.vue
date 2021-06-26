<template>
    <div class="bg-gray-200 h-screen w-screen">
        <div class="flex flex-wrap content-start justify-center w-screen pt-48 md:pt-56 text-9xl md:text-18xl">
            <div>4</div>
            <div><img src="images/404.jpeg" alt="0" class="image--size"></div>
            <div>4</div>
        </div>
        <div class="flex flex-wrap content-start justify-center w-screen pt-12 md:pt-18">
            <router-link to="/" tag="button" class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                Get Me Out Of Here!
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NotFound',
})
</script>

<style scoped>
    .image--size {
        max-width: 300px;
        height: auto;
    }

    @media only screen and (max-width: 600px) {
        .image--size {
            max-width: 140px;
            height: auto;
        }
    }
</style>
