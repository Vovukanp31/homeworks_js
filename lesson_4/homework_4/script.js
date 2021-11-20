// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaOfRect(a, b) {
    return a * b;
}
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function areaOfCircle(r) {
    return Math.PI * (r**2);
}

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaOfCyl(h, r) {
    return 2 * Math.PI * r * h;
}

// - створити функцію яка приймає масив та виводить кожен його елемент

function arrLog(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function parCreator(text) {
    document.write(`<p>${text}</p>`);
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function ulThreeLiCreator(text) {
    document.write('<ul>');
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write('</ul>');
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulGenerator(text, counter) {
    document.write('<ul>');
    for (let i = 0; i <= counter; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function ulArrGenerator(arr) {
    document.write('<ul>');
    for (let i = 0; i <= arr.length - 1; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write('</ul>');
}

//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function arrOfObj(arr) {
    for (const arrElement of arr) {
       document.write(`<div>${arrElement['id']} ${arrElement['name']} ${arrElement['age']}</div>`);
    }
}