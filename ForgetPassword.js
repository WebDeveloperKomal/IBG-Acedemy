
function reset() {

    var reset = {
        email: document.getElementById('email').value,
        securityQuestion: document.getElementById('securityQuestion').value,
        answer: document.getElementById('answer').value,
        newPassword: document.getElementById('newPassword').value,
    }

    if (submitForgotPasswordForm.forgotPasswordEmail
        && submitForgotPasswordForm.securityQuestion
        && submitForgotPasswordForm.answer
        && submitForgotPasswordForm.newPassword) {
        alert('Message sent successfully!');
    } else {
        alert('Please fill out all fields.');
        return;
    }

    console.log(JSON.stringify(reset));
    if (reset != null) {
        alert("message send successfully!")
    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');


    fetch("http://localhost:8080/forgetpassword", {
        method: 'POST',
        body: JSON.stringify(reset),
        headers: headers,
    })

        .then(response => response.json())
        .then(json => console.log(json))
        .then(error => console.error('Error:', error));
}


