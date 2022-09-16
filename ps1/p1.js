const reverseAlpha = str => {
    return str.split("").sort().reverse().join("")
}

console.log(reverseAlpha("exioi"));
console.log(reverseAlpha("supercalifragilisticexpialidocious"));