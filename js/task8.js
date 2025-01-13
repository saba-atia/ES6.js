const removeNumber = (string, index) => {
    let arr = string.split('');
    arr.splice(index, 1);
    return arr.join('');
};

let sampleInput = "Orange";
let indexLetter = 3;
let result = removeNumber(sampleInput, indexLetter);
console.log(result);
