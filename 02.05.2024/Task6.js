
function isPerfectNumber(num1) {
    let sum = 0;
    for (let i = 1; i <= num1 / 2; i++) {
        if (num1 % i === 0) {
            sum += i;
        }
    }
    return sum === num1;
}
    function PerfectNumbersInRange(min, max) {
        for (let i = min; i <= max; i++) {
            if (isPerfectNumber(i)) {
                console.log(i);
            }
        }
    }
