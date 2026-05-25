import { fileURLToPath, URL } from 'node:url'

import { sentryVitePlugin } from '@sentry/vite-plugin'
import { visualizer } from 'rollup-plugin-visualizer'
// import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'
// @ts-ignore
import veauryVitePlugins from 'veaury/vite/index.js'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        /* vue(), vueJsx(),  */
        vueDevTools(),
        veauryVitePlugins({ type: 'vue' }),
        visualizer({
            open: true
        }),
        sentryVitePlugin({
            org: 'heyi-o0',
            project: 'javascript-vue',
            authToken:
                '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'
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        port: 3000,
        proxy: {
            '/charts': {
                target: 'https://echarts.apache.org',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/charts/, '')
            }
        }
    },
    build: {
        sourcemap: true,
        rollupOptions: {
            output: {
                // manualChunks: {
                //     charts: ['echarts', 'd3', 'zrender']
                // }
                // manualChunks(id) {
                //     if (/node_modules/.test(id)) {
                //         return 'vender'
                //     }
                // }
                manualChunks(id) {
                    // 这样写最大的问题是，将动态 chunk 也被打进来了，动态 chunk 失效了  vite-plugin-split-chunk（了解这个）
                    if (/(echarts|d3|zrender)/.test(id)) {
                        return 'charts'
                    }
                }
            }
        }
    }
})
