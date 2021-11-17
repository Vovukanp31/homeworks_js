// 1. Створити пустий масив та :
let arr = [];
//     a. заповнити його 50 парними числами за допомоги циклу.
for (let j = 0; j < 50; j++) {
    for (let i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            arr[j] = i;
            j++;
        }
    }
}
//     b. заповнити його 50 непарними числами за допомоги циклу.
for (let j = 0; j < 50; j++) {
    for (let i = 0; i < 100; i++) {
        if (i % 2 !== 0) {
            arr[j] = i;
            j++;
        }
    }
}
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

let arr1 = [];

for (let i = 0; i < 20; i++) {
    arr1[i] = Math.floor(Math.random() * 100);
}

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

for (let i = 0; i < 20; i++) {
    arr1[i] = Math.floor(Math.random() * (732 - 8) + 8);
}


// 2. Вивести за допомогою console.log кожен третій елемен

for (let i = 2; i < arr1.length - 1; i += 3) {
    console.log(arr1[i]);
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i = 2; i < arr1.length - 1; i += 3) {
    if (arr1[i] % 2 === 0) {
        console.log(arr1[i]);
    }
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let arr2 = [];
let arr2Index = 0;
for (let i = 2; i < arr1.length - 1; i += 3) {
    if (arr1[i] % 2 === 0) {
        console.log(arr1[i]);
        arr2[arr2Index] = arr1[i];
        arr2Index++;
    }
}
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
for (let i = 0; i < arr1.length - 1; i++) {
    if (arr1[i] % 2 === 0) {
        console.log(arr1[i - 1]);
    }
}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let price = [100, 250, 50, 168, 120, 345, 188];
let wholePrice = 0;
let positionsInBasket = 0;
for (let i = 0; i < price.length - 1; i++) {
    wholePrice += price[i];
    positionsInBasket = i;
}
console.log(wholePrice / positionsInBasket);

//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let arr3 = [];

for (let i = 0; i < 15; i++) {
    arr3[i] = Math.floor(Math.random() * 100);
}

let arr4 = [];

for (let i = 0; i < arr3.length - 1; i++) {
    arr4[i] = arr3[i] * 5;
}

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let arr5 = [1, 5, false, true, 'string', 7, 35, 'koe chto'];
let arr6 = [];
let arr6Elem = 0;
for (let i = 0; i < arr5.length - 1; i++) {
    if (typeof arr5[i] === 'number' && typeof arr5 !== 'boolean') {
        arr6[arr6Elem] = arr5[i];
        arr6Elem++;
    }
}

//
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]


let usersWithCities = [];

for (let i = 0; i < usersWithId.length; i++) {
    let j = 0;
    while (usersWithId[i].id !== citiesWithId[j].user_id) {
        j++;
    }
    if (usersWithId[i].id === citiesWithId[j].user_id) {
        usersWithCities[i] = usersWithId[i];
        usersWithCities[i].address = citiesWithId[j];
    }
}

//
//
//
//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let arr7 = [];
for (let i = 0; i < 10; i++) {
    arr7[i] = Math.floor(Math.random() * 100);
}
console.log(arr7)

for (let i = 0; i < arr7.length - 1; i++) {
    if (arr7[i] % 2 === 0) {
        console.log(arr7[i])
    }
}


//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let arr8 = [];

for (let i = 0; i < arr7.length; i++) {
    arr8[i] = arr7[i];
}

//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arr9 = ['a', 'b', 'c'];
let word = '';

for (let i = 0; i < arr9.length; i++) {
    word += arr9[i]
}
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let word1 = '';
let num = 0;
while (num < arr9.length) {
    word1 += arr9[num]
    num++;
}

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let word2 = "";

for (const letter of arr9) {
    word2 += letter;
}