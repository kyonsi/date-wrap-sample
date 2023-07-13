import { DUMMY_DATE } from "~/constants/env";

export class DateWrapper extends Date {
  public static DEFAULT_DATE?: string;

  constructor(
    ...[valueOrYear, month, ...args]:
      | []
      | [value: number | string | Date]
      | [
          year: number,
          month: number,
          date?: number,
          hours?: number,
          minutes?: number,
          seconds?: number,
          ms?: number
        ]
  ) {
    if (typeof valueOrYear === "number" && month) {
      super(valueOrYear, month, ...args);
      return;
    }

    if (valueOrYear !== undefined) {
      super(valueOrYear);
      return;
    }

    super(DateWrapper.DEFAULT_DATE || Date.now());
  }

  static now(): number {
    return new DateWrapper().getTime();
  }
}

DateWrapper.DEFAULT_DATE = DUMMY_DATE || undefined;
