let money = prompt("Ваш бюджет на месяц?", ""),
		time = prompt("Введите дату в формате YYYY-MM-DD", ""),
		expenses = {},
		optionalExpenses = {};

let appData = {
	money : money,
	timeData : time,
	expenses : expenses,
	optionalExpenses : optionalExpenses,
	income : [],
	savings : false
};
console.log(appData);
expenses = {
	first : prompt("Введите обязательную статью расходов в этом месяце"),
	second : prompt("Во сколько обойдется?")
};

alert("Ваш бюджет на один день " + (money - expenses.second)/30);