// import { UserConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import ts from 'rollup-plugin-typescript2'

// export default <UserConfig>{
//   plugins: [
//     vue(),
//     {
//       apply: 'build',
//       ...ts({
//         tsconfig: './tsconfig.build.json',
//         useTsconfigDeclarationDir: true,
//       }),
//     },
//   ],
//   esbuild: false,
//   build: {
//     lib: {
//       entry: 'src/main.ts',
//       name: 'UI',
//     },
//     minify: false,
//     rollupOptions: {
//       external: ['vue'],
//       output: {
//         banner: `
//         /**
//          *  Copyright ${new Date(Date.now()).getFullYear()} Thorsten Luenborg 
//          *  @license MIT
//         **/
//         `,
//         exports: 'named',
//         globals: {
//           vue: 'Vue',
//         },
//       },
//     },
//   },
// }

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from "vite-plugin-dts";


export default defineConfig({
  plugins: [vue(), dts({ insertTypesEntry: true, outputDir: "./dist/__types__" }),],
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'UI',
    },
    minify: false,
  }
})

