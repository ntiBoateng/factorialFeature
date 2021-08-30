var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
it('will test if the output of 5! is equal to 120',()=>{
  const expected = 120
  const inputNum = 5
  const result = Calculate.factorial(inputNum)
  assert.equal(result,expected)
})

it('will test if the output of 3! is equal to 6',()=>{
  const expected = 6
  const inputNum = 3
  const result = Calculate.factorial(inputNum)
  assert.equal(result,expected)
})
it('returns 1 when you pass in 0.',()=>{
const expected = 1
const inputNum = 0
const result = Calculate.factorial(inputNum)
assert.equal(result,expected)
})
  });
});