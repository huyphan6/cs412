const special = (str, decorator) => {
    return decorator(str)
}

//exp 1
const str1 = "supercalifragilisticexpialidocious"
const fun1 = str => {
    const arr = str.split("c")
    const start = new Array(arr[0])
    const res = arr.slice(1, arr.length).map(x => "c" + x)
    return start.concat(res)
}

console.log("Exp1:")
console.log(special(str1, fun1))
console.log("----------------------------------------------------")

//exp 2
const str2 = "supercalifragilisticexpialidocious"
const fun2 = str => {
    const arr = str.split("a")
    const numA = arr.length - 1
    const start = new Array(arr[0])
    const res = arr.slice(1, arr.length).map(x => "A" + x)
    const modified = start.concat(res).join("")
    return ( ` Original String: ${str} \n Modified String: ${modified} \n Number Replaced: ${numA} \n Length: ${modified.length}` )
}
console.log("Exp2:")
console.log(special(str2, fun2))
