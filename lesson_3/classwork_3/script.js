// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let arr = [2,17,13,6,22,31,45,66,100,-18];

let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

i = 0;
while (i < arr.length) {
    if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
    }
    i++;
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

for (let number of arr) {
    if (number % 3 === 0) {
        number = "okten";
    }
}

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

i = arr.length - 1;
while (i >= 0) {
    if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
    }
    i--;
}

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}


while (i >= 0) {
    console.log(arr[i]);
    i--;
}