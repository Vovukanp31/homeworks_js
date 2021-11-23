// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let smallestNum = (a, b, c) => {
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b
    } else if (c < a && c < b) {
        return c
    }
};
smallestNum(44, 32, 21);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let biggestNum = (a, b, c) => {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b
    } else if (c > a && c > b) {
        return c
    }
};
biggestNum(33, 22,44);
// - створити функцію яка повертає найбільше число з масиву

let biggestNumOfArr = (arr) => {
    let x = 0;
    for (const arrElement of arr) {
     if (x < arrElement) {
         x = arrElement;
     }
    }
    return x;
};
let x = biggestNumOfArr([2, 5, 8, 44, 2, 3, 6]);

// - створити функцію яка повертає найменьше число з масиву

let smallestNumOfArr = (arr) => {
    let x = Infinity;
    for (const arrElement of arr) {
        if (arrElement < x) {
            x = arrElement;
        }
    }
    return x;
};

x = smallestNumOfArr([2, 5, 8, 44, 2, 3, 6]);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumOfArrElem = (arr) => {
  let x = 0;
    for (const arrElem of arr) {
        x += arrElem;
    }
    return x;
};
x = sumOfArrElem([2, 5, 8, 44, 2, 3, 6]);
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let arithmeticOfArrElem = (arr) => {
    let x = 0;
    for (const arrElem of arr) {
        x += arrElem;
    }
    return x / arr.length - 1;
};
x = arithmeticOfArrElem([2, 5, 8, 44, 2, 3, 6]);
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let biggestAndSmallestNums = (...nums) => {
    let x = 0;
    let y = Infinity;

    for (const element of nums) {
        if (element > x) {
            x = element;
        }

        if (element < y) {
            y = element;
        }
    }
    console.log(y);
    return x;
};
x = biggestAndSmallestNums(3, 5, 3, 10, 66, 43);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let randomNums = () => {
    let x = [];
    for (let i = 0; i < 100; i++) {
        x[i] = Math.round(Math.random()*100);
    }
    console.log(x);
};
randomNums();
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let randomNumsLim = (limit) => {
    let x = [];
    for (let i = 0; i < limit; i++) {
        x[i] = Math.round(Math.random()*100);
    }
    console.log(x);
};
randomNumsLim(200);
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let reverseArr = (arr) => {
    let reverse = [];
    let j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        reverse[j] = arr[i];
        j++;
    }
    return reverse;
};
x = reverseArr(x);