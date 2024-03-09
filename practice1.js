// Find index of Banana and replace it with Mango
var fruits = ['Apple', 'Banana', 'Orange'];
var findPosition = fruits.indexOf('Banana');
fruits[1] = 'Mango';
// Remove Orange and add Watermelon
fruits.pop();
fruits.push('Watermelon');
console.log(fruits)