// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(value => {
        for (const valueElement of value) {
            let userProfile = document.createElement('div');
            userProfile.className = 'user-card';
            let userPosts = document.createElement('button');
            userPosts.innerText = 'Show all posts';
            userPosts.className = 'user-posts-btn';


            let arrElemCreator = function (obj) {
                for (const objElement in obj) {
                    if (typeof obj[objElement] === 'object') {
                        arrElemCreator(obj[objElement]);
                    } else {
                        let divOfValues = document.createElement('div');
                        divOfValues.innerText = `${objElement} - ${obj[objElement]}`;
                        userProfile.append(divOfValues);
                    }
                }
            };

            userPosts.onclick = function () {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(value1 => {
                        for (const value1Element of value1) {
                            if (value1Element.userId === valueElement.id) {

                                let post = document.createElement('div');
                                post.className = 'post';

                                let userId = document.createElement('div');
                                let idInArr = document.createElement('div');
                                let userTitle = document.createElement('div');
                                let bodyOfUserObj = document.createElement('div');
                                let userComments = document.createElement('button');
                                userComments.innerText = 'Show all comments';
                                userComments.className = 'user-comments-btn';

                                userId.innerText = `user id is: ${value1Element.userId};`;
                                idInArr.innerText = `id in object is: ${value1Element.id};`;
                                userTitle.innerText = `Title: ${value1Element.title};`;
                                bodyOfUserObj.innerText = `Info about user: ${value1Element.body};`;

                                userComments.onclick = function () {
                                    fetch('https://jsonplaceholder.typicode.com/comments')
                                        .then(response => response.json())
                                        .then(value2 => {
                                            for (const valueElement2 of value2) {
                                                if (valueElement2.postId === value1Element.userId) {
                                                    let comment = document.createElement('div');
                                                    comment.className = 'comment';

                                                    let name = document.createElement('div');
                                                    let email = document.createElement('div');
                                                    let bodyOfUserObj = document.createElement('div');

                                                    name.innerText = `Name : ${valueElement2.name}`;
                                                    email.innerText = `Email: ${valueElement2.email}`;
                                                    bodyOfUserObj.innerText = `Comment: ${valueElement2.body}`;

                                                    post.append(comment);
                                                    comment.append(name);
                                                    comment.append(email);
                                                    comment.append(bodyOfUserObj);
                                                }
                                            }
                                        })
                                    userComments.disabled = 'true';
                                };

                                userProfile.append(post);
                                post.append(userId);
                                post.append(idInArr);
                                post.append(userTitle);
                                post.append(bodyOfUserObj);
                                post.append(userComments);
                            }
                        }
                    })
                userPosts.disabled = 'true';
            };


            arrElemCreator(valueElement);
            document.body.append(userProfile);
            userProfile.append(userPosts)
        }
    });