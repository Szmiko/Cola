var products = [ { name: "Grejpfrut", calories: 170, color: "czerwony", sold: 8200 },
				{ name: "Pomarańcza", calories: 160, color: "pomarańczowy", sold: 12101 },
				{ name: "Cola", calories: 210, color: "karmelowy", sold: 25412 },
				{ name: "Cola dietetyczna", calories: 0, color: "karmelowy", sold: 43922 },
				{ name: "Cytryna", calories: 200, color: "bezbarwny", sold: 14983 },
				{ name: "Malina", calories: 180, color: "różowy", sold: 9427 },
				{ name: "Piwo korzenne", calories: 200, color: "karmelowy", sold: 9909 },
				{ name: "Woda", calories: 0, color: "bezbarwny", sold: 62123 } ];

function compareSold(num1, num2) {
	if (num1.sold > num2.sold) {
		return num1.sold - num2.sold;
	}
};

function compareName(name1, name2) {
	if (name1.name > name2.name) {
		return 1;
	} else if (name1.name == name2.name) {
		return 0;
	} else {
		return -1;
	}
};

function compareCalories(cal1, cal2) {
	if (cal1.calories > cal2.calories) {
		return (cal1.calories - cal2.calories);
	}
};

function compareColor(col1, col2) {
	if (col1.color > col2.color) {
		return 1;
	} else if (col1.color == col2.color) {
		return 0;
	} else {
		return -1;
	}
};

function printProducts(products) {
	for (var i = 0; i < products.length; i++) {
		console.log("Nazwa: " + products[i].name + " , liczba kalorii: " + products[i].calories + " , kolor: " + products[i].color + " , ilość sprzedanych butelek: " + products[i].sold + ".");
	}
};

products.sort(compareColor);
printProducts(products);
