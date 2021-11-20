// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function minNum(a, b, c) {
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b
    } else if (c < a && c < b) {
        return c
    }
}

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function maxNum(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b
    } else if (c > a && c > b) {
        return c
    }
}

// - створити функцію яка повертає найбільше число з масиву

function arrMaxNum(arr) {
    let x = 0;
    for (const arrElement of arr) {
        if (arrElement > x) {
            x = arrElement;
        }
    }
    return x;
}

// - створити функцію яка повертає найменьше число з масиву

function arrMinNum(arr) {
    let x = Infinity;
    for (const arrElement of arr) {
        if (arrElement < x) {
            x = arrElement;
        }
    }
    return x;
}

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function sumOfArrElem(arr) {
    let x = 0;
    for (const arrElement of arr) {
        x += arrElement;
    }
    return x;
}

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function arifmOfArrElem(arr) {
    let x = 0;
    for (const arrElement of arr) {
        x += arrElement;
    }
    return x / arr.length;
}

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function nums() {
    let x = 0;
    let y = Infinity;

    for (const element of arguments) {
        if (element > x) {
            x = element;
        }

        if (element < y) {
            y = element;
        }
    }
    console.log(y);
    return x;
}

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function randomNumsArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.round(Math.random()*100);
    }
}

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function arrCreatorRandomiser(limit) {
    let arr = [];
    for (let i = 0; i < limit; i++) {
        arr[i] = Math.round(Math.random()*100);
    }
    return arr;
}

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function arrReverse(arr) {
    let reverse = [];
    let j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        reverse[j] = arr[i];
        j++;
    }
    return reverse;
}