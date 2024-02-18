/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

var groupAnagrams = function (strs) {
  const myMap = new Map();
  let n = strs.length;
  let result = [];

  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (myMap.has(sortedStr)) {
      result[myMap.get(sortedStr)].push(str);
      //get the position of existing group and push into that group
    } else {
      myMap.set(sortedStr, result.length);
      // Setting the postition of new anagram group in Map
      result.push([str]);
      // Pushing the new group in result array
    }
  }
  return result;
};
