import sum from "../components/sum.js";

test("Test whether function return sum of two numbers", () => {
  expect(sum(5, 4)).toBe(9);
});
