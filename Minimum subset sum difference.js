// give an array of number. Divide this array into 2 subarray such that the differece of 2 sum is mimimum.
//example: array [1, 6, 5, 11];
// way 1 : [1, 6] and [5, 11] => Math.abs(7 - 16) = 9;
//way 2:  [1, 6, 5] and [6, 11] => Math.abs(12- 11) = 1;
// way 3 : [1] and [5, 6, 11] => Math.abs(1 -22) = 21
// output : 1;

function minSubsetSum(array) {
	let dif = [];
	for (let i = 0; i < array.length; i++) {
		let subLeft = array.slice(0, i + 1);
		let subRight = array.slice(i + 1);
		console.log("a", subLeft);
		let sumLeft = subLeft.reduce(function (accumulator, currentValue) {
			return accumulator + currentValue;
		}, 0);
		let sumRight = subRight.reduce(function (accumulator, currentValue) {
			return accumulator + currentValue;
		}, 0);

		dif.push(Math.abs(sumLeft - sumRight));
	}

	return Math.min(...dif);
}
console.log(minSubsetSum([1, 6, 5, 11]));
console.log(minSubsetSum([2, 4, 2, 3]));
