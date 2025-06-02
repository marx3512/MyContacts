import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.node } },
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    rules: {
      semi: ['error', 'always'], // exige ponto e vírgula
      quotes: ['error', 'single', { avoidEscape: true }], // aspas simples
      indent: ['error', 2], // dois espaços de indentação
      'comma-dangle': ['error', 'always-multiline'], // vírgula no final de listas múltiplas
      'object-curly-spacing': ['error', 'always'], // espaços dentro de chaves
      'array-bracket-spacing': ['error', 'never'],

      'react/react-in-jsx-scope': 'off', // desnecessário com React 17+
    },
  },
]);
