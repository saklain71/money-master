// get valur from input
function getValau(){
    const incomeField = document.getElementById('income-field');
    const income = parseFloat(incomeField.value);
    console.log(income);
    const foodField = document.getElementById('food-field');
    const food = parseFloat(foodField.value);
    console.log(food);
    const rentField = document.getElementById('rent-field');
    const rent = parseFloat(rentField.value);
    console.log(rent);
    const clothesField = document.getElementById('clothes-field');
    const clothes = parseFloat(clothesField.value);
    console.log(clothes);
    
}

// calculation button
document.getElementById('calculation-field').addEventListener('click',function(){

    getValau();
    
})