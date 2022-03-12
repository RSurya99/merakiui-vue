import vue from '@vitejs/plugin-vue'
import css from 'rollup-plugin-css-only'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default [
  {
    input: 'src/index.js',
    output: [
      {
        format: 'esm',
        file: 'dist/library.mjs'
      },
      {
        format: 'cjs',
        file: 'dist/library.js'
      }
    ],
    plugins: [
      css(),
      vue({}),
      peerDepsExternal()
    ]
  }
]