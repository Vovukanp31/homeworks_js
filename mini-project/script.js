fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let userContainer = document.getElementsByClassName('user-container')[0];
            let userDiv = document.createElement('div');
            let userId = document.createElement('div');
            let userName = document.createElement('div');
            let userDetailsBtn = document.createElement('button');

            userDiv.className = 'user-list';

            userId.innerText = `User id: ${user.id}`;
            userName.innerText = `User name: ${user.name}`;
            userDetailsBtn.innerText = 'Open user detail information';

            userContainer.append(userDiv);
            userDiv.append(userId);
            userDiv.append(userName);
            userDiv.append(userDetailsBtn);

            userDetailsBtn.onclick = function () {
                window.location.href = 'user-details.html?userInfo=' + JSON.stringify(user);
            }
        }
    })