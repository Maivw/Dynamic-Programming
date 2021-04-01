//https://leetcode.com/problems/minimum-absolute-difference/
//https://www.youtube.com/watch?v=mH1aEjOEjcQ
var minimumAbsDifference = function (arr) {
	let sorted = arr.sort(function (a, b) {
		return a - b;
	});
	console.log("c", sorted);
	let currentMin = sorted[1] - sorted[0];

	let result = [];
	result.push([sorted[0], sorted[1]]);

	for (let i = 2; i < sorted.length; i += 1) {
		let dif = sorted[i] - sorted[i - 1];

		if (currentMin === dif) {
			result.push([sorted[i - 1], sorted[i]]);
		} else if (currentMin > dif) {
			currentMin = dif;
			result = [];
			result.push([sorted[i - 1], sorted[i]]);
		}
	}
	// console.log("a", result);
	return result;
};
