function _getDiff(params) {
  const { firstTime, secondTime } = params;
  const currentTime = firstTime || new Date();
  const createdAt = new Date(secondTime);
  return Math.abs(currentTime.valueOf() - createdAt.valueOf());
}

function getDiffInSeconds(params) {
  const different = _getDiff(params);

  return different / 1000;
}

function getDiffInMinutes(params) {
  const different = _getDiff(params);

  return different / 1000 / 60;
}

function getDiffInHours(params) {
  const different = _getDiff(params);

  return different / 1000 / 60 / 60;
}

function getDiffInDays(params) {
  const different = _getDiff(params);

  return different / 1000 / 60 / 60 / 24;
}

function getDiffInWeeks(params) {
  const different = _getDiff(params);

  return different / 1000 / 60 / 60 / 24 / 7;
}

function getDiffInMonth(params) {
  const different = _getDiff(params);

  return different / 1000 / 60 / 60 / 24 / 31;
}

function getDiffInYears(params) {
  const different = _getDiff(params);

  return different / 1000 / 60 / 60 / 24 / 365;
}

module.exports = {
  getDiffInSeconds,
  getDiffInMinutes,
  getDiffInHours,
  getDiffInDays,
  getDiffInWeeks,
  getDiffInMonth,
  getDiffInYears,
};
