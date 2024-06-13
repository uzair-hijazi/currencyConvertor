#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
  USD: 1,
  PKR: 279.33,
  GBP: 0.78,
  EUR: 0.93,
  RYL: 3.75,
  DIR: 3.67,
  AUD: 1.51,
  YUAN: 7.25,
  YEN: 156.91,
  LIRA: 32.34,
};

let frmCurrency = await inquirer.prompt([
  {
    name: "currencyfrom",
    message: "Enter Currency to convert from:",
    type: "list",
    choices: [
      "USD",
      "PKR",
      "GBP",
      "EUR",
      "RYL",
      "DIR",
      "AUD",
      "YUAN",
      "YEN",
      "LIRA",
    ],
  },
  {
    name: "currencyto",
    message: "Enter Currency to convert into:",
    type: "list",
    choices: [
      "USD",
      "PKR",
      "GBP",
      "EUR",
      "RYL",
      "DIR",
      "AUD",
      "YUAN",
      "YEN",
      "LIRA",
    ],
  },
  {
    name: "amount",
    message: "Enter amount to convert:",
    type: "number",
  },
]);

let frmAmount = currency[frmCurrency.currencyfrom];
let toAmount = currency[frmCurrency.currencyto];
let amountAnswer = frmCurrency.amount;

let baseAmount = amountAnswer / frmAmount;
let cnvrtdAmount = baseAmount * toAmount;

console.log(cnvrtdAmount);
