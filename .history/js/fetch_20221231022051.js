fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function(respon) {
        return respon.json();
    })
    .then(function(posts) {
        var htmls = posts.map(function() {
            return `<li>
                <h2>${posts.title}</h2>
                <p>${posts.body}</p>
            </li>`
        });

        var html = htmls.join(' ');
        document.getElementById('post-block') = html;
    })
    .catch(function(err) {
        console.log('error: ' + err.message);
    })