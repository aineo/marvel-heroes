import { Plugin } from 'vite'
import { transform } from 'esbuild'
import chalk from 'chalk'

export function minifyEs(): Plugin {
  const name = 'vite-plugin-minify-es'

  return {
    name,
    renderChunk: {
      order: 'post',
      async handler(code, chunk, outputOptions) {
        if (outputOptions.format === 'es' && chunk.fileName.endsWith('.js')) {
          const result = await transform(code, { minify: true })
          console.log(chalk.bgGreenBright(`\n[${name}]`), chalk.bgGreenBright('Application js was minified'))
          
          return result
        }
        return code
      }
    }
  }
}
