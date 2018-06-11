

function nameEmployers() {
	for (let i = 0; i < 4; i++) {
		let nameEmployers = promt("Имя вашего сотрудника");
		if((typeof(nameEmployers)) === 'string' && (typeof(nameEmployers)) != null && nameEmployers != '' && nameEmployers.length < 50) {
			console.log("Спасибо")
			mainList.employers[i] = nameEmployers;
		} else {
			  --i;
		}
	}
}