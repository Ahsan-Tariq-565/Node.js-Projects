#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000; // Dollar
let myPin = 1234;
console.log(chalk.greenBright("\n \tWelcome to Code with Ahsan - ATM Machine\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.yellow("Enter your pin"),
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.greenBright("\nPin is Correct, Login Successfully!\n"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.yellow("please select option"),
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: chalk.yellow("Enter your amount"),
                type: "number",
            },
        ]);
        if (amountAns.amount >= myBalance) {
            console.log(chalk.redBright("Insufficient Balance"));
        }
        else if (myBalance -= amountAns.amount) {
            console.log(chalk.blue(`${amountAns.amount} Withdraw Successfully`)),
                console.log(chalk.green(`Your Remaining Balance is: ${myBalance}`));
        }
    }
    else if (operationAns.operation === "fast cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                message: chalk.yellow("Select your fast cash option"),
                type: "list",
                choices: ["500", "1000", "2000", "5000"],
            },
        ]);
        myBalance -= fastCashAns.fastCash,
            console.log(chalk.blue(`${myBalance} Withdraw Successfully`)),
            console.log(chalk.green(`Your Remaining Balance is: ${myBalance}`));
    }
    else if (operationAns.operation === "check balance") {
        console.log(chalk.blue(`Your Balance is: ${myBalance}`));
    }
}
else {
    console.log(chalk.redBright("Incorrect pin code!!!"));
}
