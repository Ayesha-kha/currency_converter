//#!/usr/bin/env node.
import inquirer from "inquirer";

let currencyRate: any = {
  USD: 1,
  PKR: 278.9,
  IN: 83.53,
  EUR: 0.938,
  GBP: 0.804,
};

let convertCurrency = await inquirer.prompt(
    [
  {
    name: "from",
    message: "Enter from currency",
    type: "list",
    choices: ["USD", "PKR", "IN", "EUR", "GBP"],
  },
  {
    name: "to",
    message: "Enter to currency",
    type: "list",
    choices: ["USD", "PKR", "IN", "EUR", "GBP"],
  },
  {
    name: "amount",
    message: "Enter your amount",
    type: "number",
  }
]
)
let fromCurrency = currencyRate[convertCurrency.from ]
let toCurrency = currencyRate[convertCurrency.to]
let amount = convertCurrency.amount
let baseAmount = amount / fromCurrency
let convertedAmount = baseAmount * toCurrency

console.log(convertedAmount.toFixed(2));

