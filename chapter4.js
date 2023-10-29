// PRACTICE 4.1
let boolValue = true;
console.log(boolValue);

if (boolValue) {
    console.log("The condition is true");
}
if (!boolValue) {
    console.log("The condition is false");
}
boolValue = !boolValue
console.log(boolValue);

// PRACTICE 4.2
let age = prompt("What's Your Age");
let ageinnum = Number(age);
let message = ""
if (age >= 21) {
    message = "You are confirmed for entry to the venue and can purchase alcohol.";
} else if (age >= 19) {
    message = "You are confirmed for entry to the venue, but unfortunately, you cannot purchase alcohol.";
} else {
    message = "Sorry, you are denied entry to the venue.;"
}
console.log(message);

// PRACTICE 4.3
let iDValid = true;
let iDValidMessage = iDValid ? "You'r Allowed" : "You'r not Allowed";
console.log(iDValidMessage);

// PRACTICE 4.4
let randomNumber = Math.random();
randomNumber = Math.floor(randomNumber * 6);
let userQuestions = prompt("enter a number");
let result = "";

switch (userQuestions) {
    case 0:
        result = "Yes,you're Correct";
        break;
    case 1:
        result = "Absolutly Yes";
        break;
    case 2:
        result = "Amazing You did well";
        break;
    case 3:
        result = "Thats Great";
        break;
    case 4:
        result = "Good One";
        break;
    case 5:
        result = "Congratulations";
        break;
    default:
        result = "You're nearest Better luck, next time";
}
let finalResponse = `You entered the number: ${userQuestions}\nMy response (linked to random number ${randomNumber}): ${result}`;
console.log(finalResponse);

// PRACTICE 4.5
let prize = prompt("Select a number between 0 and 10");
let intonumber = parseInt(prize);
let outputMessage = "My Selection: ";
switch (prize) {
    case 0:
        outputMessage += "A pat on the back!";
        break;
    case 1:
        outputMessage += "A gold star!";
        break;
    case 2:
        outputMessage += "A high-five!";
        break;
    case 3:
        outputMessage += "A virtual hug!";
        break;
    case 4:
        outputMessage += "A round of applause!";
        break;
    case 5:
    case 6:
        outputMessage += "A small trophy!";
        break;
    case 7:
    case 8:
        outputMessage += "A gift card!";
        break;
    case 9:
    case 10:
        outputMessage += "A grand prize!";
        break;
    default:
        outputMessage += "No prize for that selection.";
}
console.log(outputMessage);

/////////////////CHAPTER PROJECT///////////////////////////
// Evaluating a number game
let numberGame = prompt("Enter a number");
let dynamicNo = 10
if (numberGame > dynamicNo) {
    console.log("Your number is greater than the dynamic number.");
} else if (numberGame == dynamicNo) {
    console.log("Your number is equal to the dynamic number.");
} else {
    console.log("Your number is less than the dynamic number.");
}

// Friend checker game
let friendName = prompt("Enter your name");
let response = "";
switch (friendName) {
    case "laiba":
        response = "Yes you're in Friend list"
        break;
    case "kaml":
        response = "Yes you're in Friend list"
        break;
    case "merab":
        response = "Yes you're in Friend list"
        break;
    case "mehreen":
        response = "Yes you're in Friend list"
        break;

    default:
        response = "No you're not in Friend list"
}
console.log(response);

// Rock Paper Scissors game
let choices = ["Rock", "Paper", "Scissor"];
let playerIndex = Math.floor(Math.random() * 3);
let computerIndex = Math.floor(Math.random() * 3);
let resultMessage;
if (playerIndex === computerIndex) {
    resultMessage = "It's a tie!";
} else {
    if (
        (playerIndex === 0 && computerIndex === 2) || // Rock beats Scissors
        (playerIndex === 1 && computerIndex === 0) || // Paper beats Rock
        (playerIndex === 2 && computerIndex === 1)    // Scissors beats Paper
    ) {
        resultMessage = "You win!";
    } else {
        resultMessage = "Computer wins!";
    }
}
console.log(`Player chose ${choices[playerIndex]}. Computer chose ${choices[computerIndex]}. ${resultMessage}`);