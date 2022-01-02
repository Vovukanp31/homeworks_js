let url = new URL(location.href);
let userInfo = JSON.parse(url.searchParams.get('userInfo'));

let userDetailsContainer = document.getElementsByClassName('user-details__container')[0];

let allObjDetails = function (obj) {
    for (const objElement in obj) {
        console.log(objElement)
        if (typeof obj[objElement] === 'object') {
            allObjDetails(obj[objElement]);
        } else {
            let userInfoElement = document.createElement('div');
            userInfoElement.innerText = `${objElement} - ${obj[objElement]}`;

            userDetailsContainer.append(userInfoElement);
        }
    }
}
allObjDetails(userInfo);

let userPostBtn = document.createElement('button');
userPostBtn.innerText = 'Show user posts';

userDetailsContainer.append(userPostBtn);

let posts = document.createElement('div');
posts.className = 'posts';
userDetailsContainer.append(posts);

userPostBtn.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${userInfo.id}/posts`)
        .then(response => response.json())
        .then(value => {
            for (const valueObj of value) {

                let postTitle = document.createElement('div');
                postTitle.className = 'post-title';
                postTitle.innerText = `${valueObj.title}`;
                userDetailsContainer.append(postTitle);


                let infoAboutPostBtn = document.createElement('button');
                infoAboutPostBtn.innerText = 'show post details';

                postTitle.append(infoAboutPostBtn);
                posts.append(postTitle);

                infoAboutPostBtn.onclick = function () {
                    window.location.href = 'post-details.html?postInfo=' + JSON.stringify(valueObj);
                }

            }
        })
    userPostBtn.disabled = 'true';
}




