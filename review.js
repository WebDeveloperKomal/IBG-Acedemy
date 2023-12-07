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

// ---------------------------GET------------------------------------------------



fetch('http://localhost:8080/dummy', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));



// -------------------------DELETE---------------------------------------------


fetch('http://localhost:8080/dummy', {
    method: 'DELETE',
});  