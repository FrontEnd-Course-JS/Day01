/*
*Part 01*
    1- Difference between Var - let - const
        *var*
            01- Can reinitialized
                var x = 5;
                x = 6;
            02- Can Redeclared
                var x = "ahmed";
                var x = "Khalid";
            03- Can use before declared
                console.log(x);//undefined
                var x = 5;
        *let*
            01- Can reinitialized
                let x = 5;
                x = 6;
            02- Can't Redeclared
                let x = "ahmed";
                let x = "Khalid";//error
            03- Can't use before declared
                console.log(x);//not-defined [error] => must declare (x) first then print
                let x = 5;
        *const*
            01- Can't reinitialized
                const x = 5;
                x = 6;
            02- Can Redeclared
                const x = "ahmed";
                const x = "Khalid";
            03- Can use before declared
                console.log(x);//undefined
                const x = 5;
    2- primitive dataTypes with example for every type
        01- number
            let x = 5;
            let y = 5.6;
        02- string
            let x = "Eslam";
        03- undefined
            let x = undefined;
            let x;
        04- Boolean
            let x = true;
            let y = false;
        05- null
            let x = null;
    2- non-primitive dataTypes with example for every type
        01- object
            let person = {name:"Eslam",age=22};
        02- Array
            let carsType = ["Lamborgini","BMW","Audi","Mercedes"];
        
    3- Operators in JS with example for each category
        01- Arithmetic Operators
            let sum = x+y;
        02- Comparison Operators
            x==y;
            x>y;
            x<y;
            x>=y;
            x<=y;
            x===y;
            x!=y;
            x!==y;
            
        03- Logical Operator
            (x>y && x>z);
            (X>y || z>y);
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
let num01 = 10, num02 = 5, text = "10";
let sum = num01 + num02, diff = num01 - num02, div = num01 / num02, mul = num01 * num02, mod = num01 % num02;

console.log("Sum = " + sum);//15
console.log("diff = " + diff);//5
console.log("div = " + div);//2
console.log("mul = " + mul);//50
console.log("mod = " + mod);//0

console.log(num01 > num02);//true
console.log(num01 < num02);//false
console.log(num01 == text);//true
console.log(num01 === text);//false

console.log((num01 > num02) && (num01 == text));//true
console.log((num01 > num02) && (num01 < num02));//false
console.log((num01 > num02) || (num01 < num02));//true
console.log((num01 > num02) || (num01 == text));//true
console.log((num01 < num02) || (num01 === text));//false
console.log(!(num01 < num02) || (num01 === text));//true



