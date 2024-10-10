let budget = 0;
let totalExpenses = 0;
const expenses = [];

function setBudget() {
    const budgetInput = document.getElementById('budget').value;
    const timeframe = document.getElementById('timeframe').value;
    
    if (budgetInput) {
        budget = parseFloat(budgetInput);
        totalExpenses = 0;
        expenses.length = 0; // Clear previous expenses
        updateDisplay();
    }
}

function addExpense() {
    const expenseName = document.getElementById('expenseName').value;
    const expenseAmount = document.getElementById('expenseAmount').value;
    
    if (expenseName && expenseAmount) {
        expenses.push({ name: expenseName, amount: parseFloat(expenseAmount) });
        totalExpenses += parseFloat(expenseAmount);
        updateDisplay();
        document.getElementById('expenseName').value = '';
        document.getElementById('expenseAmount').value = '';
    } else {
        alert("Please enter both expense name and amount.");
    }
}

function setReminder() {
    const reminderName = document.getElementById('reminderName').value;
    const reminderDate = document.getElementById('reminderDate').value;
    
    if (reminderName && reminderDate) {
        alert(`Reminder set for ${reminderName} on ${reminderDate}`);
        document.getElementById('reminderName').value = '';
        document.getElementById('reminderDate').value = '';
    } else {
        alert("Please enter both reminder name and date.");
    }
}

function updateDisplay() {
    document.getElementById('totalExpenses').innerText = totalExpenses.toFixed(2);
    const remainingBudget = budget - totalExpenses;
    document.getElementById('remainingBudget').innerText = remainingBudget.toFixed(2);
    
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';
    expenses.forEach(exp => {
        const li = document.createElement('li');
        li.textContent = `${exp.name}: ₹${exp.amount.toFixed(2)}`;
        expenseList.appendChild(li);
    });
}
