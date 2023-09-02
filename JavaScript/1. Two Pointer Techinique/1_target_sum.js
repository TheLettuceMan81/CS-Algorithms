// reference: https://leetcode.com/problems/two-sum/

function two_sum(nums, target) {
    const nums_with_indices = nums.map((num, idx) => ({num, idx}));
    nums_with_indices.sort((i, j) => i.num - j.num);

    let result = [];
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const current_sum = nums_with_indices[left].num + nums_with_indices[right].num;
        if (current_sum === target) {
            result.push(nums_with_indices[left].idx);
            result.push(nums_with_indices[right].idx);
            return result;
        }
        else if (current_sum < target)
            left++;
        else 
            right--;
    }    
    return [];
}

console.log(two_sum([3, 4, 1], 7));

// Try out the following test cases
// nums = [2, 7, 11, 15] target = 9
// nums = [3, 2, 4] target = 6
// nums = [3, 3] target = 6
// nums = [-1, -2, -3, -4, -5] target = -8
// nums = [0, 0, 0, 0, 1, 2] target = 2
// nums = [1, 2, 3, 4, 5] target = 9
// nums = [1, 2, 3, 4, 5] target = 1
// nums = [1, 2, 3, 4, 5] target = 10
// nums = [-5, -3, -1, 0, 2, 4, 6] target = 1
// nums = [-5, -3, -1, 0, 2, 4, 6] target = -10