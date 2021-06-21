// 德州扑克：判断牌面是否有顺子
// 描述信息
// 什么是顺子：5张牌，牌面数字连续，即是顺子。
// 一副牌4种花色分别是♠, ♥, ♣, ♦，每个花色从A到K共13张牌，总共4*13=52张牌。
// 要求：用0-51表示这52张牌，按照顺序，♠A-♠K为0-12，♥A-♥K为13-25，♣A-♣K为26-38，♦A-♦K为39-51。
// 任意7张牌，存在数组input中，实现一个judge函数 返回true或者false判断是否有顺子（只要其中有5张是就行）
// function judge(input) {
// }
// 测试代码
// let arr = [8, 2, 4,5, 6, 7, 18, 11] // 18 是红桃6，所以 4 5 6 7 8 是顺
// let arr2 = [0, 4, 6, 7, 8, 9, 11]
// console.log(judge(arr)) // true
// console.log(judge(arr2)) // false

function judge (input) {
  const map = []
  input.map(item => {
    map[item % 13] = 1
  })
  let count = 0;
  for (let i = 0; i < map.length; i++) {
    if (map[i] === 1) count++
    else count--
    if (count >= 5)return true
    return false
  }
}

console.log(judge([18,11,48,43,42,0,5,4,6,18]))
