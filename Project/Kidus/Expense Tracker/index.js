// Get elements
const balanceEl = document.getElementById("balance");
const transactionsEl = document.getElementById("transactions");
const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");

// Load transactions from localStorage
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// Function to add a transaction
function addTransaction() {
    const desc = descInput.value.trim();
    const amount = parseFloat(amountInput.value);

    if (desc === "" || isNaN(amount)) {
        alert("Please enter a valid description and amount!");
        return;
    }

    const transaction = { id: Date.now(), desc, amount };
    transactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));

    descInput.value = "";
    amountInput.value = "";
    updateUI();
}

// Function to remove a transaction
function removeTransaction(id) {
    transactions = transactions.filter(tx => tx.id !== id);
    localStorage.setItem("transactions", JSON.stringify(transactions));
    updateUI();
}

// Function to update UI
function updateUI() {
    // Calculate balance
    const totalBalance = transactions.reduce((acc, tx) => acc + tx.amount, 0);
    balanceEl.textContent = `$${totalBalance.toFixed(2)}`;
    balanceEl.className = totalBalance >= 0 ? "text-green-500" : "text-red-500";

    // Render transaction list
    transactionsEl.innerHTML = transactions
        .map(tx => `
            <li class="flex justify-between items-center p-2 ${tx.amount > 0 ? 'bg-green-100' : 'bg-red-100'} rounded-md">
                <span>${tx.desc}</span>
                <span>${tx.amount > 0 ? "+" : ""}$${tx.amount.toFixed(2)}</span>
                <button onclick="removeTransaction(${tx.id})" class="text-red-500 hover:text-red-700">❌</button>
            </li>
        `)
        .join("");
}

// Initial render
updateUI();
