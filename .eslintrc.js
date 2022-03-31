module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ["airbnb-base", "prettier"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        "no-console": "off",
        "no-alert": "off",
        "linebreak-style": "off",
        "no-plusplus": "off",
        "no-useless-escape": "off",
        indent: [2, 4, { SwitchCase: 1 }],
        "max-len": ["error", { ignoreComments: true }],
        "import/extensions": [0, { js: "always" }],
    },
};
