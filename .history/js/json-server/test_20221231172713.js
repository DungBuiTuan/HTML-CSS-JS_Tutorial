fetch('http://localhost:3000/profile')
    .then(function(response) {
        return response.json();
    })
    .then(function(posts) {
        console.log(posts);
    })
    .catch(function(err) {
        console.log('error: ' + err.message);
    })