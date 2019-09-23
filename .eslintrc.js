
// https://github.com/benmosher/eslint-plugin-import/issues/1285#issuecomment-466212438
const jsExtensions = ['.js', '.jsx'];
const tsExtensions = ['.ts', '.tsx'];
const allExtensions = jsExtensions.concat(tsExtensions);

module.exports = {
      globals: {
        __BROWSER__: true,
        __SERVER__: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      "jsx": true,
      "useJSXTextNode": true,
      "sourceType": "module",
      "ecmaFeatures": {
        "modules": true
      }
    },
    settings: {
      react:  {
        version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
      },
      'import/extensions': allExtensions,
      'import/parsers': {
        '@typescript-eslint/parser': tsExtensions,
        'import/resolver': {
            node: {
              // paths: paths.resolveModules,
              'extensions': allExtensions
            },
        }
    },
    extends: [
      // "plugin:@typescript-eslint/recommended",
      // "prettier",
      // "prettier/@typescript-eslint",
      'prettier',
      "eslint-config-prettier",
      'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
      'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
      'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      "plugin:react/recommended"
    ],
    plugins: ["@typescript-eslint", "react-hooks"],
    rules: {
      "import/newline-after-import": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "sort-imports": ["error", {
        "ignoreCase": true,
        "ignoreDeclarationSort": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["all", "multiple", "single", "none"]
    }]
    },
  }
  }