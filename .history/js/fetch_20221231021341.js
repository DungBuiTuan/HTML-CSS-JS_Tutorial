fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function(respon) {
        return respon.json();
    })
    .then(function(post) {
        console.log(post);
    })