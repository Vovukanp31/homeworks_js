// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = a[0] + a[1] + a[2] + a[3] + a[4] + a[5] + a[6] + a[7] + a[8] + a[9];
console.log(result);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

const book1 = {
    'book name': 'It',
    'pages': 1138,
    'genre': 'Horror',
}

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

const book2 = {
    'book name': 'The Silent Patient',
    'pages': 336,
    'genre': 'thriller',
    'authors': 'Alex Michaelides',
}

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let arrOfBooks = [
    {
        'book name': 'The Girl on the Train',
        'pages': 395,
        'genre': 'thriller',
        'authors': 'Paula Hawkins',
    },
    {
        'book name': 'The Shining',
        'count of pages': 447,
        'genre': 'Psychological horror',
        'authors': 'Stephen King',
    },
    {
        'book name': 'Murder on the Orient Express',
        'count of pages': 256,
        'genre': 'Crime novel',
        'authors': 'Agatha Christie',
    }
]

console.log(arrOfBooks[0]);
console.log(arrOfBooks[1]);
console.log(arrOfBooks[2]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height = 23;
let width = 10;
let s = height * width;

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.


let heightC = 10;
let dC = 4;
let v = (3.14 * dC ** 2) * heightC;


// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4;
let k = (n ** 2) + (n ** 2);