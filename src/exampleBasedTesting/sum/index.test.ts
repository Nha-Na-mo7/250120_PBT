import { sum } from "./index";

it("1 + 2 = 3", () => {
  const actual = sum(1, 2);
  expect(actual).toBe(3);
});
