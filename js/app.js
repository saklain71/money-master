// get valur from input
function getValau(){
    //income
    const incomeField = document.getElementById('income-field');
    const income = parseFloat(incomeField.value);
    console.log(income);
    const foodField = document.getElementById('food-field');
    const food = parseFloat(foodField.value);
    const rentField = document.getElementById('rent-field');
    const rent = parseFloat(rentField.value);
    const clothesField = document.getElementById('clothes-field');
    const clothes = parseFloat(clothesField.value);
    const totalExpense = document.getElementById('total-expense');
    totalExpense.innerText  = food + rent + clothes;
    const balance = document.getElementById('Balance');
     balance.innerText = income - totalExpense.innerText;
    
}

// calculation button
document.getElementById('calculation-field').addEventListener('click',function(){

    getValau();
    
})