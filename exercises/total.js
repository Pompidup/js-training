'use strict'

/*
 * Create a `total` function that takes an array of numbers
 * and return the total
 *
 */
// Obj
let phone = {
  color:"white",
  isTactile:true
};
phone.color = "red";
phone.tartampion ="choucroute";

//Function

function addition( param_a, param_b){
  console.log(param_a + param_b)
}
addition(10 , 2)



let sum = 0;

function total (tot) {
  for (let i = 0; i < total.length; i++) {
    sum += tot[i];
  }
  console.log(sum)
}







//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof total, 'function')
assert.strictEqual(total.length, 1)
assert.deepStrictEqual(total([ 1, 1, 1]), 3)
assert.deepStrictEqual(total([0]),0)
assert.deepStrictEqual(total([ 10, 10, 10]), 30)
assert.deepStrictEqual(total([ 24, -10, 10, 0, 0, 100 ]), 124)
// End of tests */
