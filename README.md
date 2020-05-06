# Description

This project returns difference in time between two dates.

# Installing

`npm i diff-in-time`

# Example

## Import the lib

```js
const diffInTime = requier('diff-in-time');
```

```js
import diffInTime from 'diff-in-time';
```

## Call functions

```js
const params = {
  firstTime: new Date('2020-05-7'),
  secondTime: new Date('2020-05-10'),
};

diffInTime.getDiffInSeconds(params); // 270000
diffInTime.getDiffInMinutes(params); // 4500
diffInTime.getDiffInHours(params); // 75
diffInTime.getDiffInDays(params); // 3.125
diffInTime.getDiffInWeeks(params); // 0.44642857142857145
diffInTime.getDiffInMonth(params); // 0.10080645161290322
diffInTime.getDiffInYears(params); // 0.008561643835616438

diffInTime.getDiffAll(params);
/*return {
  seconds: 270000,
  minutes: 4500,
  hours: 75,
  days: 3.125,
  weeks: 0.44642857142857145,
  months: 0.10080645161290322,
  years: 0.008561643835616438
}*/
```
