// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let e = 1;
let f = 10;
let g = -999;
let h = 123;
let i = 3.14;
let j = 2.7;
let k = 16;
let l = true;
let m = false;

console.log(a, b, c, d, e, f, g, h, i, j, k, l, m);

alert(a);
alert(b);
alert(c);
alert(d);
alert(e);
alert(f);
alert(g);
alert(h);
alert(i);
alert(j);
alert(k);
alert(l);
alert(m);

document.write(`${a} ${b} ${c} ${d} ${e} ${f} ${g} ${h} ${i} ${j} ${k} ${l} ${m}`);

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

a = 'some';
b = 'thing';
c = 'is';
d = 'happening';
e = 'here';
f = 'but';
g = "i'm";
h = "don't know what";
i = 'exactly';
j = 'it';
k = 'is';
l = '!';
m = '!';

console.log(a, b, c, d, e, f, g, h, i, j, k, l, m);

alert(a);
alert(b);
alert(c);
alert(d);
alert(e);
alert(f);
alert(g);
alert(h);
alert(i);
alert(j);
alert(k);
alert(l);
alert(m);

document.write(`${a} ${b} ${c} ${d} ${e} ${f} ${g} ${h} ${i} ${j} ${k} ${l} ${m}`);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

let firstName = 'Володимир';
let middleName = 'Сергійович';
let lastName = 'Папета';

let person = `${firstName} ${middleName} ${lastName}`;

alert(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let name = prompt("ім'я", '');
let surname = prompt("Прізвище", '');
let years = prompt("Вік", '');

alert(`Вітаю ${name} ${surname}. Тобі ${years} років.`);


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let first = 100;
let second = '100';
let third = true;
console.log(typeof first, typeof second, typeof third);
// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true        5 < 6
// 5 ? 6 -> false           5 > 6
// 5 ? 6 -> false           5 == 6
// 5 ? 6 -> false           5 >= 6
// 10 ? 10 -> true          10 == 10
// 10 ? 10 -> true          10 >= 10
// 10 ? 10 -> false         10 > 10
// 10 ? 10 -> false         10 < 10
// 10 ? 10 -> false         10 != 10
// 123 ? '123' -> false     123 === '123'
// 123 ? '123' -> true      123 == '123'
//
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");       205(при додавання числа до стрічки - числа перетворюються у стрічку та нокатенуються)
// document.write(str - a + "<br/>");       15(при всіх математичних операціях окрім додавання, стрічки перетворюються у числа)
// document.write(str * "2" + "<br/>");     40(при всіх математичних операціях окрім додавання, стрічки перетворюються у числа)
// document.write(str / 2 + "<br/>");       10(при всіх математичних операціях окрім додавання, стрічки перетворюються у числа)