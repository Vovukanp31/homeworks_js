// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
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
            let commentBtn = document.createElement('button');

            userId.innerText = `user id is: ${valueElement.userId};`;
            idInArr.innerText = `id in object is: ${valueElement.id};`;
            userTitle.innerText = `Title: ${valueElement.title};`;
            bodyOfUserObj.innerText = `Info about user: ${valueElement.body};`;
            commentBtn.innerText = 'Show comments';

            commentBtn.onclick = function () {
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => response.json())
                    .then(value1 => {
                        for (const valueElement1 of value1) {
                            if (valueElement1.postId === valueElement.id) {
                                let comment = document.createElement('div');
                                comment.className = 'comment';
                                let postId = document.createElement('div');
                                let idInArr = document.createElement('div');
                                let name = document.createElement('div');
                                let email = document.createElement('div');
                                let bodyOfUserObj = document.createElement('div');

                                postId.innerText = `Post Id : ${valueElement1.postId}`;
                                idInArr.innerText = `id : ${valueElement1.id}`;
                                name.innerText = `Name : ${valueElement1.name}`;
                                email.innerText = `Email: ${valueElement1.email}`;
                                bodyOfUserObj.innerText = `Comment: ${valueElement1.body}`;

                                post.append(comment);
                                comment.append(postId);
                                comment.append(idInArr);
                                comment.append(name);
                                comment.append(email);
                                comment.append(bodyOfUserObj);
                            }
                        }
                    })
            };

            document.body.append(post);
            post.append(userId);
            post.append(idInArr);
            post.append(userTitle);
            post.append(bodyOfUserObj);
            post.append(commentBtn);
        }
    })