function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    console.log(inputValueNumber);
    return inputValueNumber;
};
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
};
function showSectionById(id){
    document.getElementById('donation-collect').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

// History
function showDateTime() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString(); // Formats the date and time according to the user's locale
    document.getElementById('dateTime').innerHTML = `<strong>Date & Time:</strong> ${formattedDateTime}`;
  }