module.exports = function toReadable(number) {
	const a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
	const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

	const numberLength = String(number).length; // длина строки
	const firstNumber = String(number).split('')[0]; // первая цифра в числе
	const secondNumber = String(number).split('')[1];// второка цифра в числе  
	const thirdNumber = String(number).split('')[2];// третья цифра в числе 
	const twoLastNumbers = secondNumber + thirdNumber; // последние две цифры

	const comparisonOfIndexAndNumber = () => { // для чисел до 19 вкл
		let str = '';
		for (let i = 0; i < a.length; i++) {
			if (a.indexOf(a[i]) == number) { return str = a[i]; }
		}
	}

	const twoLastNumbersIndex = () => { // для трехзначных чисел, сравнение с двумя последними цифрами до 19 вкл
		let str = '';
		for (let i = 0; i < a.length; i++) {
			if (a.indexOf(a[i]) == twoLastNumbers) { return str = a[i]; }
		}
	}

	const twoLastNumbersIndexMultipleTen = () => { // для трехзначных чисел, сравнение с двумя последними цифрами больше 19 и кратным 10
		let str = '';
		for (let i = 0; i < b.length; i++) {
			if (b.indexOf(b[i]) == secondNumber) { return str = b[i]; }
		}
	}

	const threeDigitIndexNumbers = () => { // для трехзначных чисел (числа до 19 вкл), сравнение с первым числом
		let str = '';
		for (let i = 0; i < a.length; i++) {
			if (a.indexOf(a[i]) == firstNumber) { return str = a[i]; }
		}
	}


	const comparisonOfIndexAndFirstNumber = () => { // для двухзначных чисел кратным 10
		for (let i = 0; i < b.length; i++) {
			if (b.indexOf(b[i]) == firstNumber) { return str = b[i]; }
		}
	}

	const getSecondNumber = () => { // второе число
		let str = '';
		for (let i = 0; i < a.length; i++) {
			if (a.indexOf(a[i]) == secondNumber) { return str = a[i]; }
		}
	}


	const getThirdNumber = () => { // третье число
		let str = '';
		for (let i = 0; i < a.length; i++) {
			if (a.indexOf(a[i]) == thirdNumber) { return str = a[i]; }
		}
	}


	const doubleFigures = () => { // для двухзначных чисел после 20, некратным 10
		const resultDoubleFigures = `${comparisonOfIndexAndFirstNumber()} ${getSecondNumber()}`;
		return resultDoubleFigures;
	}


	const threeDigitNumbersLessThanTwenty = () => { // для трехзначных чисел, две последние циры МЕНЬШЕ 20
		const result = `${threeDigitIndexNumbers()} hundred ${twoLastNumbersIndex()}`;
		return result;
	}

	const threeDigitNumbersMoreThanTwentyMultiplyTen = () => { // для трехзначных чисел, две последние цифры БОЛЬШЕ 19 и кратны 10
		const result = `${threeDigitIndexNumbers()} hundred ${twoLastNumbersIndexMultipleTen()}`;
		return result;
	}

	const threeDigitNumbersMoreThanTwenty = () => { // для трехзначных чисел, две последние цифры БОЛЬШЕ 19 и некратны 10
		const result = `${threeDigitIndexNumbers()} hundred ${twoLastNumbersIndexMultipleTen()} ${getThirdNumber()}`;
		return result;
	}

	const hundreds = () => { // для трёхкратных чисел кратным 100
		const result = `${threeDigitIndexNumbers()} hundred`;
		return result;
	}




	if (numberLength == 1) {
		return comparisonOfIndexAndNumber();
	} else if (numberLength == 2 && number < 20) {
		return comparisonOfIndexAndNumber();
	} else if ((numberLength == 2) && (number % 10 === 0)) {
		return comparisonOfIndexAndFirstNumber();
	}
	else if ((numberLength == 2) && (number % 10 !== 0)) {
		return doubleFigures();
	} else if ((numberLength == 3) && (number % 100 === 0)) {
		return hundreds();
	} else if ((numberLength == 3) && (twoLastNumbers < 20)) {
		return threeDigitNumbersLessThanTwenty();
	} else if ((numberLength == 3) && (twoLastNumbers >= 20) && (twoLastNumbers % 10 === 0)) {
		return threeDigitNumbersMoreThanTwentyMultiplyTen();
	} else if ((numberLength == 3) && (twoLastNumbers >= 20) && (twoLastNumbers % 10 !== 0)) {
		return threeDigitNumbersMoreThanTwenty();
	}

}
