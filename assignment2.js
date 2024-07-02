// Task 1
function factorial(n) {
    if (n < 0) {
        return -1;
    }
    
    if (n === 0) {
        return 1;
    }

    if (n > 15) {
        return Infinity;
    }

    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}
console.log(factorial(-5));
console.log(factorial(0));
console.log(factorial(30));
console.log(factorial(8));


// Task 2
let str = 'Helloworld'
function camelCase(str) {
    return str
    .charAt(0).toLowerCase() + str.slice(1)
    .toUpperCase(5)
}
console.log(camelCase(str)); 


// Task 3
function countDown(n) {
    for (let i = n; i >= 1; i--) {
        console.log(i);
    }
}
countDown(6);

