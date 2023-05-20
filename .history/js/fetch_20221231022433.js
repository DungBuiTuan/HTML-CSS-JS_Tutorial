var API = 'https://jsonplaceholder.typicode.com/posts';

fetch(API)
    .then(function(response) {
        return response.json();
    })
    .then(function(posts) {
        var htmls = posts.map(function(post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`
        });

        var html = htmls.join(' ');
        document.getElementById('post-block') = html;
    })
    .catch(function(err) {
        console.log('error: ' + err.message);
    })