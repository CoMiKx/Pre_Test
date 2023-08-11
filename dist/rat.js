"use strict";
function getQuestionPart(phrases) {
    let str1 = phrases[0];
    let str2 = phrases[1];
    const dp = Array.from({ length: str1.length + 1 }, () => Array(str2.length + 1).fill(0));
    let maxLength = 0;
    let endIndex = 0;
    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    endIndex = i;
                }
            }
        }
    }
    let subString = str1.substring(endIndex - maxLength, endIndex);
    return phrases.map(element => element.replace(subString, "").trim());
}
// Example usage
console.log(getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"]));
console.log(getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"]));
// function getSubstring(str1: string, str2: string): string {
//     const dp: number[][] = Array.from({ length: str1.length + 1 }, () =>
//       Array(str2.length + 1).fill(0)
//     );
//     // let commonSubstring = "";
//     let maxLength = 0;
//     let endIndex = 0;
//     // for (let i = 0; i < str1.length; i++) {
//     //     for (let j = 0; j < str2.length; j++){
//     //         if (str1[i] === str2[j]) {
//     //             commonSubstring += str1[i];
//     //             // console.log(commonSubstring);
//     //         }
//     //     }
//     // }
//     for (let i = 1; i <= str1.length; i++) {
//       for (let j = 1; j <= str2.length; j++) {
//         if (str1[i - 1] === str2[j - 1]) {
//           dp[i][j] = dp[i - 1][j - 1] + 1;
//           if (dp[i][j] > maxLength) {
//             maxLength = dp[i][j];
//             endIndex = i;
//           }
//         }
//       }
//     }
//     return str1.substring(endIndex - maxLength, endIndex);
//   }
//   const str1 = "BATHROOM";
//   const str2 = "BLOODBATH";
//   const commonStr = getLongestCommonSubstring(str1, str2);
//   console.log(commonStr); // Output: "BATH" ?
