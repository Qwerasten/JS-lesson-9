module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'linebreak-style': 'off',
        'no-plusplus': 'off',
        indent: [2, 4, { SwitchCase: 1 }],
        'max-len': ['error', { ignoreComments: true }],
    },
};
