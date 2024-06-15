
function Fraction(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
}
 

Fraction.prototype.add = function(Fraction2) {
    var newNumerator = this.numerator * Fraction2.denominator + Fraction2.numerator * this.denominator;
    var newDenominator = this.denominator * Fraction2.denominator;
    return new Fraction(newNumerator, newDenominator);
}
 

Fraction.prototype.subtract = function(Fraction2) {
    var newNumerator = this.numerator * Fraction2.denominator - Fraction2.numerator * this.denominator;
    var newDenominator = this.denominator * Fraction2.denominator;
    return new Fraction(newNumerator, newDenominator);
}
 

Fraction.prototype.multiply = function(Fraction2) {
    var newNumerator = this.numerator * Fraction2.numerator;
    var newDenominator = this.denominator * Fraction2.denominator;
    return new Fraction(newNumerator, newDenominator);
}
 

Fraction.prototype.divide = function(Fraction2) {
    var newNumerator = this.numerator * Fraction2.denominator;
    var newDenominator = this.denominator * Fraction2.numerator;
    return new Fraction(newNumerator, newDenominator);
}
 

var fraction1 = new Fraction(1, 2);
var fraction2 = new Fraction(1, 3);
 
var sum = fraction1.add(fraction2);
console.log("Sum:", sum.numerator + "/" + sum.denominator);
 
var difference = fraction1.subtract(fraction2);
console.log("Difference:", difference.numerator + "/" + difference.denominator);
 
var product = fraction1.multiply(fraction2);
console.log("Product:", product.numerator + "/" + product.denominator);
 
var quotient = fraction1.divide(fraction2);
console.log("Quotient:", quotient.numerator + "/" + quotient.denominator);
 
