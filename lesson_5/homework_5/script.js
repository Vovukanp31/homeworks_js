// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою

let rectArea = (height, width) => height * width;
let x = rectArea(20, 30);

// - створити функцію яка обчислює та повертає площу кола

let circleArea = (radius) => Math.PI * radius ** 2;
x = circleArea(25);

// - створити функцію яка обчислює та повертає площу циліндру

let cylinderArea = (radius, height) => 2 * Math.PI * radius * height;
x = cylinderArea(10, 15);

// - створити функцію яка приймає масив та виводить кожен його елемент

let eachElemOfArr = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
};
eachElemOfArr([1, 2, 3, 4, 5, 6, 7]);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let parCreator = (text) => document.write(`<p>${text}</p>`);
parCreator('some text');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let listCreator = (text) => {
    document.write('<ul>');
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write('</ul>');
};
listCreator('some text');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let listGenerator = (text, numOfLi) => {
    document.write('<ul>');
    for (let i = 0; i < numOfLi; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
};
listGenerator('some text', 25);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrElements = (arr) => {
    document.write('<ul>');
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write('</ul>');
};
arrElements([1, true, 'some text']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

var users = [{id: "1", name: "Andrew", age: 23}, {id: "2", name: "John", age: 25}];
let arrObjDisplay = (arr) => {
    for (const arrElement of arr) {
        document.write('<ul>');
        for (const arrElementKey in arrElement) {
            document.write(`<li>${arrElement[arrElementKey]}</li>`)
        }
        document.write('</ul>');
    }
};
arrObjDisplay(users);