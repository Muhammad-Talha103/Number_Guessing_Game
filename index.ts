#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"

async function restart(){

let systemGeneratedNumber=Math.floor(Math.random() * 10)

const answer=await inquirer.prompt([
    {
        type:"number",
        name:"userguess",
        message:"Guess a number between 1 to 10 :"
    }
])

if(answer.userguess === systemGeneratedNumber ){
    console.log(chalk.green("You Guess A Correct Number \n You Win"));
    
}else{
    console.log(chalk.red("Better Luck Next Time"));
    
    
}
}

async function again() {
    do{
        await restart()
        var startagain = await inquirer.prompt({
            type:"input",
            name:"restart",
            message:"If You Want Continue Press Y Or If You Want to Exit Press N :"
        })
    }
    while(startagain.restart === "Y" ||startagain.restart === "y" ||startagain.restart === "yes" ||startagain.restart === "Yes")
}

restart()
