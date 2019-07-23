const algo = require("../algorithm").default;

test("high = 10, low = 5, close=6 to Sell (1) ", () => {
  expect(algo(10, 5, 6)).toBe(1);
});

test("high = 5, low = 4, close=3 = to Hold (2) ", () => {
  expect(algo(5, 5, 6)).toBe(2);
});
