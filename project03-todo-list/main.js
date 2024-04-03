#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos_list = [];
let while_conditions = true;
//-------------------------------------------- Options ---------------------------------------------------------------------------//
console.log(chalk.blueBright("\n \tWelcome to 'Code with Ahsan' - Todo-List App\n"));
while (while_conditions) {
    let option = await inquirer.prompt([
        {
            name: "user_option",
            type: "list",
            message: (chalk.yellow("select an options :")),
            choices: ["add", "remove"]
        }
    ]);
    //-------------------------------------------------- Add --------------------------------------------------------------------//
    if (option.user_option === "add") {
        let ans = await inquirer.prompt([
            {
                name: "user_ans",
                type: "input",
                message: (chalk.yellow("write something to add in the todo list :"))
            }
        ]);
        if (ans.user_ans !== '') {
            todos_list.push(ans.user_ans);
            console.log(chalk.green(`${todos_list}: add to your todo list`));
        }
        else {
            console.log(chalk.yellow("Please write something to add in the todo list"));
        }
    }
    //------------------------------------------------------- Remove -----------------------------------------------------------------//
    if (option.user_option === "remove") {
        let removeChoice = await inquirer.prompt([
            {
                name: "remove_item",
                type: "list",
                message: (chalk.yellow("select an item to remove :")),
                choices: todos_list
            }
        ]);
        let index_to_remove = todos_list.indexOf(removeChoice.remove_item);
        if (index_to_remove >= 0) {
            todos_list.splice(index_to_remove, 1);
            console.log(chalk.red(`${removeChoice.remove_item}: removed from your todo list`));
        }
    }
    //------------------------------------------ Breaking/stoping while- loop (by false the while loop condition)`-----------------------------------
    let user_ans = await inquirer.prompt([
        {
            name: "selection",
            type: "confirm",
            message: (chalk.yellow("Do you want to continue ?")),
            default: true
        }
    ]);
    if (user_ans.selection === false) {
        while_conditions = false;
    }
}
console.log(chalk.blue("\n \tYour Updated Todos-List is : \n"));
todos_list.forEach(function (element, index) {
    console.log(chalk.greenBright((index + 1) + ' ' + element));
});
