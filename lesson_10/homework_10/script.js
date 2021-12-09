// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let blackSquare = document.createElement('div');
blackSquare.style.width = '200px';
blackSquare.style.height = '200px';
blackSquare.style.backgroundColor = 'black';
blackSquare.setAttribute('id', 'text');
document.body.append(blackSquare);

let textIdElems = document.getElementById('text');

let deleteSquareButton = document.getElementById('deleteElem');
deleteSquareButton.onclick = function () {
    textIdElems.style.display = 'none';
}

//
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let hideItselfsButton = document.getElementById('hideItselfs');

hideItselfsButton.onclick = function () {
    this.style.display = 'none';
}
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

document.getElementById('checkAge').onclick = function () {
    let ageOfUser = document.getElementById('age').value;
    if (!ageOfUser) {
        alert('enter your age')
    } else if (ageOfUser < 18) {
        alert("You're too young for visit this site");
    } else {
        alert('welcome');
    }
}

//
// - Создайте меню, которое раскрывается/сворачивается при клике

let menu = document.getElementsByClassName('menuOfItems')[0];
menu.onclick = function () {
    console.log(this);
    this.classList.toggle('closing')
 }

//
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.