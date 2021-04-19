import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginHtml from './plugins/vite-plugin-html'

export default defineConfig({
  plugins: [
    vue(),
    vitePluginHtml({
      cdn: {
        css: [
          '//cdnjs.cloudflare.com/ajax/libs/vant/3.0.11/index.min.css',
          '//cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css',
        ],
        js: [
          '//cdnjs.cloudflare.com/ajax/libs/vue/3.0.11/vue.global.prod.js',
          '//cdnjs.cloudflare.com/ajax/libs/vue-router/4.0.5/vue-router.global.min.js',
          '//cdnjs.cloudflare.com/ajax/libs/vuex/4.0.0/vuex.global.min.js',
          '//cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js',
          '//cdnjs.cloudflare.com/ajax/libs/vant/3.0.11/vant.min.js',
        ],
      },
    }),
  ]
})
