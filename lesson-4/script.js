let money,
		name,
		time,
		price,
		question,
		promo,
		discount



function start () {
	money = prompt("Ваш бюджет на месяц?",'');
	name = prompt("Название вашего магазина?", '').toUpperCase();
	time = 19;

	while (isNaN(money) || money == '' || money == null) {
		money = prompt("Ваш бюджет на месяц?",'');
	}

	for (let i = 0; i < 1; i++) {	
		
		if ((typeof(name)) === 'string' && name != '' && name.length < 50) {
	 		console.log('Все верно!');
			mainList.name = name;

	 	} else {
	 		console.log('Не верно! Введите заново');
	 		--i;	
	 		}	
	}
	
	for (let i = 0; i < 1; i++) {	
			
		if ((typeof(money)) === 'string' && money != '' && money.length < 50) {
			console.log('Все верно!');
			mainList.money = money;

		} else {
			console.log('Не верно! Введите заново');
			--i;
			}
	}
}
start();

let mainList = {
		budget: money,
		name: name,
		shopGoods: [],
		employers: {},
		open: false,
		discount: true,
		chooseGoods: function chooseGoods() {
	
			for (let i = 0; i < 5; i++) {
				
				let a = prompt("Какой тип товаров будем продавать?",'');
				
				if ((typeof(a)) === 'string' && a != '' && a.length < 50) {
					console.log('Все верно!');
					mainList.shopGoods[i] = a;
				} else {
					i = i - 1;
					console.log('Не верно! Введите заново');
					}	
			}
		},

		workTime: function workTime(time) {
	
				if (time < 0) {
					console.log('Такого просто не может быть');
				} else if (time > 8 && time < 20) {
					console.log('Время работать!');
					mainList.open = true
					} else if (time < 24) {
						console.log('Уде слишком поздно!');
						} else {
							console.log('В сутках только 24 часа!');
						};
		},


			
		getDiscount: function getDiscount() {
			if (mainList.discount == true) {
				price = (price/100)*80;
			}
		},


		recruitEmployers: function recruitEmployers() {
			for (let i = 1; i < 4; i++) {
				let name = prompt("Имя сотрудника");
				mainList.employers[i] = name;
			}
		},

		dayBudget: function dayBudget(){
			alert("Ваш бюджет" + mainList.budget / 30);
		},

		chooseShopItems: function chooseShopItems() {
			
			for (let i = 0; i < 1; i++) {

				items = prompt("Перечислите через запятую товары", "");

				if (typeof(items) === "string" && items != '') {
					mainList.shopItems = items.split(",");
					mainList.shopItems.push(prompt('Подождите, еще ', ''));
					mainList.shopItems.sort();
					mainList.shopItems.unshift(null);
					mainList.shopItems.splice(0, 1);							
				} else {
					alert("Введите название правильно!");
					--i;
					}
			}
		}
}

mainList.chooseShopItems();
mainList.shopItems.forEach( function chooseShopItems(item) {
	alert("У нас вы можете купить: " + item);	
});

for (var item in mainList.shopItems) {
	console.log("Наш магазин влючает в себя: " + mainList.shopItems[item]);
}
		// mainList.chooseGoods();
		// mainList.workTime(9);
		// mainList.getDiscount();
		// mainList.recruitEmployers()
		console.log(mainList);

