#! /usr/bin/env node

import inquirer from  "inquirer";
import chalk from "chalk";

//Display welcome message
console.log (chalk.blueBright.bold("\n\t\t\tWord Counter"));
console.log("=".repeat(50));

//prompt the user to a sentence
let answers = await inquirer.prompt([
    {
        name:"sentence",
        type : "input",
        message:"Enter  a Sentence",
    }
]);
//trimming sentence
let words = answers.sentence.trim().split(" ");

//analysis of user input sentence
//console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${words.length}`))