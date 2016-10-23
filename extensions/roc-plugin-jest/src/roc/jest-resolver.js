import { invokeHook } from './util';
const babelJest = require('babel-jest');

const babelConfig = invokeHook('babel-config', 'node');
const babelJestTransformer = babelJest.createTransformer(babelConfig);

module.exports = babelJestTransformer;
