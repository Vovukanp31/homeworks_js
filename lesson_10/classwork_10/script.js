// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let getInfoBtn = document.getElementById('showFormsInfo');
let firstForm = document.forms['firstForm'];
let secondForm = document.forms['secondForm'];

getInfoBtn.onclick = function () {
    console.log(`first form: ${firstForm.first.value}, ${firstForm.second.value} Second form: ${secondForm.third.value}, ${secondForm.fourth.value}`);
}

//
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let tableSubmitBtn = document.getElementById('tableSubmit');
tableSubmitBtn.onclick = function () {
    let rowsGenerator = document.getElementsByClassName('rows')[0].value;
    let columnsGenerator = document.getElementsByClassName('columns')[0].value;
    let innerTableText = document.getElementsByClassName('textForTableInner')[0].value;

    let createTable = (rows, columns, text) => {
        let tableContainer = document.getElementsByClassName('tableContainer')[0];
        let table = document.createElement('table');
        table.style.border = '2px solid black';
        table.style.backgroundColor = 'pink';
        tableContainer.append(table);

        for (let i = 0; i < rows; i++) {
            let tr = document.createElement('tr');
            tr.style.border = '1px soid grey'
            tr.style.backgroundColor = 'cornflowerblue';
            tr.style.color = 'white';
            for (let j = 0; j < columns; j++) {
                let td = document.createElement('td');
                td.style.border = '1px solid black';
                td.innerText = `${text}`;
                table.append(tr);
                tr.append(td);
            }
        }
    };
    createTable(rowsGenerator, columnsGenerator, innerTableText);
}


//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let uncensoredWords = ['Fuck', 'Asshole', 'Bitch', 'Cunt', 'Bastard', 'Dickhead'];

let uncenContainer = document.getElementsByClassName('uncenWordsCheck')[0];

let badWordsCheck = document.createElement('input');
let checkBadWordsBtn = document.createElement('button');
checkBadWordsBtn.innerText = 'check word';
uncenContainer.append(badWordsCheck, checkBadWordsBtn);
checkBadWordsBtn.onclick = function () {
    for (const uncensoredWord of uncensoredWords) {
        if (uncensoredWord === badWordsCheck.value || uncensoredWord.toLowerCase() === badWordsCheck.value) {
            alert("don't say that!");
        }
    }
};


//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let uncenSentenseContainer = document.getElementsByClassName('uncenWordsInSentenceCheck')[0];

let sentenseCheck = document.createElement('input');
let checkSentenseBtn = document.createElement('button');
checkSentenseBtn.innerText = 'check sentence'
uncenSentenseContainer.append(sentenseCheck, checkSentenseBtn);
checkSentenseBtn.onclick = function () {
    let sentenseCheckArr = sentenseCheck.value.split(' ');
    sentenseCheckArr.forEach(sentenseCheckArrElement => {
            for (const uncensoredWord of uncensoredWords) {
                if (sentenseCheckArrElement === uncensoredWord || sentenseCheckArrElement === uncensoredWord.toLowerCase()) {
                    alert("don't say that!");
                }
            }
        }
    )
};