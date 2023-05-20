function factorial(num) {
    if (num <= 0) {
        console.log('0');
    }
    return factorial(num) * factorial(num - 1);
}

console.log(num(10));