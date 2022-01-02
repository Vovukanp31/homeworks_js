let url = new URL(location.href);
let postDetails = JSON.parse(url.searchParams.get('postInfo'));

let postContainer = document.getElementsByClassName('posts-container')[0];

let commentsContainer = document.getElementsByClassName('post-comments')[0];

for (const postDetailsKey in postDetails) {
    let postDetail = document.createElement('div');
    postDetail.innerText = `${postDetailsKey} - ${postDetails[postDetailsKey]}`;
    postContainer.append(postDetail);
}

fetch(`https://jsonplaceholder.typicode.com/posts/${postDetails.id}/comments`)
    .then(response => response.json())
    .then(value => {
        for (const valueElement of value) {
            let comment = document.createElement('div');

            for (const valueElementKey in valueElement) {
                let commentInfo = document.createElement('div');
                commentInfo.innerText = `${valueElementKey} - ${valueElement[valueElementKey]}`;

                comment.append(commentInfo);
                commentsContainer.append(comment);
            }
        }
    });