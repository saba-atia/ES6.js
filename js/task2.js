const passwordNumber = (num) => '******' + num.slice(7);

let phone = "0776807777";
let result = passwordNumber(phone);
console.log(result);
