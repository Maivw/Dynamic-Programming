// giving an array of non negative numbers and a sum.
//find if is possible to find a subset that sum of element  === sum;
// n === nums.length;

//example:
// nums = [1, 2, 3], sum = 5 => return true because subset [2, 3]  has sum ===5;

function backTrackingSubset(nums, sum) {
	if (sum === 0) return true;
	if (sum !== 0 && nums.length === 0) return false;
	// If last element is greater than sum, then ignore it
	if (nums[nums.length - 1] > sum) {
		return backTrackingSubset(nums.slice(0, -1), sum);
	} else {
		return (
			backTrackingSubset(nums.slice(0, -1), sum) ||
			backTrackingSubset(nums.slice(0, -1), sum - nums[nums.length - 1])
		);
	}
}
console.log(backTrackingSubset([3, 34, 4, 12, 5, 2], 1));
