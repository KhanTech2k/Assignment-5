document.getElementById('donation').addEventListener('click',function(){
    console.log('donation button clicked');
    showSectionById('donation-collect');
});
document.getElementById('transaction').addEventListener('click',function(){
    console.log('history button clicked');
    showSectionById('transaction-history');
});

const todayDate  = new Date();

// document.getElementById('nav-btn').addEventListener('click',function(){
//     window.location.href = 'hudai.html';
// });
// document.getElementById('nav-home-btn').addEventListener('click',function(){
//     window.location.href = 'index.html';
// });