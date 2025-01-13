const capitalWord=(words)=>words.split(" ").map (word=>word[0].toUpperCase()+word.slice(1)).join(" ");

let words="coding academy by orange";
let result=capitalWord(words);
console.log(result);