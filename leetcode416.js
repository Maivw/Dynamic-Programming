//https://leetcode.com/problems/partition-equal-subset-sum/submissions/
var canPartition = function (nums) {
	let sum = nums.reduce((acc, e) => {
		return acc + e;
	}, 0);
	console.log("s", sum);
	if (sum % 2 === 1) return false;

	//createa a table with height = nums.length + 1 and width = (sum/2) + 1;
	let table = [...Array(nums.length + 1)].map(() => Array(sum / 2 + 1));

	let half = sum / 2;

	// if value = 0 => the first columnm is true;
	for (let i = 0; i <= nums.length; i++) {
		table[i][0] = true;
	}
	// if we dont have any nums and value > 0 => the first row of the table will be false;
	for (let i = 1; i <= half; i++) {
		table[0][i] = false;
	}
	// fill the rest of the table;

	for (let i = 1; i <= nums.length; i++) {
		for (let j = 1; j <= half; j++) {
			//if value of the num > the sum
			if (nums[i - 1] > j) {
				table[i][j] = table[i - 1][j];
			} else {
				table[i][j] = table[i - 1][j] || table[i - 1][j - nums[i - 1]];
			}
		}
	}

	console.log("af", table);
	return table[nums.length][half];
};
