<template>
  <div
    class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
    role="alert"
  >
    <strong class="font-bold">{{ title }}</strong>
    <span class="block capitalize-first">{{ message }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorMessage',
  props: {
    title: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
  },
})
</script>