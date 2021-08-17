
// 暴力求解
// function maxProfit (arr) {
//   let maxProfit = 0
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         const profit = arr[j] - arr[i];
//         if (profit > maxProfit) {
//           maxProfit = profit;
//         }
//       }
//     }
//   }
//   console.log(maxProfit)
// }

// 动态规划
function maxProfit (arr) {
  let minPrice = Number.MAX_VALUE
  let maxProfit = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minPrice) {
      minPrice = arr[i];
    } else if (arr[i] - minPrice > maxProfit) {
      maxProfit = arr[i] - minPrice
    }
  }
  console.log(maxProfit)
}
console.log(Number.MIN_SAFE_INTEGER)
maxProfit([7, 1, 5, 3, 6, 2])