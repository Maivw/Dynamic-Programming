// https://leetcode.com/problems/word-break/

// Using tabulation
// var wordBreak = function(s, wordDict) {
//     let table = new Array(s.length +1).fill(false);
//     table[0] = true;

//     for (let i = 0; i < table.length; i++) {
//         if(table[i] === false) continue;

//         for (let j = i+ 1; j < table.length; j++) {
//             let word = s.slice(i, j);

//             if(wordDict.includes(word)){
//                 table[j] = true;
//             }
//         }
//     };

//     return table[table.length -1];
// };

// using recursion
var wordBreak = function (s, wordDict) {
	return verifyBreak(s, wordDict, 0, {});
};
let memo = {};
function verifyBreak(word, dic, start, memo = {}) {
	if (memo[start] !== undefined) {
		return memo[start];
	}

	if (start === word.length) return true;

	for (let end = start + 1; end <= word.length; end++) {
		let wildWord = word.substring(start, end);
		if (dic.includes(wildWord) && verifyBreak(word, dic, end, memo)) {
			return (memo[start] = true);
		}
	}
	return (memo[start] = false);
}
