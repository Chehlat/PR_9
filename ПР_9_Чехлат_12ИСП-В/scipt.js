let hour = 1;
let hour_day = hour * 24;
let hour_week = hour_day * 7;
let hour_month_30_days = hour_day * 30;
let hour_month_31_days = hour_day * 31;
let hour_month_february_vis = hour_day * 29;
let hour_month_february_not_vis = hour_day * 28;
console.log("часов в дне: " + hour_day);
console.log("часов в неделе: " + hour_week);
console.log("часов в месяце(30д): " + hour_month_30_days);
console.log("часов в месяце(31д): " + hour_month_31_days);
console.log("часов в феврале(високосный): " + hour_month_february_vis);
console.log("часов в феврале(не високосный): " + hour_month_february_not_vis);
let hour_vis_year = hour_month_31_days * 7 + hour_month_30_days * 4 + hour_month_february_vis;
let hour_not_vis_year = hour_month_31_days * 7 + hour_month_30_days * 4 + hour_month_february_not_vis;
console.log("часов в году(високосный): " + hour_vis_year);
console.log("часов в году(не високосный): " + hour_not_vis_year);

var birthDate = new Date('1990-01-01');
var currentDate = new Date();
var ageInMilliseconds = currentDate - birthDate;
var ageInMinutes = Math.floor(ageInMilliseconds / (1000 * 60));
var ageInHours = Math.floor(ageInMilliseconds / (1000 * 60 * 60));
var ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));

console.log("Возраст в минутах: " + ageInMinutes);
console.log("Возраст в часах: " + ageInHours);
console.log("Возраст в днях: " + ageInDays);

