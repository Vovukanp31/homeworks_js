// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//

function argum() {
    if (arguments.length === 1) {
        console.log(arguments[0]);
    } else if (arguments.length > 1) {
        let x = 0;
        for (let i = 0; i < arguments.length; i++) {
            x += arguments[i];
        }
        return x;
    }
}

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//

function arrConcat(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length - 1; i++) {
        arr3[i] = arr1[i] + arr2[i];
    }
    return arr3;
}

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

function arrKeys(arr) {
    let arrKey = [];
    let i = 0;
    for (const arrElement of arr) {
        for (const arrElementKey in arrElement) {
            arrKey[i] = arrElementKey;
            i++;
        }
    }
    return arrKey;
}

//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function arrValues(arr) {
    let arrKey = [];
    let i = 0;
    for (const arrElement of arr) {
        for (const arrElementKey in arrElement) {
            arrKey[i] = arrElement[arrElementKey];
            i++;
        }
    }
    return arrKey;
}