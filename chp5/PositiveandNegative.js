let count = 0;
let total = 0;
let positiveNumber = 0;
let negativeNumber = 0;


const ps = require("prompt-sync");
const prompt = ps();
let theNumber = Number(prompt("Enter an integer, the input ends if it is 0: "));
while (theNumber <= 0){
        if (theNumber == 0) {
                console.log("No numbers are entered except " + theNumber);
                break;
        }
}
if (theNumber > 0) {
        positiveNumber +=1;
}
if (theNumber < 0) {
        negativeNumber += 1;
}
total += theNumber;
count++;

while (theNumber != 0){
        theNumber = Number(prompt("Enter an integer, the input ends if it is 0: "));
        if (theNumber > 0) {
            positiveNumber +=1;
        }
        if (theNumber < 0) {
             negativeNumber += 1;
        }
        
        total += theNumber;
        if (theNumber != 0) {
                count++;
        }
}
if (total > 0) {
        let average = total / count;
        console.log("The number of positives is: " + positiveNumber);
        console.log("The number of negatives is : " + negativeNumber);
        console.log("The total is: " + total.toFixed(1));
        console.log("The average is: " + average.toFixed(2));
}