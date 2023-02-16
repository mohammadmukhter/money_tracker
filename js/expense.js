// all field self validation
fieldValidate('income');
fieldValidate('food');
fieldValidate('rent');
fieldValidate('cloth');
fieldValidate('save');


document.getElementById('calculate_expense').addEventListener('click', (e)=> {
    const incomeFieldElement = document.getElementById('income');
    const incomeFieldValue = parseFloat(incomeFieldElement.value);

    const foodFieldElement = document.getElementById('food');
    const foodFieldValue = parseFloat(foodFieldElement.value);

    const rentFieldElement = document.getElementById('rent');
    const rentFieldValue = parseFloat(rentFieldElement.value);

    const clothFieldElement = document.getElementById('cloth');
    const clothFieldValue = parseFloat(clothFieldElement.value);

    const totalExpenseElement = document.getElementById('total_expense');
    const balanceAfterExpense = document.getElementById('balance_after_expense');

    // validation and calculation 

    if(isNaN(incomeFieldValue) || incomeFieldValue < 0){
        alert('Please provide actual positive income amount');
    } else if(isNaN(foodFieldValue) || foodFieldValue < 0){
        alert('Please provide actual positive food amount');
    } else if(isNaN(rentFieldValue) || rentFieldValue < 0){
        alert('Please provide actual positive rent amount');
    } else if(isNaN(clothFieldValue) || clothFieldValue < 0){
        alert('Please provide actual positive cloth amount');
    } else{
        const totalExpense = foodFieldValue + rentFieldValue + clothFieldValue;
        const balance = incomeFieldValue - totalExpense;
        
        if(totalExpense > incomeFieldValue){
            alert('Expense cannot not bigger than income!!');
            totalExpenseElement.innerText = 0;
            balanceAfterExpense.innerText = 0;
        } else{
            totalExpenseElement.innerText = totalExpense;
            balanceAfterExpense.innerText = balance;
        }      
    }
});

document.getElementById('calculate_save').addEventListener('click',(e)=>{
    const incomeFieldElement = document.getElementById('income');
    const incomeFieldValue = parseFloat(incomeFieldElement.value);

    const saveFieldElement = document.getElementById('save');
    const saveFieldValue = saveFieldElement.value;

    const totalExpenseElement = document.getElementById('total_expense');
    const totalExpenseElementInnerText = parseFloat(totalExpenseElement.innerText);

    const balanceAfterExpense = document.getElementById('balance_after_expense');
    const balanceAfterExpenseInnerText = parseFloat(balanceAfterExpense.innerText);

    const savedElement = document.getElementById('save_value');
    const remainingBalanceElement = document.getElementById('remaining_balance');

    // validation and calculation

    if(isNaN(saveFieldValue) || saveFieldValue < 0){
        alert('Please Provide positive number Only!');
    } else if(isNaN(totalExpenseElementInnerText) && isNaN(balanceAfterExpenseInnerText)){
        alert('There wast an error an expense and balance Element');
    } else{
        const calculatedSaveAble = incomeFieldValue * (saveFieldValue / 100);
        if(calculatedSaveAble > balanceAfterExpenseInnerText){
            alert('Saving is not possible');
            savedElement.innerText = 0;
            remainingBalanceElement.innerText = balanceAfterExpenseInnerText;
        }else{
            const remainingBalance = balanceAfterExpenseInnerText - calculatedSaveAble;

            savedElement.innerText = calculatedSaveAble;
            remainingBalanceElement.innerText = remainingBalance;
        }
    }
})