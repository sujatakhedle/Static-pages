(function (global, $) {
	var greeter = function(firstName, lastName, laungauge) {
		return new greeter.init(firstName, lastName, laungauge);
	}
	greeter.init = function(firstName, lastName, laungauge) {
		firstName = firstName;
	}


}(window, jQuery));


function doubleNum() {
	var numbers = [1, 2, 3];
	var doubleNumbers = [];

	numbers.map(function(number) {
		doubleNumbers.push(number * 2);
	});
	return doubleNumber;
}
doubleNum();


// use reduce
function validParens(string) {
	string.split('').reduce(function (acc,  char) {
		if (char < 0) {
			return acc;
		}
		if (char == '(') {
			return ++acc;
		}
		if (char == ')') {
			return --acc;
		}
		return acc;	
	}, 0);
}
validParens(')()(');


function balancedParens(string) {

	// use ! to return boolean value - true or false
	// use split to convert string to array - helpers only work with arrays
	return !string.split('').reduce(function(previous, char) {
		// if we go negative something goes wrong
		if ( previous < 0 ) { return previous }
		if ( char === '(' ) { return ++previous }
		if ( char === ')' ) { return --previous }
		// if no parens
		return previous
	}, 0);
}
balancedParens('())((_)_)’); 