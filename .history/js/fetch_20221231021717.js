fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function(respon) {
        return respon.json();
    })
    .then(function(posts) {
        var html = posts.map(function() {

        });
    })
    .catch(function(err) {
        console.log('error: ' + err.message);
    })