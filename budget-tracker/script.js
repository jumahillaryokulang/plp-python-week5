// SpendWise Week 6: variables, user input, calculations, and reusable functions.

const expenseRows = document.querySelectorAll('.expenses-section tbody tr');
const expenses = Array.from(expenseRows, (row) => {
  const cells = row.querySelectorAll('td');
  const amountText = cells[1]?.textContent ?? '0';

  return {
    name: cells[0]?.textContent.trim() ?? 'Unnamed expense',
    amount: Number(amountText.replace(/[^\d.-]/g, '')) || 0,
    category: cells[2]?.textContent.trim() ?? 'Other',
    date: cells[3]?.textContent.trim() ?? ''
  };
});

function calculateTotalExpenses(expenseList) {
  return expenseList.reduce((total, expense) => total + expense.amount, 0);
}

function calculateRemainingBalance(budget, totalSpent) {
  return budget - totalSpent;
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

function displayBudgetSummary(budget, expenseList) {
  const totalSpent = calculateTotalExpenses(expenseList);
  const remainingBalance = calculateRemainingBalance(budget, totalSpent);

  console.group('SpendWise Budget Summary');
  console.log(`Monthly budget: ${formatCurrency(budget)}`);
  console.log(`Number of sample expenses: ${expenseList.length}`);
  console.log(`Total expenses: ${formatCurrency(totalSpent)}`);
  console.log(`Remaining balance: ${formatCurrency(remainingBalance)}`);
  if (remainingBalance < 0) {
    console.warn(`You are over budget by ${formatCurrency(Math.abs(remainingBalance))}.`);
  }
  console.groupEnd();
}

function collectMonthlyBudget() {
  const budgetInput = window.prompt('Enter your monthly budget in dollars (for example, 3000):');

  if (budgetInput === null) {
    console.info('SpendWise: budget entry canceled. Reload the page to try again.');
    return;
  }

  const monthlyBudget = Number(budgetInput.trim().replace(/[$,]/g, ''));
  if (budgetInput.trim() === '' || !Number.isFinite(monthlyBudget) || monthlyBudget < 0) {
    console.error('SpendWise: please reload and enter a valid, non-negative budget amount.');
    return;
  }

  displayBudgetSummary(monthlyBudget, expenses);
}

collectMonthlyBudget();
