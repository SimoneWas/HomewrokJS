console.log("wanna be web developer")

function sumNumbers(num1,num2){
    let result=num1+num2;

    console.log(result);
    return result;
    
}
sumNumbers(3,6);

function substractNumbers(num1,num2){

    let result=num1-num2;
    console.log(result);
    return result;
}
substractNumbers(99,5);

function multiplyNumbers(num1,num2){
    let result=num1*num2;
    console.log(result);
    return result;
}
multiplyNumbers(55,6);

function divideNumbers(num1,num2){
    let result=num1/num2;
    console.log(result);
    return result;
}
divideNumbers(100,25);


console.log("Homework part 2")
/**1.declare function and give function name ex.dogAge and write parameters
 * 2.make statement 
 * 3.console log the statement
 * 4.return the output
 * 5.don't forget to write arguments
 */

function dogAge(dogYears,humanYears){
    let dogAge=dogYears*humanYears;
    console.log(dogAge);
    return dogAge;

}
dogAge(7,13)

function humanToDogYears(humanYears,dogYears){
    let humanToDogYears=humanYears/dogYears;
    console.log(humanToDogYears);
    return humanToDogYears;
}
humanToDogYears(56,7)

console.log("Homework part 1 Solution 1")

function returnObject(dog,object){
    let returnObject=dog && object;
    console.log(returnObject);
    return returnObject;
}
returnObject("dog","object")
returnObject("dog","object")
returnObject("dog","object")
returnObject("dog","object")
returnObject("dog","object")


function returnBoolean(car,boolean){
    let returnBoolean=car && boolean;
    console.log(returnBoolean);
    return returnBoolean;
}
returnBoolean("car","boolean")
returnBoolean("car","boolean")
returnBoolean("car","boolean")
returnBoolean("car","boolean")
returnBoolean("car","boolean")

function returnNumber(mouse,number){
    let returnNumber=mouse && number;
    console.log(returnNumber);
    return  returnNumber;
}
returnNumber("mouse","number")
returnNumber("mouse","number")
returnNumber("mouse","number")
returnNumber("mouse","number")
returnNumber("mouse","number")


function returnString(snow,string){
    let returnString=snow && string;
    console.log (returnString);
    return returnString;
}
returnString("snow","string")
returnString("snow","string")
returnString("snow","string")
returnString("snow","string")
returnString("snow","string")

function returnUndefined(defined,undefined){
    let returnUndefined=defined && undefined;
    console.log(returnUndefined);
    return returnUndefined;
}
returnUndefined("defined","undefined")
returnUndefined("defined","undefined")
returnUndefined("defined","undefined")
returnUndefined("defined","undefined")
returnUndefined("defined","undefined")



console.log("Homework part 3")
/** I tried to solve this task but I guess I messed up :/

let sum1=200, sum2=150, sum3=80, sum4=20, sum5=50;
let neededCash=500,cashOnAccount=550;

 if ((sum1+sum2<=neededCash)===(cashOnAccount>=sum1+sum2)){
    console.log("You have enough cash")}

   
     if((sum3+sum4<=neededCash)===(cashOnAccount>=sum3+sum4)){
        console.log("You have enough cash")
    }
         if((sum4+sum5<=neededCash)===(cashOnAccount>=sum4+sum5)){
        console.log("You have enough cash")}
          if ((sum5+sum1<=neededCash)===(cashOnAccount>=sum5+sum1)){
        console.log("You have enough cash")}
          if((sum5+sum2<=neededCash)===(cashOnAccount>=sum5+sum2)){
        console.log("You have enough cash")}
         if ((sum5+sum3<=neededCash)===(cashOnAccount>=sum5+sum3)){
        console.log("You have enough cash")}
          if ((sum5+sum4<=neededCash)===(cashOnAccount>=sum5+sum4)){
        console.log("You have enough cash")
        if ((sum1+sum2+sum3+sum4+sum1<=neededCash)===(cashOnAccount>=sum1+sum2+sum3+sum4+sum5+sum1+sum4))
        console.log("You don't have enough cash")
    };
    */