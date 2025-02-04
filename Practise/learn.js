console.log("Hello world")
let total = 0, count = 1;
while(count <= 10){
        total+= count;
        count+= 1;
}
console.log(total)
console.log(`half of 100 is ${100 / 2}`)
"${} ----> Template literal"
console.log(typeof 4.5)
console.log(3 > 2)
console.log("Aardvark" < "Zoroaster")
console.log(true && false)
console.log(8 * null)
console.log("5" - 1)
console.log("5" + 1)
console.log("five" * 2)
"Binding or Variable"
let caught = 5 * 5;
console.log(caught)
let ten = 10;
console.log(ten * ten);
let mood = "light"
console.log(mood)
mood = "dark"
console.log(mood)

let luigisDebt = 140;
luigisDebt = luigisDebt - 35
console.log(luigisDebt)
let r 
console.log(r)

let one = 1, two = 2, three = 3;
console.log(one + two + three)

var name = "Ayda";
const greeting = "Hello  ";
console.log(greeting + name)

console.log(Math.max(2, 4))
console.log(Math.min(2, 4) + 100)

"Control Flow in JavaScript"

const ps = require("prompt-sync");
// const prompt = ps();
// let theNumber = Number(prompt("Pick a number:   "));
// console.log("Your number is the square root of " + (theNumber * theNumber));


// const prompt1 = ps();
// let theNumber1 = Number(prompt1("Pick a number:   "));
// if(!Number.isNaN(theNumber1)){
//     console.log("Your number is the square root of " + (theNumber1 * theNumber1));    
// }

if(1 + 1 == 2) console.log("It's true")

const prompt2 = ps();
let theNumber2 = Number(prompt2("Pick a number:   "));
// if(!Number.isNaN(theNumber2)){
//     console.log("Your number is the square root of " + (theNumber2 * theNumber2));    
// } else{
//      console.log("Hey. Why didn't you give me a number?");
// }

if (theNumber2 < 10) {
console.log("Small");
} 
else if (theNumber2 < 100) {
console.log("Medium");
} 
else {
console.log("Large");
}

let number = 0;
while(number <= 12){
        console.log(number)
        number = number + 2;
}

let result = 1;
let counter = 0;
while(counter < 10){
        result = result * 2;
        counter = counter + 1;
}
console.log(result)

if (false != true) {
console.log("That makes sense.");
if (1 < 2) {
console.log("No surprise there.");
}
}

for(let number = 0; number <= 12; number = number + 2){
        console.log(number)
}

let result1 = 1;
for(let counter = 0; counter < 10; counter = counter + 1){
      result1 = result1 * 2;  
}
console.log(result1)


for(let current = 20; ; current = current + 1){
        if(current % 7 == 0){
                console.log(current);
                break;
        }
}