let money = prompt("Ваш бюджет?", "30000");
let name = prompt("Название вашего магазина");
let time = 19;

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false
}

for (let i = 0; i < 5; i++) {
	let a =  prompt("Какой тип товара будет продаваться?");
	mainList.shopGoods[i] = a;
	if ((typeof(a)) === 'string'	&& (typeof(a)) === null && a != '' && a.length < 50	) {
		console.log('Всё верно!');
		mainList.shopGoods[i] = a;
	} else {

	}

}

/*var i = 0;
do {
	let a =  prompt("Какой тип товара будет продаваться?");
	i++
	mainList.shopGoods[i] = a;
} while (i < 5);
*/


/*var i = 0;
	while (i < 5) {
		let a =  prompt("Какой тип товара будет продаваться?");
		i++;
		mainList.shopGoods[i] = a;
	}
*/

if ( time < 0) {
	console.log('такого просто не может быть');
} else if(time > 8 && time < 20) {
	console.log('время работать')
	} else if(time < 24) {
		console.log('Уже слишком поздно!');
		} else {
			console.log('В сутках только 24 часа');
		};


// mainList.shopGoods[0] = prompt("Какой тип товара будет продаваться?");
// mainList.shopGoods[1] = prompt("Какой тип товара будет продаваться?");
// mainList.shopGoods[2] = prompt("Какой тип товара будет продаваться?");

alert(mainList.budget / 30);

console.log(mainList);