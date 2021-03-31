//https://leetcode.com/problems/maximum-subarray/
var maxSubArray = function (nums) {
	let maxSofar = nums[0];
	let max = nums[0];

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > nums[i] + maxSofar) {
			maxSofar = nums[i];
		} else {
			maxSofar += nums[i];
		}

		if (maxSofar > max) {
			max = maxSofar;
		}
	}

	return max;
};
