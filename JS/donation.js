document.getElementById('noakhali-donate-btn').addEventListener('click', function () {
    const noakhaliInputMoney = getInputFieldValueById('noakhali-donate-money');
    const noakhaliRcvBalance = getTextFieldValueById('noakhali-rcv-balance');
    const myBalance = getTextFieldValueById('my-balance');
    const noakhaliReceived = noakhaliInputMoney + noakhaliRcvBalance;
    console.log(noakhaliReceived, noakhaliRcvBalance, myBalance);
    if (noakhaliInputMoney <= 0 || isNaN(noakhaliInputMoney) === true) {
        alert('Invalid Input. Please, try again!');
        document.getElementById('noakhali-donate-money').value = '';
    }
    else {
        if (myBalance >= noakhaliInputMoney) {
            const newMyBalance = myBalance - noakhaliInputMoney;
            document.getElementById('my-balance').innerText = newMyBalance;
            document.getElementById('noakhali-rcv-balance').innerText = noakhaliReceived;
            const p = document.createElement('p');
            p.innerHTML = `<div class="border rounded-lg mx-16 my-2 p-6">
                <h1 class="text-3xl font-semibold">${noakhaliInputMoney} TK. is Donate for Flood at Noakhali, Bangladesh</h1>
                        <p class="text-xl">Date: ${todayDate}</p>
            </div>`;
            document.getElementById('transaction-history').appendChild(p);
            modal.showModal();
            document.getElementById('noakhali-donate-money').value = '';
        }
        else {
            alert("You don't have enough money!");
            document.getElementById('noakhali-donate-money').value = '';
        }
    }
});
document.getElementById('feni-donate-btn').addEventListener('click', function () {
    const feniInputMoney = getInputFieldValueById('feni-donate-money');
    const feniRcvBalance = getTextFieldValueById('feni-rcv-balance');
    const myBalance = getTextFieldValueById('my-balance');
    const feniReceived = feniInputMoney + feniRcvBalance;
    console.log(feniReceived, feniRcvBalance, myBalance);
    if (feniInputMoney <= 0 || isNaN(feniInputMoney) === true) {
        alert('Invalid Input. Please, try again!');
        document.getElementById('feni-donate-money').value = '';
    }
    else {
        if (myBalance >= feniInputMoney) {
            const newMyBalance = myBalance - feniInputMoney;
            document.getElementById('my-balance').innerText = newMyBalance;
            document.getElementById('feni-rcv-balance').innerText = feniReceived;
            const p = document.createElement('p');
            p.innerHTML = `<div class="border rounded-lg mx-16 my-2 p-6">
                <h1 class="text-3xl font-semibold ">${feniInputMoney} TK. is Donate for Flood Relief in Feni,Bangladesh</h1>
                <p class="text-xl">Date: ${todayDate}</p>
            </div>`;
            document.getElementById('transaction-history').appendChild(p);
            modal.showModal();
            document.getElementById('feni-donate-money').value = '';
        }
        else {
            alert("You don't have enough money!");
            document.getElementById('feni-donate-money').value = '';
        }
    }
});
document.getElementById('quota-donate-btn').addEventListener('click', function () {
    const quotaInputMoney = getInputFieldValueById('quota-donate-money');
    const quotaRcvBalance = getTextFieldValueById('quota-rcv-balance');
    const myBalance = getTextFieldValueById('my-balance');
    const quotaReceived = quotaInputMoney + quotaRcvBalance;
    console.log(quotaReceived, quotaRcvBalance, myBalance);
    if (quotaInputMoney <= 0 || isNaN(quotaInputMoney) === true) {
        alert('Invalid Input. Please, try again!');
        document.getElementById('quota-donate-money').value = '';
    }
    else {
        if (myBalance >= quotaInputMoney) {
            const newMyBalance = myBalance - quotaInputMoney;
            document.getElementById('my-balance').innerText = newMyBalance;
            document.getElementById('quota-rcv-balance').innerText = quotaReceived;
            const p = document.createElement('p');
            p.innerHTML = `<div class="border rounded-lg mx-16 my-2 p-6">
                <h1 class="text-3xl font-semibold">${quotaInputMoney} TK. is Aid for Injured in the Quota Movement</h1>
                <p class="text-xl">Date: ${todayDate}</p>
            </div>`;
            document.getElementById('transaction-history').appendChild(p);
            modal.showModal();
            document.getElementById('quota-donate-money').value = '';
        }
        else {
            alert("You don't have enough money!");
            document.getElementById('quota-donate-money').value = '';
        }
    }
}); 