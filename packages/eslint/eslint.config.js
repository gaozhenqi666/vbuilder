import js from '@eslint/js'
import importSort from 'eslint-plugin-simple-import-sort'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import vueEslintParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'
// import path from 'node:path'

export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                computed: 'readonly',
                defineEmits: 'readonly',
                defineExpose: 'readonly',
                defineProps: 'readonly',
                onMounted: 'readonly',
                onUnmounted: 'readonly',
                reactive: 'readonly',
                ref: 'readonly',
                shallowReactive: 'readonly',
                shallowRef: 'readonly',
                toRef: 'readonly',
                toRefs: 'readonly',
                watch: 'readonly',
                watchEffect: 'readonly'
            }
        },
        name: 'xxx/vue/setup',
        plugins: {
            vue: pluginVue
        }
    },
    {
        files: ['**/*.{ts,tsx,vue}' /* '*.js' */],
        ignores: [],
        rules: {
            ...js.configs.recommended.rules,
            ...pluginVue.configs['flat/recommended'].rules,
            'no-unused-vars': 'error',
            'no-undef': 'warn',
            'no-console': 'error',
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            'vue/valid-define-emits': 'error'
        },
        languageOptions: {
            parser: vueEslintParser,
            parserOptions: {
                extraFileExtensions: ['.vue'],
                // ecmaVersion: 'latest',
                ecmaFeatures: {
                    jsx: true
                },
                parser: tsParser,
                sourceType: 'module'
                // project: [
                //     path.join(import.meta.dirname, 'tsconfig.eslint.json'),
                //     path.join(import.meta.dirname, '../../**/*/tsconfig.json')
                // ],
                // // project: path.join(import.meta.dirname, 'tsconfig.eslint.json'),
                // tsconfigRootDir: import.meta.dirname
            }
        },
        plugins: { vue: pluginVue, 'simple-import-sort': importSort }
    }
]
