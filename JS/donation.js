document.getElementById('noakhali-donate-btn').addEventListener('click',function(){
    const noakhaliDonateMoney = getInputFieldValueById('noakhali-donate-money');
    const noakhaliRcvBalance= getTextFieldValueById('noakhali-rcv-balance');
    noakhaliReceived = noakhaliDonateMoney+noakhaliRcvBalance;
    console.log(noakhaliReceived);
    document.getElementById('noakhali-rcv-balance').innerText=noakhaliReceived;
    const p = document.createElement('p');
    p.innerText=`Donate Money ${noakhaliDonateMoney} TK `;
    console.log('Money rcv',p);
    let myBalance = getTextFieldValueById('my-balance');
    if(myBalance < noakhaliDonateMoney){
        alert('Taka nai');
        return;
    }
    else{
        myBalance=myBalance-noakhaliDonateMoney;
        document.getElementById('my-balance').innerText=myBalance;
        console.log(myBalance);
        document.getElementById('transaction-history').appendChild(p);
    }
}); 
document.getElementById('feni-donate-btn').addEventListener('click',function(){
    const feniDonateMoney = getInputFieldValueById('feni-donate-money');
    const feniRcvBalance= getTextFieldValueById('feni-rcv-balance');
    feniReceived = feniDonateMoney+feniRcvBalance;
    console.log(feniReceived);
    document.getElementById('feni-rcv-balance').innerText=feniReceived;
    let myBalance = getTextFieldValueById('my-balance');
    if(myBalance<feniDonateMoney){
        alert('Taka nai');
        return;
    }
    else{
        myBalance=myBalance-feniDonateMoney;
        document.getElementById('my-balance').innerText=myBalance;
        console.log(myBalance);
    }
});
document.getElementById('quota-donate-btn').addEventListener('click',function(){
    const quotaDonateMoney = getInputFieldValueById('quota-donate-money');
    const quotaRcvBalance= getTextFieldValueById('quota-rcv-balance');
    quotaReceived = quotaDonateMoney+quotaRcvBalance;
    console.log(quotaReceived);
    document.getElementById('quota-rcv-balance').innerText=quotaReceived;
    let myBalance = getTextFieldValueById('my-balance');
    if(myBalance<quotaDonateMoney){
        alert('Taka nai');
        return;
    }
    else{
        myBalance=myBalance-quotaDonateMoney;
        document.getElementById('my-balance').innerText=myBalance;
        console.log(myBalance);
    }
});