import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

const filename = fileURLToPath(import.meta.url);
const baseDir = dirname(filename);
const compat = new FlatCompat({ baseDirectory: baseDir });

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    languageOptions: {
      parser: tsParser
    },
    plugins: {
      "@typescript-eslint": tsPlugin
    },
    rules: {
      "react-hooks/exhaustive-deps": "off",
      "no-console": ["warn", { allow: ["error"] }],
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "react/jsx-filename-extension": ["error", { extensions: [".tsx", ".ts"] }],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: ["function", "variable"],
          format: ["StrictPascalCase", "strictCamelCase", "UPPER_CASE"]
        }
      ]
    }
  }
];

eslintConfig.ignores = ["node_modules/", ".next/", "out/", "dist/", "*.config.js", "*.config.mjs"];

export default eslintConfig;
