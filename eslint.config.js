import baseConfig from "@citrus-linting/eslint-config"
import typescriptConfig from "@citrus-linting/eslint-config/typescript"
import anyParser from "any-eslint-parser"
import prettierConfig from "eslint-config-prettier"
import prettier from "eslint-plugin-prettier"

const prettierRules = {
    "prettier/prettier": 2,
    "arrow-body-style": 0,
    "prefer-arrow-callback": 0
}

/** @type {import("eslint").Linter.Config[]} */
const config = [
    {
        ignores: ["pnpm-lock.yaml", "**/dist"]
    },
    {
        plugins: { prettier }
    },
    {
        files: ["**/*.?([cm])js", "**/*.ts"],
        rules: {
            ...prettierRules
        }
    },
    ...baseConfig,
    ...typescriptConfig,
    {
        files: ["**/*.json"],
        languageOptions: {
            parser: anyParser
        },
        rules: {
            "prettier/prettier": 2
        }
    },
    {
        files: ["**/*.y?(a)ml"],
        languageOptions: {
            parser: anyParser
        },
        rules: {
            "prettier/prettier": 2
        }
    },
    {
        files: ["**/*.md"],
        languageOptions: {
            parser: anyParser
        },
        rules: {
            "prettier/prettier": [2, { parser: "markdown" }]
        }
    },
    {
        files: ["**/*.html"],
        languageOptions: {
            parser: anyParser
        },
        rules: {
            "prettier/prettier": [2, { parser: "html" }]
        }
    },
    prettierConfig
]

export default config
