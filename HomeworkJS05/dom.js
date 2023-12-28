console.log("cool page")

let myDiv=document.getElementById("first")
first.style.color="green"


//I think that is easier to use elements with ID selector =)
let myH1=document.getElementById("myTitle")
myTitle.style.color="pink"


let myParagraph=document.getElementsByClassName("paragraph")





console.log("Exercise 2")
/**
 * 1.make an array of 5 numbers
 * 2.write function with name print numbers
 * 3.make for loop,+= the output to unordered list, dont forget to i++
 * 4.write function with name printSum to print all the numbers
 * 5.make for loop
 */

let numbersArray = [1, 2, 3, 4, 5];

   
    function printNumbers() {
        let output = "<ul>";

        for (let i = 0; i < numbersArray.length; i++) {
            output += "<li>" + numbersArray[i] + "</li>";
        }

        output += "</ul>";

        document.body.innerHTML += output;
    }


    function printSum() {
        let sum = 0;

        for (let i = 0; i < numbersArray.length; i++) {
            sum += numbersArray[i];
        }

        document.body.innerHTML += "<p>Sum of all numbers: " + sum + "</p>";
    }


    printNumbers();
    printSum();

