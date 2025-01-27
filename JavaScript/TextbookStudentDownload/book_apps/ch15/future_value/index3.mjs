import { calcFutureValue } from "./murach-calc-future-value.mjs";

// convert command line arguments from strings to numbers
const investment = parseFloat(process.argv[2]);
const rate = parseFloat(process.argv[3]);
const years = parseInt(process.argv[4]);

// use calcFutureValue() to calculate the future value
const futureValue = calcFutureValue(investment, rate, years);

// display results
console.log(`Investment amount: ${investment}`);
console.log(`Interest rate: ${rate}`);
console.log(`Years: ${years}`);
console.log(`Future Value: ${futureValue.toFixed(2)}`);
