function getDaysInMonth(month) {
    let days
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        case 2:
            days = 28;
            break;
        default:
            return "Invalid month";
    }
    return days;
}
function getDayName(number) {
    let day;
    switch (number) {
        case 1:
            return "Понеділок";
            break;
        case 2:
            return "Вівторок";
            break;
        case 3:
            return "Середа";
            break;
        case 4:
            return "Четвер";
            break;
        case 5:
            return "П'ятниця";
            break;
        case 6:
            return "Субота";
            break;
        case 7:
            return "Неділя";
            break;
        default:
            return "Invalid day";
    }
    return day;
}
function getCoffeePrice(coffeeType) {
    let price;
    switch (coffeeType) {
        case "espresso":
            return "espresso = 25";
            break;
        case "americano":
            return "americano = 30";
            break;
        case "latte":
            return "latte = 40";
            break;
        case "cappuccino":
            return "cappuccino = 45";
            break;
        default:
            return "Coffe not available";
    }
    return price;
}
function convertCurrency(amount, currency) {
    switch (currency) {
        case "USD":
            return amount * 41;
            break;
        case "EUR":
            return amount * 44;
            break;
        case "PLN":
            return amount * 10;
            break;
        case "GBP":
            return amount * 50;
            break;
        default:
            return "Невідома валюта";
    }
}
function getMobilePlan(plan) {
    switch (plan ){
        case "light":
            return "Тариф Light: 100 хв + 2 ГБ = 100 грн";
            break;
        case "standard":
            return "Тариф Standard: 300 хв + 10 ГБ = 200 грн";
            break;
        case "premium":
            return "Тариф Premium: безліміт = 400 грн";
            break;
        default:
            return "Тариф не знайдено";
    }
}
function getDeliveryOption(option) {
    switch (option) {
        case "nova":
            return "Доставка Новою Поштою 🚚 — 150 грн";
            break;
        case "ukr":
            return "Доставка Укрпоштою 📦 — 40 грн";
            break;
        case "courier":
            return "Кур'єрська доставка 🚴 — 200 грн";
            break;
        case "pickup":
            return "Самовивіз 🏬 — безкоштовно";
            break;
        default:
            return "Невідомий спосіб доставки";
    }
}

function calculator(a,b,sign){
    if (typeof a != "number" || typeof b != "number") {
    return `unknown value`
    } 

    switch (sign) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            return b !==0 ? a / b : "divided by zero";
            break;
        default:
            return `unknown value`;
    }
}

console.log(calculator(2, 3, "*"));  
console.log(calculator(7, 0, "/"));
console.log(calculator(9, 10, "+"));
console.log(calculator(9, "p", "-"));


console.log(getDaysInMonth(6));
console.log(getDaysInMonth(2));
console.log(getDaysInMonth(10));

console.log(getDayName(3));
console.log(getDayName(5));
console.log(getDayName(7));

console.log(getCoffeePrice("latte"));
console.log(getCoffeePrice("americano"));
console.log(getCoffeePrice("espresso"));    

console.log(convertCurrency(100, "USD"));
console.log(convertCurrency(50, "EUR"));  
console.log(convertCurrency(10, "JPY"));

console.log(getMobilePlan("light"));
console.log(getMobilePlan("premium"));
console.log(getMobilePlan("hard"));

console.log(getDeliveryOption("nova"));
console.log(getDeliveryOption("pickup"));
console.log(getDeliveryOption("meest"));