

// -----------------------------POST------------------------------------

function saveData() {

    var saveData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        mobile: document.getElementById('mobile').value,
        address: document.getElementById('address').value,
    }

    console.log(JSON.stringify(saveData));

    if (saveData != null) {
        alert("message send successfully!")
    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');


    fetch("http://localhost:8080/dummy", {
        method: 'POST',
        body: JSON.stringify(saveData),
        headers: headers,
    })

        .then(response => response.json())
        .then(json => console.log(json))
        .then(error => console.error('Error:', error));

}

// ----------------------PUT----------------------------------

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'PUT',
//     body: JSON.stringify({
//         id: 1,
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));




// --------------------------------------------------------------

function saveData() {

    var saveData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        mobile: document.getElementById('mobile').value,
        address: document.getElementById('address').value,
    }

    console.log(JSON.stringify(saveData));

    if (saveData != null) {
        alert("message send successfully!")
    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');


    fetch("http://localhost:8080/dummy", {
        method: 'POST',
        body: JSON.stringify(saveData),
        headers: headers,
    })

        .then(response => response.json())
        .then(json => console.log(json))
        .then(error => console.error('Error:', error));

}

