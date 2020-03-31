'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while ( isNaN(money) || money == "" || money == null ) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

var appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (var i=0; i < 2; i++) {
        var a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
    
        if ( (typeof(a)) === 'string' && (typeof(a)) !=null && (typeof(b)) !=null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            console.log('norm');
        }  else {
            i--;
            console.log('Введите заново значения');
        }
    }
}
chooseExpenses();


appData.moneyPerDay = (appData.budget / 30).toFixed();

alert("Ежедневный бюджет: " + appData.moneyPerDay);


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
    } 
}
checkSavings();

function detectDayBudget() {
    var daily =(appData.budget / 30).toFixed;
    alert("Ваш дневной бюджет: " + daily);
}

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Вы БОМЖ");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 300) {
        console.log("Я бычок подниму...");
    } else if (appData.moneyPerDay >= 300) {
        console.log("Вы - житель Уганды");
    } else {
        console.log("Ошибка");
    }
}

function chooseOptExpenses() {
    var j=0;
    while (j<3) {
        var first = prompt("Введите обязательную статью расходов в этом месяце", ''),
            second = +prompt("Во сколько обойдется?", '');
    
        if ( (typeof(first)) === 'string' && (typeof(first)) !=null && (typeof(second)) !=null && first != '' && second != '' && first.length < 50) {
            appData.optionalExpenses[first] = second;
        }  else {
            j--;
        }
        j++;
    }
}