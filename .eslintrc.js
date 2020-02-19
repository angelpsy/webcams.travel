module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: "."
    },
    plugins: [
        "@typescript-eslint"
    ],
    // add your custom rules here
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "max-len": ["error", {"code": 120}],
        "quotes": ["error", "double"],
        "eol-last": ["error", "always"],
        "@typescript-eslint/ban-ts-ignore": "off"
    }
};
