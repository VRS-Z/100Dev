/**
 *
 * @param {Number} year
 * @param {Number} month
 * @param {Number} day
 */
function setDateDiff(years, months, days) {
  document.querySelector("#resultYear i").innerText = years;
  document.querySelector("#resultMonth i").innerText = months;
  document.querySelector("#resultDay i").innerText = days;
}

function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

/**
 *
 * @param {Date} date1
 */
function getDaysLastMonth(date1) {
  const FEBRUARY_INDEX = 1;
  let month = 0;
  let year = 0;

  if (date1.getMonth() > 0) {
    month = date1.getMonth() - 1;
    year = date1.getFullYear();
  } else {
    month = 11;
    year = date1.getFullYear() - 1;
  }

  return month != FEBRUARY_INDEX
    ? 30 + ((month % 7) % 2 == 0)
    : 28 + isLeapYear(year);
}

/**
 *
 * @param {Date} date1
 * @param {Date} date2
 */
function getDayDiff(date1, date2) {
  const day1 = date1.getDate();
  const day2 = date2.getDate();

  let remDaysLastMonth = 0;
  if (day1 < day2) {
    remDaysLastMonth = getDaysLastMonth(date1);
  }

  return remDaysLastMonth + day1 - day2;
}

/**
 *
 * @param {Date} date1
 * @param {Date} date2
 */
function getMonthDiff(date1, date2) {
  const month1 = date1.getMonth();
  const month2 = date2.getMonth();
  const monthComplete = date1.getDate() >= date2.getDate();

  let monthBefore = 0;
  if (month2 > month1 || (month2 == month1 && !monthComplete)) {
    monthBefore = 12;
  }

  return monthBefore + (month1 - month2 - 1) + monthComplete;
}
/**
 *
 * @param {Date} date1
 * @param {Date} date2
 */
function getYearDiff(date1, date2) {
  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();

  const yearComplete =
    date1.getMonth() > date2.getMonth() ||
    (date1.getMonth() == date2.getMonth() &&
      date1.getDate() >= date2.getDate());

  return year1 - year2 - 1 + yearComplete;
}

function agir() {
  const bornDate = new Date(
    /*year=*/ Number(document.getElementById("year").value),
    /*month=*/ Number(document.getElementById("month").value) - 1,
    /*day=*/ Number(document.getElementById("day").value)
  );
  const nowDate = new Date();

  const dayDiff = getDayDiff(nowDate, bornDate);
  const monthDiff = getMonthDiff(nowDate, bornDate);
  const yearDiff = getYearDiff(nowDate, bornDate);

  setDateDiff(yearDiff, monthDiff, dayDiff);
}
