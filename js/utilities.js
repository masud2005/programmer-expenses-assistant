
// All Input Field Value Return
function getInputFieldValueById(id){
    const inputFieldValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputFieldValue);
    return inputNumber;
}


// All Text Field Return
function getTextFieldById(id){
    const textField = document.getElementById(id);
    // const textNumber = parseFloat(textFieldValue);
    return textField;
}