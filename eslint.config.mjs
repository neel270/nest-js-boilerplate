import tseslint from "typescript-eslint";
import globals from "globals";
import eslint from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginImport from "eslint-plugin-import";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.strict,
  {
    files: ["**/*.ts", "**/*.mts"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      import: eslintPluginImport,
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-member-accessibility": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/no-unsafe-argument": "warn",
      "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "interface",
          format: ["PascalCase"],
        },
        {
          selector: "class",
          format: ["PascalCase"],
        },
        {
          selector: "method",
          format: ["camelCase"],
        },
      ],
      "no-param-reassign": "error",
      "no-return-await": "error",
      "no-console": "warn",
      eqeqeq: "error",
      "no-unused-expressions": "error",
      "no-var": "error",
      "prefer-const": "error",
      "max-lines-per-function": ["error", 50],
      complexity: ["error", 10],
      // Import order rule
      "import/order": [
        "error",
        {
          groups: [
            "builtin", // Built-in modules (e.g., 'fs', 'path')
            "external", // NPM packages (e.g., 'express', 'lodash')
            "internal", // Your internal custom imports (e.g., '@/utils')
            "parent", // Parent directory imports
            "sibling", // Sibling directory imports
            "index", // Index imports
          ],
          pathGroups: [
            {
              pattern: "@/**", // Define internal patterns (if you use aliases)
              group: "internal",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            order: "asc", // Sort alphabetically
            caseInsensitive: true, // Case-insensitive sorting
          },
          "newlines-between": "always", // Ensure newlines between import groups
        },
      ],
    },
  },
  {
    ignores: [
      "dist/",
      "node_modules/",
      "uploads",
      "transactions/",
      "*.mjs",
      "*.js",
      "*.cjs",
      "*.json",
      ".husky/install.mjs",
      "commitlint.config.ts",
      "jest.config.ts",
    ],
  },
  eslintPluginPrettierRecommended,
];
