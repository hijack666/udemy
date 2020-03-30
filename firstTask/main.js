'use strict';

var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income: [],
    savings: false
};

var qOne = prompt("Введите обязательную статью расходов в этом месяце");
var qTwo = prompt("Во сколько обойдется?");

appData.expenses.qOne = qTwo;

alert(appData.budget / 30);