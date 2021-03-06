// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let usersContainer = document.getElementsByClassName('usersContainer')[0];

users.map(user => {
    let userBlock = document.createElement('div');
    userBlock.className = 'userBlock';
    let userInfo = document.createElement('div');
    userInfo.className = 'userInfo';
    userInfo.innerText = `name: ${user.name}, age: ${user.age}, status: ${user.status}`;
    let favBtn = document.createElement('button');
    favBtn.innerText = 'add to Favorites';
    usersContainer.appendChild(userBlock);
    userBlock.append(userInfo);
    userBlock.append(favBtn);
    favBtn.onclick = function () {
        let favoritesOfUser = JSON.parse(localStorage.getItem('favorites')) || [];
        favoritesOfUser.push(user);
        localStorage.setItem('favorites', JSON.stringify(favoritesOfUser));
    }

});