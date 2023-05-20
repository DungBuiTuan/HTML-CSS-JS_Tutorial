var url = 'https://jsonplaceholder.typicode.com/todos/1';

fetch()
    .then(function(respon) {
        return respon.json();
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