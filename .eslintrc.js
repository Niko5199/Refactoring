module.exports = {
    env: {
        browser: true,
        es2021: true,
        commonjs: true,
        jest: true,
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
    },
};
