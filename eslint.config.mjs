import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  {
    env: {
      browser: true,
      node: true,
    },
  },
  {
    overrides: [
      {
        files: ["tests/**/*"],
        env: {
          jest: true,
        },
      },
    ],
  },
];
