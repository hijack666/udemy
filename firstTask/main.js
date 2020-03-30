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
var qThree = prompt("Введите обязательную статью расходов в этом месяце");
var qFour = prompt("Во сколько обойдется?");

appData.expenses.qOne = qTwo;
appData.expenses.qThree = qFour;

alert(appData.budget / 30);