/*
--LEETCODE POTD--
You have a set of integers s, which contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array
*/

var setMismatch = function (nums) {
  let n = nums.length;
  let duplicate = -1,
    missing = -1;
  const numFreqMap = new Map();

  // Step 1: Create a frequency map of the numbers in the array
  for (let i = 0; i < n; i++) {
    if (numFreqMap.has(nums[i])) {
      numFreqMap.set(nums[i], numFreqMap.get(nums[i]) + 1); //key exists, increment freq by 1
    } else {
      numFreqMap.set(nums[i], 1); //key doesn't exist
    }
  }

  // Step 2: Find the duplicate and missing numbers (1 - n : given)
  for (let i = 1; i <= n; i++) {
    if (numFreqMap.get(i) === 2) {
      duplicate = i;
    } else if (!numFreqMap.has(i)) {
      missing = i;
    }
  }

  // Step 3: Return the result as an array
  return [duplicate, missing];
};

nums = [1, 2, 2, 4];

console.log(setMismatch(nums));
