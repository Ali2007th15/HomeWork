function Factorial(num1) {
    if (num1 === 0 || num1 === 1) {
        return 1;
    } else {
        return num1 * Factorial(num1 - 1);
    }
}