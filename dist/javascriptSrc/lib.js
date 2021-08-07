"use strict";
exports.__esModule = true;
exports.FREE_MEMORY = exports.concat = exports.noJsdocMultiply = exports.jsdocMultiply = void 0;
var os = require('os');
/**
 * JSDOC
 * @param {!number} a
 * @param {number} b
 * @returns {!number}
 */
var jsdocMultiply = function (a, b) { return a * b; };
exports.jsdocMultiply = jsdocMultiply;
var noJsdocMultiply = function (a, b) { return a * b; };
exports.noJsdocMultiply = noJsdocMultiply;
var concat = function (a, b) { return "" + a + b; };
exports.concat = concat;
/**
 * @constant
 * @type {number}
 */
exports.FREE_MEMORY = os.freemem();
