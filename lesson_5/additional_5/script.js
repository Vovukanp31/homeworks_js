// - Дано натуральное число n. Выведите все числа от 1 до n.

let toSomeNum = (n) => {
    for (let i = 0; i <= n; i++) {
        console.log(i);
    }
};
toSomeNum(35)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

let numsBetween = (a, b) => {
    if (a > b) {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    } else if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    }
};
numsBetween(23, 43);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let indexChanger = (arr, index) => {
    let x = arr[index];
    arr[index] = arr[index+1];
    arr[index+1] = x;
    return arr;
};
x = indexChanger([9,8,0,4], 0);

//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let zeroPusher = (arr) => {
    let x = [];
    for (let i = 0, z = arr.length - 1, j = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            x[j] = arr[i];
            j++;
        } else if (arr[i] === 0) {
            x[z] = 0;
            z--;
        }
    }
    return x;
};
let x = zeroPusher([1,0,6,0,3]);