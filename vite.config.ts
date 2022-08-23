import { defineConfig } from 'vite'
import vitePluginImp from 'vite-plugin-imp'
import { ViteAliases } from 'vite-aliases'
import reactJsx from 'vite-react-jsx'
import { join } from 'node:path'

export default defineConfig({
  define: {
    NODE_ENV: `"${process.env.NODE_ENV}"`,
  },
  server: {
    port: 5173,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: { '/^~/': join(__dirname, './node_modules/') },
  },
  plugins: [
    reactJsx(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          esModule: true,
          style: (name) => {
            return `antd/es/${name}/style/index`
          },
        },
      ],
    }),
  ],
})
