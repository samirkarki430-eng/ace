/* console.log();
window.alert('');
"//" this ia a comment
document.getElementById
variebles = containers for storing data values 
                         behaves as if it were the value that it contains
 declaration   let x;
   assignment   x = 5;
   both        let x = 5;
   let name = "Samir"; 
   Boolean are true/false values+ ig let stundent = true;


   
   */
  // arithmetic operators = operands (values, variables, etc.)
//                                         operators (+ - * /)
//                                         ex. 11 = x + 5;

//let students = 30;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2;
//let extraStudents = students % 3;

//console.log(students);

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;

//students++;
//students--;

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction
*/
// How to accept user input

// EASY WAY with a window prompt

//let username = window.prompt("What's your name?");
//console.log(username);

// DIFFICULT WAY HTML textbox

/*let username;

document.getElementById("myButton").onclick = function(){
    
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}*/
// type conversion = change the datatype of a value to another
//                                 (strings, numbers, booleans)

// -------------- EXAMPLE 1 --------------
/*let age = window.prompt("How old are you?");
age = Number(age);
age+=1;

console.log(age, typeof age);

// -------------- EXAMPLE 2 --------------
let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);*/
// const = a variable that can't be changed 
/*
const PI = 3.14159;
let radius;
let circumference;

// PI = 420.69;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
} */
/*let Name = window.prompt("What's your name?");
console.log("Hello " + Name);
let Age = window.prompt("How old are you?");
console.log("You are " + age + " years old");
let city = window.prompt("Which city do you live in?");
console.log("You live in " + city);
let sport = window.prompt("What's your favourite sport?");
console.log("Your favourite sport is " + sport);
let name = "Samir"
let age = 20
let country = "Nepal"
console.log("My name is " + name + ", I'm " + age + " years old and I live in " + country + ".");*/
