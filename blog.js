function saveForm() {

    var saveForm = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    }

    console.log(JSON.stringify(saveForm));

    if (saveForm != null) {
        alert("message send successfully!");
    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    fetch("http://localhost:8080/contacts", {
        method: 'POST',
        body: JSON.stringify(saveContact),
        headers: headers,
    })

        .then(response => response.json())
        .then(json => console.log(json))
        .then(error => console.error('Error:', error));
}