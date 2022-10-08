import { resolve } from 'path'
import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteEslint from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import defineOptions from 'unplugin-vue-define-options/vite'
import { viteMockServe } from 'vite-plugin-mock'
import legacy from '@vitejs/plugin-legacy'
import viteImagemin from 'vite-plugin-imagemin'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'

import type { UserConfig, ConfigEnv } from 'vite'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const { VITE_BASE_URL, VITE_DROP_CONSOLE } = loadEnv(mode, process.cwd())
  const isBuild = command === 'build'

  return {
    base: VITE_BASE_URL,
    esbuild: {
      // target: 'es2015'
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, './src')
        }
      ]
    },
    plugins: [
      vue(),
      viteEslint(),
      defineOptions(), // https://github.com/sxzz/unplugin-vue-define-options
      vueJsx({
        // options are passed on to @vue/babel-plugin-jsx
      }),
      legacy(),
      viteMockServe({
        ignore: /^_/,
        mockPath: 'mock',
        localEnabled: !isBuild,
        prodEnabled: isBuild,
        logger: true,
        injectCode: `
          import { setupProdMockServer } from '../mock/mockProdServer';
          setupProdMockServer();
          `
      }),
      // 图片压缩
      viteImagemin({
        optipng: {
          optimizationLevel: 7
        },
        // 有损压缩配置，有损压缩下图片质量可能会变差
        pngquant: { quality: [0.8, 0.9] },
        // svg 优化
        svgo: {
          plugins: [
            {
              name: 'removeViewBox'
            },
            {
              name: 'removeEmptyAttrs',
              active: false
            }
          ]
        }
      }),
      // 指定拆包策略
      chunkSplitPlugin({
        customSplitting: {
          // 1. 支持填包名。`react` 和 `react-dom` 会被打包到一个名为`render-vendor`的 chunk 里面(包括它们的依赖，如 object-assign)
          'vue-vendor': ['vue', 'vue-router'],
          // 2. 支持填正则表达式。src 中 components 和 utils 下的所有文件被会被打包为`component-util`的 chunk 中
          'components-util': [/src\/components/, /src\/utils/]
        }
      })
    ],
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {},
          javascriptEnabled: true
        }
      }
    },
    server: {
      port: 8888,
      proxy: {
        '/api': {
          target: 'http://jsonplaceholder.typicode.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    optimizeDeps: {
      include: ['vant', '@vant/touch-emulator'],
      exclude: ['vue-demi']
    },
    build: {
      assetsInlineLimit: 8 * 1024,
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: Object.is(VITE_DROP_CONSOLE, 'true')
        }
      }
    }
  }
}
