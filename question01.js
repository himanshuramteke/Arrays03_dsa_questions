//Question 1: Find Three Integers with Sum Closest to Target

function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    let closestSum = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }
            
            if (sum === target) {
                return sum; // Found exact sum equal to target
            } else if (sum < target) {
                left++; // Move left pointer to increase the sum
            } else {
                right--; // Move right pointer to decrease the sum
            }
        }
    }

    return closestSum;
}

const nums = [-1, 2, 1, -4];
const target = 1;
const result = threeSumClosest(nums, target);
console.log(result); // Output: 2
