declare module 'diff-in-time' {
  type Params = {
    firstTime: Date;
    secondTime: Date;
  }

  export function getDiffInSeconds(params: Params): number;
  export function getDiffInMinutes(params: Params): number;
  export function getDiffInHours(params: Params): number;
  export function getDiffInDays(params: Params): number;
  export function getDiffInWeeks(params: Params): number;
  export function getDiffInMonth(params: Params): number;
  export function getDiffInYears(params: Params): number;
  export function getDiffAll(params: Params): {
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
    weeks: number;
    months: number;
    years: number;
  };
}
