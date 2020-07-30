function currencyConverter(valNum) {
	if (converter.convert.value <= 0) {
		window.alert('Enter value Greater Than 0');
	} else {
		document.getElementById('dolar').value = (valNum / 3.4).toFixed(2);
		document.getElementById('euro').value = (valNum / 4.0).toFixed(2);
		document.getElementById('d2s').value = (valNum * 3.4).toFixed(2);
		document.getElementById('e2s').value = (valNum * 4.0).toFixed(2);
	}
}
