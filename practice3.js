// Find the largest number between three of these numbers
var num1 = 13;
var num2 = 79;
var num3 = 45;
if (num1 > num2 && num1 > num3) {
    console.log('num1 is the largest number');
}
else if (num2 > num1 && num2 > num3) {
    console.log('num2 is the largest number');
}
else {
    console.log('num3 is the largest number')
}

// Find out if there are equal sides in the triangle
var side1 = 9;
var side2 = 8;
var side3 = 9;
if (side1 == side2 || side1 == side3) {
    console.log('The triangle is isosceles');
}
else if (side2 == side3) {
    console.log('The triangle is isosceles');
}
else {
    console.log('The triangle is not isosceles')
}
