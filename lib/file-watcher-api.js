// @ts-check
/**
 * To use the available webpack core api
 * we have to use different child compilers
 * depending on the used webpack version
 */
const webpackMajorVersion = Number(require('webpack/package.json').version.split('.')[0]);

// Typescript hack to test only the webpack 4 code
/** @type {import('./webpack4/file-watcher-api')} */
module.exports = require('./webpack4/file-watcher-api.js');
