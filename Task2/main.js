'use strict';

var money = +prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income: [],
    savings: false
};


// var qOne = prompt("Введите обязательную статью расходов в этом месяце");
// var qTwo = prompt("Во сколько обойдется?");
// var qThree = prompt("Введите обязательную статью расходов в этом месяце");
// var qFour = prompt("Во сколько обойдется?");

// appData.expenses.qOne = qTwo;
// appData.expenses.qThree = qFour;

// два вопроса
for (var i=0; i < 2; i++) {
    var a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");

    if ( (typeof(a)) === 'string' && (typeof(a)) !=null && (typeof(b)) !=null && a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b;
        console.log('norm');
    }  else {
        i--;
        console.log('Введите заново значения');
    }
}

appData.moneyPerDay = appData.budget / 30 ;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Вы БОМЖ");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 300) {
    console.log("Я бычок подниму...");
} else if (appData.moneyPerDay >= 300) {
    console.log("Вы - житель Уганды");
} else {
    console.log("Ошибка");
}