// Все робити за допомоги js.
// - створити блок,
let div = document.createElement('div');
//     - додати йому класи wrap, collapse, alpha, beta
div.className = 'wrap collapse alpha beta';
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.backgroundColor = 'brown';
div.style.color = 'white';
div.style.fontSize = '24px';
div.innerText = 'Something';
// - додати цей блок в body.
document.body.append(div);
// - клонувати його повністю, та додати клон в body.
let div1 = div.cloneNode(true);
document.body.append(div1);
// - Є масив:
let arr = ['Main','Products','About us','Contacts'];
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let menuOfSite = document.getElementsByClassName('menu');
for (const string of arr) {
    let list = document.createElement('li');
    list.append(string);
    document.body.append(list);
}
//
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.append(`${coursesAndDurationArrayElement.title}
     ${coursesAndDurationArrayElement.monthDuration}`);
    document.body.append(div);
}

//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.className = 'item';
    coursesAndDurationArrayElement.title.className = 'heading';
    coursesAndDurationArrayElement.monthDuration.className = 'description';
    div.append(`${coursesAndDurationArrayElement.title}
     ${coursesAndDurationArrayElement.monthDuration}`);
    document.body.append(div);
}