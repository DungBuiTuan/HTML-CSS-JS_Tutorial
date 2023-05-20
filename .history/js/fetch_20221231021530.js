fetch('https://jsonpslaceholder.typicode.com/todos/1')
    .then(function(respon) {
        return respon.json();
    })
    .then(function(post) {
        console.log(post);
    })
    .catch(function(err) {
        console.log('error: ' + err.message);
    })