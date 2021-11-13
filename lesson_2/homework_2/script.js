// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time;

if (time <= 15) {
    console.log('перша четверть');
} else if (time > 15 && time <= 30) {
    console.log('друга четверть');
} else if (time > 30 && time <= 45) {
    console.log('третя четверть');
} else {
    console.log('четверта частина години');
}

//
//
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day;

let decade = day <= 10 ? console.log('перша декада') : day >= 20 && day < 30 ? console.log('друга декада') : console.log('третя декада');

//
// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

let test;

if (test != true) {
    console.log('вірно');
} else {
    console.log('неправильно');
}

let result = test != true ? console.log('вірно') : console.log('неправильно');

//
//
// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

if (a !== 0) {
    console.log('вірно');
} else {
    console.log('невірно');
}

//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

let dayNumber = +prompt('Введіть номер дня тижня', '');

switch (dayNumber) {
    case 1:
        document.write('<h1>Плани на понеділок</h1>');
        break;
    case 2:
        document.write('<h1>Плани на вівторок</h1>');
        break;
    case 3:
        document.write('<h1>Плани на середу</h1>');
        break;
    case 4:
        document.write('<h1>Плани на четвер</h1>');
        break;
    case 5:
        document.write("<h1>Плани на п'ятницю</h1>");
        break;
    case 6:
        document.write('<h1>Плани на суботу</h1>');
        break;
    case 7:
        document.write('<h1>Плани на понеділок</h1>');
        break;
    default:
        document.write('<h1>Введи свме число дгя тижня</h1>');
}

//
// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

let daysInYear;

let isLeapYear = daysInYear % 4 === 0 ? console.log('це високосний рік') : console.log('це не високосний рік');

//
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let jsNameQuestion = prompt('Яка «офіційна» назва JavaScript?', '');

if (jsNameQuestion === 'ECMAScript') {
    alert('Правильно!');
} else {
    alert('Не знаєте? ECMAScript!')
}