# SpendWise Budget Tracker

SpendWise is a responsive personal budget tracker foundation. This stage uses a JavaScript prompt to collect a monthly budget, reads sample expenses from the table, calculates the total spending and remaining balance, and prints a clearly labeled summary in the browser console. The expense-entry form is still a visual prototype; it does not save new expenses.

## Project files

- **`index.html`** — Semantic page structure: heading, expense form, sample expense table, help details, and budgeting video. It loads `script.js` with `defer` so the HTML is available before the JavaScript runs.
- **`style.css`** — Responsive layout, color palette, typography, and styles for the form, table, and other sections.
- **`script.js`** — Collects the user's monthly budget, converts table rows into expense data, performs calculations with reusable functions, and displays results in the console.

## JavaScript concepts

- **Variables and data types:** `const` stores the expense list and DOM rows; object properties store expense names, amounts, categories, and dates. The budget and calculation results are numeric values.
- **User input:** `window.prompt()` asks for a monthly budget. The input is trimmed, cleaned of dollar signs and commas, converted to a number, and checked for cancellation or invalid/negative values.
- **Calculations:** `calculateTotalExpenses()` sums sample expense amounts, and `calculateRemainingBalance()` subtracts that total from the user's budget.
- **Reusable functions:** `formatCurrency()` formats dollar values, `displayBudgetSummary()` organizes the summary output, and `collectMonthlyBudget()` handles prompt input and validation.
- **Console output:** A labeled `SpendWise Budget Summary` group displays the monthly budget, sample expense count, total expenses, and remaining balance. An over-budget result is also flagged.

## Run and test

Open `index.html` in a browser. Enter a monthly budget when prompted. Open Developer Tools (usually F12 or right-click → Inspect) and check the **Console** for the results. Try values such as `3000`, `$1,500`, `0`, a negative number, invalid text, or Cancel to see the validation behavior. Reload the page to enter a different budget. Google Fonts and the embedded video need an internet connection.
