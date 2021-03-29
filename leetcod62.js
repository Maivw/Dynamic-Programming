//https://leetcode.com/problems/unique-paths/
// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

// Example 1:

// Input: m = 3, n = 7
// Output: 28
// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down
// Example 3:

// Input: m = 7, n = 3
// Output: 28
// Example 4:

// Input: m = 3, n = 3
// Output: 6

// MEMOIZATION
var uniquePaths = function (m, n, memo = {}) {
	let key = m + "," + n;
	if (key in memo) return memo[key];
	//create the table.
	// let table = [...Array(m)].map(() => Array(n).fill(0));
	// console.log("table", table);
	if (m === n && m === 1) return 1;
	if (m === 0 || n === 0) return 0;
	//starting point

	memo[key] = uniquePaths(m, n - 1, memo) + uniquePaths(m - 1, n, memo);
	return memo[key];
};

//TABULATION USING DB TABLE
var uniquePaths = function (m, n) {
	let table = [...Array(m)].map(() => Array(n).fill(0));

	//get the first row from left to right;
	for (let i = 0; i < n; i++) {
		table[(0, i)] = 1;
		console.log("table", table);
	}
	// get the first colum from top to bottom
	for (let j = 0; j < m; j++) {
		table[(j, 0)] = 1;
	}
	// get the rest of the grid;

	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			table[(i, j)] = table[(i - 1, j)] + table[(i, j - 1)];
			console.log("a", table[(i, j)]);
		}
	}

	return table[(m - 1, n - 1)];
};
