// function saveRegister() {

//     var saveRegister = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         password: document.getElementById('password').value,
//         userRoles: document.getElementById('userRoles').value,
//         confirmPassword: document.getElementById('confirmPassword').value,
//         additionalInterest: document.getElementById('additionalInterest').value,
//     }


//     var dataToSend = [saveRegister];

//     console.log("dataaaa", JSON.stringify(dataToSend));


//     if (dataToSend != null) {
//         alert("message send successfully!")
//     }


//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     headers.append('Accept', 'application/json');


//     fetch("http://localhost:8080/register", {
//         method: 'POST',
//         body: JSON.stringify(dataToSend),
//         headers: headers,
//     })

//         .then(response => response.json())
//         .then(json => console.log(json))
//         .then(error => console.error('Error:', error));
// }


// // --------------------------------------------------------------------------


function saveRegister() {
    var saveRegister = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        userRoles: [{ userRole: document.getElementById('userRoles').value }], // Wrap userRoles in an array
        confirmPassword: document.getElementById('confirmPassword').value,
        countryName: document.getElementById('countryName').value,
    };


    console.log("dataaaa", JSON.stringify(saveRegister));

    if (saveRegister != null) {
        alert("message send successfully!");
    }


    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');


    fetch("http://localhost:8080/register", {
        method: 'POST',
        body: JSON.stringify(saveRegister),
        headers: headers,
    })

        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error('Error:', error));
}
