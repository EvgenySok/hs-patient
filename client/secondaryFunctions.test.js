// const { summ } = require("./secondaryFunctions")
const summ = (a, b) => a + b


describe('Tests for secondary functions', () => {
  test('summ 2and 3 should be 5', () => {
    expect(summ(2, 3)).toBe(5)
  })
})