// reference: https://leetcode.com/problems/two-sum/

#include <bits/stdc++.h>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    vector<pair<int, int>> numsWithIndices(nums.size());
    for (int i = 0; i < nums.size(); ++i) {
        numsWithIndices[i] = make_pair(nums[i], i);
    }

    sort(numsWithIndices.begin(), numsWithIndices.end());

    vector<int> result;
    int left = 0;
    int right = nums.size() - 1;

    while (left < right) {
        int currentSum = numsWithIndices[left].first + numsWithIndices[right].first;
        if (currentSum == target) {
            result.push_back(numsWithIndices[left].second);
            result.push_back(numsWithIndices[right].second);
            return result;
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }

    return result;
}

int main() {
    vector<int> nums = {3, 4, 1};
    int target = 7;
    vector<int> result = twoSum(nums, target);

    for (int num : result) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}
