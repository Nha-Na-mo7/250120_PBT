import { minus } from "./index";

it("3 - 2 = 1", () => {
  const actual = minus(3, 2);
  expect(actual).toBe(1);
});
