'use strict'

/*
 * Create an object `obj` that has a property for each primitive values
 * much like in primitive.js
 *
 * @notions Functions, Operators
 */

// Your code :

const str = '1337'
const num = 42
const bool = false
let undef

const obj = ({
  'str': str,
  'num': num,
  'bool': bool,
  'undef': undef,
});



//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof obj, 'object')

assert.strictEqual(typeof obj.str, 'string')
assert.strictEqual(obj.str, '1337')

assert.strictEqual(typeof obj.num, 'number')
assert.strictEqual(obj.num, 42)

assert.strictEqual(typeof obj.bool, 'boolean')
assert.strictEqual(obj.bool, false)

assert.strictEqual(typeof obj.undef, 'undefined')
assert.strictEqual(obj.undef, undefined)
// End of tests */
