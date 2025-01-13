const reverseNumber =(num)=>parseInt(num.toString().split('').reverse().join(''));
let number=92485;
let reverseNum=reverseNumber(number);

console.log(reverseNum);