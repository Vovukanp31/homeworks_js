// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let parContent = document.getElementById('content');
// -- отримує текст з блоку з id "rules"
let parRules = document.getElementById('rules');
// -- замініть текст параграфа з id 'content' на будь-який інший
parContent.innerText = 'Будь-який інший ¯\\_(๑❛ᴗ❛๑)_/¯';
// -- замініть текст параграфа з id 'rules' на будь-який інший
parRules.innerText = 'Ще один будь-який інший (^・ω・^ )';
// -- змініть кожному елементу колір фону на червоний,
// -- змініть кожному елементу колір тексту на синій
let bodyElements = document.body.children;
for (const allElements of bodyElements) {
    allElements.style.backgroundColor = 'red';
    allElements.style.color = 'blue';
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let allClassesOfRules = parRules.classList;
console.log(allClassesOfRules);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let fc_rules = document.getElementsByClassName('fc_rules');
for (const fcRule of fc_rules) {
    fcRule.style.color = 'red';
}