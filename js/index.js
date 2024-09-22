

// Calculate  Programmer Expenses Assistant Money
document.getElementById('calculate-btn').addEventListener('click', function(){
    const income = getInputFieldValueById('income');
    const software = getInputFieldValueById('software');
    const courses = getInputFieldValueById('courses');
    const internet = getInputFieldValueById('internet');
    // console.log({income, software, courses, internet});

    // Calculate Total Expense
    const totalExpense = software + courses + internet;
    const totalExpenseAmount = document.getElementById('total-expenses');
    totalExpenseAmount.innerText = totalExpense.toFixed(2);

    // Calculate Total Balance
    const totalBalance = income - totalExpense;
    const totalBalanceAmount = document.getElementById('balance');
    totalBalanceAmount.innerText = totalBalance.toFixed(2);

    // Calculate Saving Amount & Remaining Balance
    document.getElementById('calculate-savings').addEventListener('click', function(){
        
        // Calculate Saving Amount
        const savingsAmount = getInputFieldValueById('savings');
        const totalSavingsAmount = (income * savingsAmount) / 100;
        const savings = document.getElementById('savings-amount');
        savings.innerText = totalSavingsAmount.toFixed(2);

        // Calculate Remaining Balance
        const totalRemainingBalance = totalBalance - totalSavingsAmount;
        const remainingBalance = document.getElementById('remaining-balance');
        remainingBalance.innerText = totalRemainingBalance.toFixed(2);
    })

    // Show Results Section
    const results = document.getElementById('results');
    results.classList.remove('hidden');

    // Expense History
    const historyList = document.getElementById('history-list');
    const historyItem = document.createElement('div');
    historyItem.className = 'bg-white p-3 rounded-md shadow-sm border-l-2 border-indigo-500';
    historyItem.innerHTML = `
        <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
        <p class="text-sm font-bold text-gray-800">Income: ৳${income.toFixed(2)}</p>
        <p class="text-xs text-gray-600">Expense: ৳${totalExpense.toFixed(2)}</p>
        <p class="text-xs text-gray-600">Balance: ৳${totalBalance.toFixed(2)}</p>
    `;
    historyList.insertBefore(historyItem, historyList.firstChild);
})



// Add Event Listener from Assistant and history tab
const historyTab = document.getElementById('history-tab')
const assistantTab = document.getElementById('assistant-tab')

// History Tab
historyTab.addEventListener('click', function(){
    historyTab.classList.add('bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white');
    assistantTab.classList.remove('bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white');
    assistantTab.classList.add('text-gray-500');
    document.getElementById('expense-form').classList.add('hidden');
    
    //Show History Section
    const historySection = document.getElementById('history-section');
    historySection.classList.remove('hidden')
})

// Assistant Tab
assistantTab.addEventListener('click', function(){
    assistantTab.classList.add('bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white');
    historyTab.classList.remove('bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white');
    document.getElementById('expense-form').classList.remove('hidden');
})