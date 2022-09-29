const operator = str => {
    const arr = str.split("")
    switch(arr[1]) {
        case "+":
            return Number(arr[0]) + Number(arr[2]);
            break;
        case "-":
            return Number(arr[0]) - Number(arr[2]);
            break;
        case "/":
            return Number(arr[0]) / Number(arr[2]);
            break;
        case "*":
            return Number(arr[0]) * Number(arr[2]);
            break;
        case "^":
            return Number(arr[0]) ** Number(arr[2]);
            break;
        case "%":
            const a = Number(arr[0])
            const b = Number(arr.slice(2,arr.length).join(""))
            return ((a % b) + b) % b
            break;
    }
}

const expressions = ["4+2", "5*7", "6-1", "9/2", "2^8", "8%3"]
const main = list => {
    list.map(expression => console.log(`${expression} = ${operator(expression)}`))
}

main(expressions)