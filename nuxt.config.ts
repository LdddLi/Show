// https://nuxt.com/docs/api/configuration/nuxt-config
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  typescript: {
    typeCheck: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['unplugin-icons/nuxt'],
  vite: {
    plugins: [
      Components({
        resolvers: [
          IconsResolver({
            prefix: 'icon',
            customCollections: ['local-icons'],
          }),
        ],
        dirs: ['~/assets/icons'], // 指定要扫描的目录
        extensions: ['svg'], // 扫描的文件扩展名
        deep: true, // 是否递归扫描子目录
        dts: true, // 是否生成 `components.d.ts` 文件
      }),
      Icons({
        customCollections: {
          'local-icons': FileSystemIconLoader('assets/icons', (svg) =>
            svg.replace(/^<svg /, '<svg fill="currentColor" ')
          ),
        },
      }),
    ],
  },
})
