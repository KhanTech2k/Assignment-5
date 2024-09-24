document.getElementById('donation').addEventListener('click', function () {
    console.log('donation button clicked');
    showSectionById('donation-collect');

    document.getElementById('donation').style.backgroundColor = '#B4F461';
    document.getElementById('transaction').style.backgroundColor = '#F9F7F3';
});
document.getElementById('transaction').addEventListener('click', function () {
    console.log('history button clicked');
    showSectionById('transaction-history');
    document.getElementById('donation').style.backgroundColor = '#F9F7F3';
    document.getElementById('transaction').style.backgroundColor = '#B4F461';
});

const todayDate = new Date();