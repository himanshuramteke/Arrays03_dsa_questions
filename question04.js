//Question 4: Find Index for Target in Sorted Array or Insertion Point

function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid; // Found the target
        } else if (nums[mid] < target) {
            left = mid + 1; // Search the right half
        } else {
            right = mid - 1; // Search the left half
        }
    }

    return left; // Insertion point
}

const nums = [1, 3, 5, 6];
const target = 5;
const index = searchInsert(nums, target);
console.log(index); // Output: 2
