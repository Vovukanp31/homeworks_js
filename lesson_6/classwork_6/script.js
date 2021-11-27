// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//

let strNormalize = (str, sym) => str.split(`${sym}`).join(' ');
let str = 'Ron---Whisley';
console.log(strNormalize(str, '---'));

//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randomNum = (numOfElem) => {
    let arr = [];
    for (let i = 0; i < numOfElem; i++) {
        arr[i] = Math.round(Math.random() * 100);
    }
    return arr;
};

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let arr1 = randomNum(50);
arr1.sort((a, b) => a - b);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

arr1 = arr1.filter(number => number % 2 === 0);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arr2 = randomNum(100);
arr2 = arr2.map(element => element + '');

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let sortNums = (arr, direction) => {
    if (direction === 'ascending') {
        arr.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        arr.sort((a, b) => b - a);
    }
    return arr;
};

sortNums(arr1, 'descending');

//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

coursesAndDurationArray = coursesAndDurationArray.filter(value => value.monthDuration > 5);

//
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (str, n) => {
    let x = [];
    for (let i = 0; i <= str.length + 1; i++) {
        x.push(str.substring(0, n));
        str = str.slice(n)
    }
    return x;
}

console.log(cutString('наслаждение',3));