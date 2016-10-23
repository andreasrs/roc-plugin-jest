const runHook = require('roc').runHook;
const babelJest = require('babel-jest');

const babelConfig = runHook('roc-plugin-jest')('babel-config', 'node');
const babelJestTransformer = babelJest.createTransformer(babelConfig);

module.exports = babelJestTransformer;
