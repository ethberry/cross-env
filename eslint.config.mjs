import babelParser from "@babel/eslint-parser";

import commonRules from "@ethberry/eslint-config/rules/common.mjs";
import promiseRules from "@ethberry/eslint-config/rules/promise.mjs";
import reactRules from "@ethberry/eslint-config/rules/react.mjs";
import nodeRules from "@ethberry/eslint-config/rules/node.mjs";
import prettierRules from "@ethberry/eslint-config/rules/prettier.mjs";
import jestRules from "@ethberry/eslint-config/tests/jest.mjs";

export default [
  {
    ignores: ["**/dist"],
  },

  {
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        sourceType: "script",
        requireConfigFile: false,
        babelOptions: {
          babelrc: false,
          configFile: false,
          presets: ["@babel/preset-env"],
        },
      },
    },
  },

  ...commonRules,
  ...nodeRules,
  ...promiseRules,
  ...reactRules,
  ...jestRules,
  ...prettierRules,
];
