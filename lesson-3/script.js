var money,
	name,
	time,
	price,
	question,
	promo,
	discount

var mainList = {
	money: money,
	name: name,
	shopGoods: [],
	employers: {},
	open: true,
	discount: true
}

function start () {
	money = prompt("Ваш бюджет за месяц?",'');
	name = prompt("Название вашего магазина?").toUpperCase();
	time = 19;

	while (isNaN(money) || money == '' || money == null) {
		money = prompt("Ваш бюджет за месяц?",'');
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

function chooseGoods() {
	
	for (let i = 0; i < 5; i++) {
		
		let a = prompt("Какой тип товаров будем продавать?",'');
		
		if ((typeof(a)) === 'string' && a != '' && a.length < 50) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		} else {
			console.log('Не верно! Введите заново');
			}	
	}
}
chooseGoods();

function workTime(time) {
	
	if (time < 0) {
		console.log('Такого просто не может быть');
	} else if (time > 8 && time < 20) {
		console.log('Время работать!');
		} else if (time < 24) {
			console.log('Уде слишком поздно!');
			} else {
				console.log('В сутках только 24 часа!');
			};
}
workTime(9);

function getDiscount() {
	price = 9900;
	discount = 0.2;
	promo = "lesson-3";

	question = confirm("Скидочку?");	
//проверка на наличие скидки
	
	switch (mainList.discount) {
		case true:
		//проверка на желание получить
			switch (question) {
				case true:
					alert("Нет");			
					alert("Хорошо");
					// Промо-код для получения					
					for (var i = 0; i < 1; i++) {
						promo = prompt('Чтобы получить скидку введите промо-код:\n lesson-3', "Cюда");																						
						switch (promo) {
							case 'lesson-3':
								break;
							default:
								alert("Неправильно");	
								--i;															
								break;																											
						}						
					}					
					alert("Цена без скидки = " + price);
					alert("Скидка = " + (discount * 100 + "%"));
					//Вычисление скидки
					alert("Цена со скидкой = " + price * (1 - discount));
					break;						
				default:
					alert("Как хотите...");
					break;	
			}
			break;																		
		default:			
			alert("Не сегодня...");	
			break;		
	}	
}
getDiscount();

function recruitEmployers() {
	
	for (var i = 1; i < 5; i++) {
		
		mainList.employers = prompt("Введите имя сотрудника:", '');
		
		if ((typeof(mainList.employers)) === 'string' && mainList.employers != '' && mainList.employers.length < 10) {
			console.log('Все верно!');			
			mainList.employers = i + "). " + mainList.employers;
			console.log(mainList.employers);
		} else {
			console.log('Не верно! Введите заново');
			--i;	
			}	
	}	
	
}
recruitEmployers();