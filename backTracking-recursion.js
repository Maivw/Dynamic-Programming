// giving an array of non negative numbers and a sum.
//find if is possible to find a subset that sum of element  === sum;
// n === nums.length;

//example:
// nums = [1, 2, 3], sum = 5 => return true because subset [2, 3]  has sum ===5;
//using recursion
// function backTrackingSubset(nums, sum) {
// 	if (sum === 0) return true;
// 	if (sum !== 0 && nums.length === 0) return false;
// 	// If last element is greater than sum, then ignore it
// 	if (nums[nums.length - 1] > sum) {
// 		return backTrackingSubset(nums.slice(0, -1), sum);
// 	} else {
// 		return (
// 			backTrackingSubset(nums.slice(0, -1), sum) ||
// 			backTrackingSubset(nums.slice(0, -1), sum - nums[nums.length - 1])
// 		);
// 	}
// }
// console.log(backTrackingSubset([3, 34, 4, 12, 5, 2], 1));

//using dp table
function backTrackingSubset(nums, sum) {
	let table = [...Array(nums.length + 1)].map(() => Array(sum + 1));
	console.log("a", table);

	//fill the first colum when value = 0;
	for (let i = 0; i <= nums.length; i++) {
		table[i][0] = true;
	}
	//fille the first row when there is no number to fill;
	for (let i = 1; i <= sum; i++) {
		table[0][i] = false;
	}
	// Fill the rest of the table;
	for (let i = 1; i <= nums.length; i++) {
		for (let j = 1; j <= sum; j++) {
			if (nums[i - 1] > j) {
				table[i][j] = table[i - 1][j];
			} else {
				table[i][j] = table[i - 1][j] || table[i - 1][j - nums[i - 1]];
			}
		}
	}
	console.log("b", table);
	return table[nums.length][sum];
}
console.log(backTrackingSubset([2, 2, 5], 5));

//https://drive.google.com/file/d/1qs4BIS8lSMdYICkS-QNxP_WDDU2I1HNn/view
//https://www.youtube.com/watch?v=34l1kTIQCIA&list=PLEJXowNB4kPxBwaXtRO1qFLpCzF75DYrS&index=8
