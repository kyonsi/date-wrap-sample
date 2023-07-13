import {
  DateWrapper
} from "./date-wrapper";
import {
  describe, test, expect
} from "vitest"

describe("~/libs/date-wrapper.ts", () => {
  describe("constructor", () => {
    test("引数が指定されていない場合、現在の日付でDateWrapperオブジェクトが作成されること", () => {
      const dateWrapper = new DateWrapper();
      const currentDate = new Date();

      expect(dateWrapper.getFullYear()).toBe(currentDate.getFullYear());
      expect(dateWrapper.getMonth()).toBe(currentDate.getMonth());
      expect(dateWrapper.getDate()).toBe(currentDate.getDate());
      // 以下、時間やミリ秒などの値も比較することができます
    });

    test("引数が指定された場合、指定された日付と時刻でDateWrapperオブジェクトが作成されること", () => {
      const dateWrapper = new DateWrapper(1988, 6, 13, 12, 0, 0);
      const date = new Date()
      expect(dateWrapper.getFullYear()).toBe(1988);
      expect(dateWrapper.getMonth()).toBe(6);
      expect(dateWrapper.getDate()).toBe(13);
      expect(dateWrapper.getHours()).toBe(12);
      expect(dateWrapper.getMinutes()).toBe(0);
      expect(dateWrapper.getSeconds()).toBe(0);
    });

    test("DateWrapper.DEFAULT_DATEが定義されている場合、DateWrapperオブジェクトがDateWrapper.DEFAULT_DATEで作成されること", () => {
      const dummyDate = new Date("2023-01-01");
      DateWrapper.DEFAULT_DATE = "2023-01-01";

      const dateWrapper = new DateWrapper();

      expect(dateWrapper.getTime()).toBe(dummyDate.getTime());
    });

    test("DateWrapper.DEFAULT_DATEが定義されていない場合、現在の日付でDateWrapperオブジェクトが作成されること", () => {
      DateWrapper.DEFAULT_DATE = undefined;

      const dateWrapper = new DateWrapper();
      const currentDate = new Date();
      expect(dateWrapper.getFullYear()).toBe(currentDate.getFullYear());
      expect(dateWrapper.getMonth()).toBe(currentDate.getMonth());
      expect(dateWrapper.getDate()).toBe(currentDate.getDate());
    });
  });

  describe("now", () => {
    test("現在のタイムスタンプ（ミリ秒）が返されること", () => {
      const now = DateWrapper.now();

      expect(now).toBe(Date.now());
    });

    test("DateWrapper.DEFAULT_DATEが定義されている場合、DateWrapper.DEFAULT_DATEのタイムスタンプ（ミリ秒）が返されること", () => {
      const date = new Date("2023-01-01");
      DateWrapper.DEFAULT_DATE = "2023-01-01";

      expect(DateWrapper.now()).toBe(date.getTime());
    })
  });
});