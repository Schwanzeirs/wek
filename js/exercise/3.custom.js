// custom hof that return another function
function multiplyBy(n) {
    return function (x) {
        return x * n;
    }
}

const double = multiplyBy(2);
console.log(double(2));

// custom hof that implement callbacks
function repeat (n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

function logNumber(n) {
    console.log(`The number is ${n}`);
}

repeat(5, logNumber);