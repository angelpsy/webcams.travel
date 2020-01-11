module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        parser: "babel-eslint",
        sourceType: "module",
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    plugins: [],
    // add your custom rules here
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "max-len": ["error", {"code": 120}],
        "quotes": ["error", "double"],
        "eol-last": ["error", "always"],
    }
};
