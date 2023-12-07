// -----------------------------POST---------------------------------


function saveReview() {

    var saveReview = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        comment: document.getElementById('comment').value,
    }

    console.log(JSON.stringify(saveReview));

    if (saveReview != null) {
        alert("message send successfully")
    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');


    fetch("http://localhost:8080/dummy", {
        method: 'POST',
        body: JSON.stringify(saveReview),
        headers: headers,
    })

        .then(response => response.json())
        .then(json => console.log(json))
        .then(error => console.error('Error:', error));

}

<<<<<<< HEAD
// ---------------------------GET------------------------------------------------



fetch('http://localhost:8080/dummy', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
=======
// ---------------------------------------------------------------------------------



fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
>>>>>>> ef931d82159c1449860385fa3d0375e45fb2a415
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
<<<<<<< HEAD
    .then((json) => console.log(json));



// -------------------------DELETE---------------------------------------------


fetch('http://localhost:8080/dummy', {
    method: 'DELETE',
});  
=======
    .then((json) => console.log(json));  
>>>>>>> ef931d82159c1449860385fa3d0375e45fb2a415
