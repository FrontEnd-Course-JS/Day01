/*
*Part 01*
    1- Difference between Var - let - const
        *var*

        *let*

        *const*

    2- primitive dataTypes with example for every type

    3- Operators in JS with example for each category

*/

//Part02

//01
let name = "Eslam Ashraf Abdelazem";
let age = 22;
const is_student = false;
let courseNum = 5;

console.log(name);//Eslam Ashraf Abdelazem
console.log(age);//22
console.log(is_student);//false
console.log(courseNum);//5

//02
let title = "Jr Backend Developer";
let salary = 10_000;
let is_employee = false;
let maritalStatus;
let birthDate = null;

console.log(typeof title);//string
console.log(typeof salary);//number
console.log(typeof is_employee);//boolean
console.log(typeof maritalStatus);//undefined
console.log(typeof birthDate);//object

//03
let num01 = 10 , num02 = 5 , text = "10";
let sum = num01+num02 , diff = num01-num02 , div = num01/num02 , mul = num01*num02 , mod = num01%num02;

console.log("Sum = "+sum);//15
console.log("diff = "+diff);//5
console.log("div = "+div);//2
console.log("mul = "+mul);//50
console.log("mod = "+mod);//0

console.log(num01>num02);//true
console.log(num01<num02);//false
console.log(num01==text);//true
console.log(num01===text);//false

console.log((num01>num02) && (num01 == text));//true
console.log((num01>num02) && (num01 < num02));//false
console.log((num01>num02) || (num01 < num02));//true
console.log((num01>num02) || (num01 == text));//true
console.log((num01<num02) || (num01 === text));//false
console.log(!(num01<num02) || (num01 === text));//true



