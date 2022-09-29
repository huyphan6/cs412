// Write a function that prints the cube value of its input (ie f(x)=x^3)

const cube = arr => {
    return arr.map(x => x * x * x);
}

console.log(cube([1,2,3,4,5,6,7]))