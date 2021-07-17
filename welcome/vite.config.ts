import vue from '@vitejs/plugin-vue'
const path = require('path')

export default {
  base: '',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [vue()],
}