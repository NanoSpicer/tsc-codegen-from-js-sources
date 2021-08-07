const os = require('os')


/**
 * JSDOC
 * @param {!number} a 
 * @param {number} b 
 * @returns {!number}
 */
export const jsdocMultiply = (a, b) => a * b
export const noJsdocMultiply = (a, b) => a * b
export const concat = (a, b) => `${a}${b}`

/** 
 * @constant 
 * @type {number} 
 */
export const FREE_MEMORY = os.freemem()



