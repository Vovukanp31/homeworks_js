// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

if (friends.length >= 3) {
    alert('це великий масив, в якому  3 і більше елементи')
} else {
    alert('це маленький масив, в якому менше 3-х елементів')
}

//
//
//
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

let num1;
let num2;
let num3;
if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
    alert(num1);
} else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
    alert(num2);
} else {
    alert(num3);
}

//
// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }

let result = a + b < 4 ? 'Мало' : 'Багато';

//
//
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

let num;
let numCheck = num < 0 ? alert('число негативне') : num === 0 ? alert('число дорівнює нулю')
    : num > 0 ? alert('число позитивне') : alert('введіть число');