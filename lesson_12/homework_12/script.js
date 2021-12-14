// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(value => {
        for (const valueElement of value) {
            let post = document.createElement('div');
            post.className = 'post';

            let userId = document.createElement('div');
            let idInArr = document.createElement('div');
            let userTitle = document.createElement('div');
            let bodyOfUserObj = document.createElement('div');

            userId.innerText = `user id is: ${valueElement.userId};`;
            idInArr.innerText = `id in object is: ${valueElement.id};`;
            userTitle.innerText = `Title: ${valueElement.title};`;
            bodyOfUserObj.innerText = `Info about user: ${valueElement.body};`;

            document.body.append(post);
            post.append(userId);
            post.append(idInArr);
            post.append(userTitle);
            post.append(bodyOfUserObj);
        }
    });

//
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(value => {
    for (const valueElement of value) {
        let comment = document.createElement('div');
        comment.className = 'comment';
        let postId = document.createElement('div');
        let idInArr = document.createElement('div');
        let name = document.createElement('div');
        let email = document.createElement('div');
        let bodyOfUserObj = document.createElement('div');

        postId.innerText = `Post id: ${valueElement.postId}`;
        idInArr.innerText = `Id: ${valueElement.id}`;
        name.innerText = `Name : ${valueElement.name}`;
        email.innerText = `Email: ${valueElement.email}`;
        bodyOfUserObj.innerText = `Comment: ${valueElement.body}`;

        document.body.append(comment);
        comment.append(postId);
        comment.append(idInArr);
        comment.append(name);
        comment.append(email);
        comment.append(bodyOfUserObj);
    }
});