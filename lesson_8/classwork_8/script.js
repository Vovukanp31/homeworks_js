// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

document.getElementById('main_header').innerText = 'sept-2021-frontend';

// b) робить шириниу елементу ul 400px

let ulElem = document.getElementsByTagName('ul');
for (const ulElemElement of ulElem) {
    ulElemElement.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let linkList = document.getElementsByClassName('linkList');
for (const linkListElement of linkList) {
    linkListElement.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
let textFromList2 = document.getElementsByClassName('listElement2')[0].textContent;
// e) отримує всі елементи li та змінює ім колір фону на сірий
let allLiInDoc = document.getElementsByTagName('li');
for (const allLiInDocElement of allLiInDoc) {
    allLiInDocElement.style.backgroundColor = 'grey';
}
// f) отримує всі елементи 'a' та додає їм клас anchor

let aElements = document.getElementsByTagName('a');
for (const aElement of aElements) {
 aElement.className = 'anchor';
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const aElement of aElements) {
    if (aElement.textContent === 'link3') {
        aElement.style.fontSize = '40px';
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for (const aElement of aElements) {
    aElement.className = `element_${aElement.textContent}`;
}


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let allSubHeaderElems = document.getElementsByClassName('sub-header');
let colorOfSubHeaderElem = prompt('enter color', '');
for (const allSubHeaderElemsElement of allSubHeaderElems) {
    allSubHeaderElemsElement.style.backgroundColor = colorOfSubHeaderElem;
}
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
for (const allSubHeaderElemsElement of allSubHeaderElems) {
    if (allSubHeaderElemsElement.textContent === 'content 2 segment') {
        allSubHeaderElemsElement.style.color = `${prompt('enter color of content 2 element', '')}`;
    }
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content1 = document.getElementsByClassName('content_1')[0].innerText = `${prompt('enter text', '')}`;
// l) отримати елементи p та змінити їм padding на 20px
let allPelems = document.getElementsByTagName('p');
for (const allPelem of allPelems) {
    allPelem.style.padding = '20px';
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let content2 = document.getElementsByClassName('content_2')[0].innerText = 'sept-2021-frontend';