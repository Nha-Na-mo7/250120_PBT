import { sum } from "./index";
import { fc, it } from "@fast-check/jest";

/**
 * fc.integer(): 値のジェネレータ。指定の型の値を生成し、該当の引数に渡す。
 */

describe("[PBT]sum", () => {
  /**
   * @remarks
   * 交換法則のテスト
   */
  it("引数が入れ替わっても結果が同一となること", () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), (num1, num2) => {
        return sum(num1, num2) === sum(num2, num1);
      })
    );
  });
  /**
   * @remarks
   * 結合法則のテスト
   */
  it("結合箇所が変化しても結果が同一となること", () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), fc.integer(), (x, y, z) => {
        return sum(x, sum(y, z)) === sum(sum(x, y), z);
      })
    );
  });
});
