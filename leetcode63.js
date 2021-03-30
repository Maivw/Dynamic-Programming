// https://leetcode.com/problems/unique-paths-ii/submissions/
var uniquePathsWithObstacles = function (obstacleGrid) {
	let m = obstacleGrid.length;
	let n = obstacleGrid[0].length;

	// createa a tale
	let table = [...Array(m)].map(() => Array(n).fill(0));
	console.log("a", table);
	for (let x = 0; x < m; x++) {
		for (let y = 0; y < n; y++) {
			if (obstacleGrid[x][y] === 0) {
				if (x === 0 && y === 0) table[x][y] = 1;
				if (x > 0) table[x][y] += table[x - 1][y];
				if (y > 0) table[x][y] += table[x][y - 1];
			}
		}
	}
	console.log("b", table);
	return table[m - 1][n - 1];
};
