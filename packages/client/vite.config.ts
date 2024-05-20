import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
/**
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [vue(), WindiCSS()],
  resolve: {
    alias: {
      '@xotoboil-monorepo-turbo/ui': '@xotoboil-monorepo-turbo/ui/src/main.ts',
    },
    dedupe: ['vue'],
  },
  optimizeDeps: {
    exclude: ['@xotoboil-monorepo-turbo/ui'],
  },
}
