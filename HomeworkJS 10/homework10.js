console.log("wanna be web developer")

console.log("Exercise #1")
/**
 * Declare and initialize a variables of every type that we 
 * learned so far. Print each of them in a console or alert()!
 */


let givenString = "Hello world";
console.log("String Variable:", givenString);
let givenNumber = 10;
console.log("Number Variable:", givenNumber);
let givenUndefined;
console.log("Undefined Variable:", givenUndefined);
let givenBoolean = true;
console.log("Boolean Variable:", givenBoolean);
let givenNull = null;
console.log("Null Variable:", givenNull);

let givenArray = [1, 2, 3];
console.log("Array Variable:", givenArray);




console.log("Exercise #2")

/**
 * Read 5 variables as user input and then 
 * print each of the variable types in the console.
 */
let variable1 = prompt("Enter Variable 1:");
console.log("Type of Variable 1:", typeof variable1);

let variable2 = prompt("Enter Variable 2:");
console.log("Type of Variable 2:", typeof variable2);

let variable3 = prompt("Enter Variable 3:");
console.log("Type of Variable 3:", typeof variable3);

let variable4 = prompt("Enter Variable 4:");
console.log("Type of Variable 4:", typeof variable4);

let variable5 = prompt("Enter Variable 5:");
console.log("Type of Variable 5:", typeof variable5);

console.log("Exercise #3")

/**
 * Write a JavaScript program to get the difference between 
 * a given number and 13, if the number is greater than 13 
 * double the difference as a result.
Make sure you use a function!
Ex. Input: 20 ==> Output: 14
 */
function calcAndDbl(number) {
    let difference = (number - 13);
    
    if (number>13) {
        return difference*2;
    } else {
        return difference;
    }
};

let userInput = prompt("Enter a Number:");
let number = parseFloat(userInput);
let result = calcAndDbl(number);

if (!isNaN(number)) {
    console.log("Input:", number);
    console.log("Output:", result);
} else {
    console.log("Invalid input.");
};

console.log("Exercise #4")

/**
 * Write a JavaScript program that will find out which of two 
 * inserted integers is closer to 100. Make sure to alert the user
 *  if a negative number is inserted!
Make sure you use a function!

Ex. Input1: 20
Input2: 80
Output: 80 is closer to 100
p.s. I got some help from chatGpt
 */
function insertedInteger(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "Please enter non-negative numbers.";
    }
    let distanceTo100Num1 = (100 - num1);
    let distanceTo100Num2 = (100 - num2);

    if (distanceTo100Num1 < distanceTo100Num2) {
        return num1 + " is closer to 100.";
    } else if (distanceTo100Num2 < distanceTo100Num1) {
        return num2 + " is closer to 100.";
    } else {
        return "Both numbers are equidistant from 100.";
    }
};

let input1 = parseInt(prompt("Enter the first number:"));
let input2 = parseInt(prompt("Enter the second number:"));

if (!isNaN(input1) && !isNaN(input2)) {
    let result = insertedInteger(input1, input2);
    alert(result);
} else {
    alert("Invalid input. Please enter valid numbers.");
};

console.log("Exercise #5")
/**
 * Bob's salary is 1000 eur per month.
 *  He has expenses that has to cover during the month. 
 * He has to pay rent for his apartment 375 eur. He should pay
 *  250 eur for his bills in total. Print on screen what is the
 *  amount left that Bob has for the rest of the month, and what 
 * is the total amount of his expenses.
*/
//Amount left for the rest of the month: 375 eur
//Total amount of expenses: 625 eur
let bobSalary=1000;
let bobRent=375;
let bobBills=250;

let bobAmountLeft = bobSalary-bobRent-bobBills;
let  bobTotalExpenses = bobRent + bobBills;


console.log("Amount left for the rest of the month: " + bobAmountLeft + " eur");
console.log("Total amount of expenses: " + bobTotalExpenses + " eur");









