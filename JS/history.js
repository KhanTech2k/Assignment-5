document.getElementById('donation').addEventListener('click',function(){
    console.log('donation button clicked');
    showSectionById('donation-collect');
    
    document.getElementById('donation').style.backgroundColor = '#B4F461';
    document.getElementById('transaction').style.backgroundColor = 'white';
});
document.getElementById('transaction').addEventListener('click',function(){
    console.log('history button clicked');
    showSectionById('transaction-history');
    document.getElementById('donation').style.backgroundColor = 'white';
    document.getElementById('transaction').style.backgroundColor = '#B4F461';
});

const todayDate  = new Date();

// document.getElementById('nav-btn').addEventListener('click',function(){
//     window.location.href = 'hudai.html';
// });
// document.getElementById('nav-home-btn').addEventListener('click',function(){
//     window.location.href = 'index.html';
// });