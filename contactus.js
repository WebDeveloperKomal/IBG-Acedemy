function saveContact() {

    var saveContact = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    }

    console.log(JSON.stringify(saveContact));

    if (saveContact != null) {
        alert("message send successfully!")
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



// -----------------------get---------------------------------------------


// const apiKey = 'your_api_key_here';
// const apiUrl = 'https://api.example.com/data';

// const requestOptions = {
//   method: 'GET',
//   headers: {
//     'Authorization': `Bearer ${apiKey}`,
//   },
// };

// fetch(apiUrl, requestOptions)
//   .then(response => {
//     if !response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     outputElement.textContent = JSON.stringify(data, null, 2);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });