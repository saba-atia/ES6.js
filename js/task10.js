const character = (char, string) => {
    if (string[0] === char || string[- 1] === char) {
        return true;
    } else {
        return false;
    }
};

console.log(character("o", "orange")); // true
console.log(character("z", "orange")); // false
