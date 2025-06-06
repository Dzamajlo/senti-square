import simpleImportSort from 'eslint-plugin-simple-import-sort';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import unusedImports from 'eslint-plugin-unused-imports';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import { FlatCompat } from '@eslint/eslintrc';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import { fileURLToPath } from 'node:url';
import react from 'eslint-plugin-react';
import globals from 'globals';
import path from 'node:path';
import js from '@eslint/js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const jsxA11yWarnRules = Object.fromEntries(
  Object.entries(jsxA11y.configs.recommended.rules).map(
    ([ruleName, ruleConfig]) => [
      ruleName,
      Array.isArray(ruleConfig) ? ['warn', ...ruleConfig.slice(1)] : 'warn',
    ],
  ),
);

export default [
  {
    ignores: [
      '**/commitlint.config.ts',
      '**/prettier.config.cjs',
      '**/eslint.config.mjs',
      '**/vitest.config.mts',
      '**/vite.config.ts',
      '**/dist',
    ],
  },
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ),
  {
    plugins: {
      react,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
      '@typescript-eslint': typescriptEslint,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        project: 'tsconfig.json',

        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      ...reactRefresh.configs.recommended.rules,
      ...jsxA11yWarnRules,

      /**
       * Enforce using const function expressions instead of function declarations
       * ❌ function doSomething() {}
       * ✅ const doSomething = () => {}
       */
      'func-style': [
        'error',
        'expression',
        {
          allowArrowFunctions: true,
        },
      ],
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
          allowExportNames: ['generateMetadata'],
        },
      ],

      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-console': 'warn',
      'no-else-return': 'warn',
      'unused-imports/no-unused-imports': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../../../**/[a-zA-Z]*'],
              message:
                'This import is forbidden. Use global import instead. (e.g. @/...)',
            },
          ],
        },
      ],

      quotes: [
        2,
        'single',
        {
          avoidEscape: true,
        },
      ],

      'no-mixed-spaces-and-tabs': 0,
      'no-extra-semi': 0,
      'no-shadow': 0,
      radix: 1,
      'no-with': 2,
      'no-return-assign': 1,
      'no-param-reassign': 1,
      'no-fallthrough': 0,
      'dot-notation': 1,
      eqeqeq: 1,
      'no-alert': 2,
      'no-eval': 2,
      'comma-dangle': 0,
      'react/display-name': 0,
      'react/no-access-state-in-setstate': 2,
      'react/no-array-index-key': 1,
      'react/no-did-update-set-state': 1,
      'react/no-redundant-should-component-update': 2,
      'react/no-this-in-sfc': 2,
      'react/no-will-update-set-state': 2,
      'react/prefer-es6-class': [2, 'always'],
      'react/prefer-stateless-function': 2,

      'react/self-closing-comp': [
        2,
        {
          component: true,
          html: true,
        },
      ],

      'react/void-dom-elements-no-children': 2,
      'react/jsx-no-bind': 0,
      'react/jsx-no-useless-fragment': 1,

      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
          children: 'never',
        },
      ],

      'react/jsx-fragments': [1, 'syntax'],
      'react/jsx-pascal-case': 2,
      'react/destructuring-assignment': 0,
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/ban-ts-ignore': 0,
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/adjacent-overload-signatures': 1,
      '@typescript-eslint/camelcase': 0,
      '@typescript-eslint/explicit-member-accessibility': 2,
      '@typescript-eslint/no-inferrable-types': 0,
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-namespace': 0,
      '@typescript-eslint/no-non-null-assertion': 0,

      '@typescript-eslint/no-unused-vars': [
        1,
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/no-use-before-define': 0,
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/strict-boolean-expressions': 0,
      '@typescript-eslint/interface-name-prefix': 0,
      '@typescript-eslint/member-delimiter-style': 0,
      '@typescript-eslint/type-annotation-spacing': 0,
      '@typescript-eslint/no-shadow': 2,
      '@typescript-eslint/no-unsafe-member-access': 0,
      '@typescript-eslint/no-unsafe-assignment': 0,
      '@typescript-eslint/no-unsafe-call': 0,
      '@typescript-eslint/no-unsafe-return': 0,
      '@typescript-eslint/unbound-method': 0,

      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: false,
        },
      ],

      'import/no-cycle': 'warn',
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
    },
  },
];
