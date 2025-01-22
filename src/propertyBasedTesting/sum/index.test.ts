import { sum } from "./index";
import { fc, it } from "@fast-check/jest";

/**
 * fc.integer(): 値のジェネレータ。指定の型の値を生成し、該当の引数に渡す。
 */

/**
 * @remarks
 * 交換法則のテスト
 * 引数を入れ替えても結果が同一であるという性質
 */
it("[PBT]sum", () => {
  fc.assert(
    fc.property(fc.integer(), fc.integer(), (num1, num2) => {
      return sum(num1, num2) === sum(num2, num1);
    })
  );
});
