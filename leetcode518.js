//https://leetcode.com/problems/coin-change-2/
var change = function (amount, coins, memo = {}) {
	let key = amount + "-" + coins;
	if (key in memo) return memo[key];
	if (amount === 0) return 1;
	let total = 0;
	let currentCoin = coins[coins.length - 1];

	for (let qty = 0; qty * currentCoin <= amount; qty++) {
		total += change(amount - qty * currentCoin, coins.slice(0, -1), memo);
	}
	memo[key] = total;

	return memo[key];
};
