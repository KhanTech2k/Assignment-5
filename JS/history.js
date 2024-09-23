document.getElementById('donation').addEventListener('click',function(){
    console.log('donation button clicked');
    showSectionById('donation-collect');
});
document.getElementById('transaction').addEventListener('click',function(){
    console.log('history button clicked');
    showSectionById('transaction-history');
});