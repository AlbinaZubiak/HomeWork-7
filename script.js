//Задание 1

let str = 'Строка';
str = str.toUpperCase();
console.log(str);

//Задание 2

const searchStart = (arr, str) => {
    let newArr = [];
    arr.forEach((element) => {
        if (element.toLowerCase().startsWith(str.toLowerCase())) {
            newArr.push(element)
        }
    });
    return newArr;
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));

//Задание 3

const num = 32.58884;
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));

console.log(num.toFixed(3));

//Задание 4

console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

//Задание 5

function getRandom(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log(getRandom(1, 10));

//Задание 6

const getRandomArrNumbers = (num) => {
    const randomArrNumbers = new Array(Math.floor(num / 2));
    for (let i = 0; i < randomArrNumbers.length; i++) {
        randomArrNumbers[i] = Math.floor(Math.random() * (num + 1));
    }
    console.log(randomArrNumbers);
}
getRandomArrNumbers(7);

//Задание 7

function getRandom(num1, num2) {
    return Math.round(Math.random() * (num2 - num1)) + num1;
}
console.log(getRandom(3, 13));

//Задание 8

let date1 = new Date();
console.log(date1);
let date2 = new Date(2023, 1, 13, 14, 8, 4, 0);
console.log(date2);

//Задание 9

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//Задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

let myDate = new Date(2025, 05, 14, 17, 27, 55)
let fullDate = myDate.getDate() + ' ' + months[myDate.getMonth()] + ' ' + myDate.getFullYear() + ', ' + days[myDate.getDay()];

let fullDateTime = myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds();

console.log('Дата: ' + fullDate);
console.log('Время: ' + fullDateTime);

