let favoriteListOFUsers = JSON.parse(localStorage.getItem('favorites'));
console.log(favoriteListOFUsers)

let usersContainer = document.getElementsByClassName('usersContainer')[0];

favoriteListOFUsers.map(user => {
    let userBlock = document.createElement('div');
    userBlock.className = 'userBlock';
    let userInfo = document.createElement('div');
    userInfo.className = 'userInfo';
    userInfo.innerText = `name: ${user.name}, age: ${user.age}, status: ${user.status}`;
    usersContainer.appendChild(userBlock);
    userBlock.append(userInfo);
})