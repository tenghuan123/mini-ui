/** @type {import("eslint").Linter.Config} */
export default {
  root: true,
  extends: ["@repo/eslint-config/react-internal.js", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
};
