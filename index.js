#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let systemGeneratedNumber = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "userguess",
        message: "Guess a number between 1 to 10 :"
    }
]);
if (answer.userguess === systemGeneratedNumber) {
    console.log(chalk.green("You Guess A Correct Number \n You Win"));
}
else {
    while (answer.userguess === answer.systemGeneratedNumber) {
        console.log(chalk.red("Better Luck Next Time"));
        console.log(answer);
    }
}
