/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

var groupAnagrams = function (strs) {
  let n = strs.length;
  let result = [];
  for (let i = 0; i < n; i++) {
    if (strs[i] === "") {
      continue;
    }
    const anagramGroup = [strs[i]]; //initial array of any anagram group

    for (let j = i + 1; j < n; j++) {
      if (strs[j] === "") continue;

      if (isAnagram(strs[i], strs[j])) {
        anagramGroup.push(strs[j]);
        strs[j] = "";
      }
    }
    result.push(anagramGroup);
  }
  result.sort((a, b) => a.length - b.length); //sorting based on their lengths
  return result;
};

function isAnagram(str1, str2) {
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}

console.log(groupAnagrams(strs));
