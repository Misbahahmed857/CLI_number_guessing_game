#! /usr/bin/env node

//import the inquirer module
import inquirer from "inquirer";

// Use inquirer.prompt to display a prompt to the user
const answers = await inquirer.prompt([
   {
    // Set the name of the answer to "userGuessNumber"
      name:"userGuessNumber",
    // Set the type of input to a number
      type: "number",
       // Set the message to display to the user
      message: "Guess a number between 1 to 6!  ",

    },
]);

// Generate a random number between 1 and 6 using Math.random() and Math.floor()
 let randomNumber = Math.floor(Math.random()* 6 + 1);

 console.log("----Welcome To Number Guessing Game----")

 // Check if the user's guess matches the random number
 if(answers.userGuessNumber === randomNumber) {
    console.log("Congratulations! You guessed correctly.")
}
  else{

    // If the guess is incorrect, log a message with the correct answer
    console.log("Sorry, but the correct number was " + randomNumber + ".")
};


