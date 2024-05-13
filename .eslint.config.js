import pluginVue from 'eslint-plugin-vue'
import tsEslint from 'typescript-eslint'

export default [
  ...tsEslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/require-prop-types': 'off',
    }
  }
]
