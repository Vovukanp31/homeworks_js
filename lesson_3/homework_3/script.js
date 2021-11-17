// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arr = [1, 2, 3, 4, 5, '1', '2', '3', '4', '5', true, false, true, false, true];
console.log(arr);

//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//

let arr1 = [];
arr1[0] = 'something';
arr1[1] = 1;
arr1[2] = true;
console.log(arr1);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i <= 10; i++) {
    document.write('<div>some text</div>');
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i <= 10; i++) {
    document.write(`<div>some text ${i}</div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20) {
    i++
    document.write('<h1>some text</h1>');
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let j = 0;
while (j < 20) {
    j++
    document.write(`<h1>some text ${j}</h1>`);
}
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const number of arr2) {
    console.log(number);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arr3 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

for (const string of arr3) {
    console.log(string);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arr4 = [1, "2", true, false, 5, 'something', 7, true, true, false];

for (let arr4Element of arr4) {
    console.log(arr4Element);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let arr5 = [true, '2', 2, false, false, true, 7, "yo", 9, true];

for (const arr5Element of arr5) {
    if (typeof arr5Element === 'boolean') {
        console.log(arr5Element);
    }

}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let arr6 = [1, false, 'gray', 10, 301, '', false, 100010111, 'yellow', '22'];

for (const arr6Element of arr6) {
    if (typeof arr6Element === 'number') {
        console.log(arr6Element);
    }

}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let arr7 = ['go', 44, 'fall', 1012, true, '    ', 'is it', 'string?', 34, 3446];

for (const arr7Element of arr7) {
    if (typeof arr7Element === 'string') {
        console.log(arr7Element);
    }

}

//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let arr8 = [];
arr8[0] = 1;
arr8[1] = true;
arr8[2] = 'pink';
arr8[3] = 4;
arr8[4] = 5;
arr8[5] = false;
arr8[6] = 'rose';
arr8[8] = false;
arr8[9] = 'sand';

for (const arr8Element of arr8) {
    console.log(arr8Element);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i <= 10; i++) {
    console.log(i);
    document.write(i);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i <= 100; i++) {
    console.log(i);
    document.write(i);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i <= 100; i+=2) {
    console.log(i);
    document.write(i);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(i);
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write(i);
    }
}
