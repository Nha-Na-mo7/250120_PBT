import { notSum } from "./index";
import { fc, it } from "@fast-check/jest";

/**
 * 反例の確認
 */
describe("[PBT]sum", () => {
  // 性質は間違っているがテストが通る例
  it("性質は間違っているがテストは通ってしまう例", () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), (num1, num2) => {
        return notSum(num1, num2) === notSum(num2, num1);
      })
    );
  });
  // テストが成立しない例
  /**
   * Property failed after 1 tests
   * { seed: -6926597, path: "0:1:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0", endOnFailure: true }
   * Counterexample: [1]
   * Shrunk 31 time(s) // 反例が出現する最小の値
   * Got error: Property failed by returning false
   */
  it.skip("テストが成立しない例", () => {
    fc.assert(
      fc.property(fc.integer(), (num1) => {
        return notSum(num1, 0) === num1;
      })
    );
  });
});
