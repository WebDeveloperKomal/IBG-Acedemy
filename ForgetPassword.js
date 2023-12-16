// function submitForgotPasswordForm() {

//     var submitForgotPasswordForm = {
//         forgotPasswordEmail: document.getElementById('forgotPasswordEmail').value,
//         securityQuestion: document.getElementById('securityQuestion').value,
//         answer: document.getElementById('answer').value,
//         newPassword: document.getElementById('newPassword').value,
//     };

//     console.log(JSON.stringify(submitForgotPasswordForm));

//     if (submitForgotPasswordForm.forgotPasswordEmail &&
//         submitForgotPasswordForm.securityQuestion &&
//         submitForgotPasswordForm.answer &&
//         submitForgotPasswordForm.newPassword) {


//         alert("Message sent successfully!");


//         let headers = new Headers();
//         headers.append('Content-Type', 'application/json');
//         headers.append('Accept', 'application/json');


//         fetch("http://localhost:8080/forgetpassword", {
//             method: 'POST',
//             body: JSON.stringify(submitForgotPasswordForm),
//             headers: headers,
//         })

//             .then(response => response.json())
//             .then(json => console.log(json))
//             .catch(error => console.error('Error:', error));
//     } else {
//         alert("Please fill in all fields");
//     }
// }

// -------------------------------------------------------------------------------------------------

// function submitForgotPasswordForm() {

//     var submitForgotPasswordForm = {
//         forgotPasswordEmail: document.getElementById('forgotPasswordEmail').value,
//         securityQuestion: document.getElementById('securityQuestion').value,
//         answer: document.getElementById('answer').value,
//         newPassword: document.getElementById('newPassword').value,
//     }

//     console.log(JSON.stringify(submitForgotPasswordForm));

//     if (submitForgotPasswordForm != null) {
//         alert("message send successfully!")
//     }

//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     headers.append('Accept', 'application/json');


//     fetch("http://localhost:8080/forgetpassword", {
//         method: 'POST',
//         body: JSON.stringify(submitForgotPasswordForm),
//         headers: headers,
//     })

//         .then(response => response.json())
//         .then(json => console.log(json))
//         .then(error => console.error('Error:', error));
// }


// ----------------------------------------------------------------------------------------



function submitForgotPasswordForm() {
    var submitForgotPasswordForm = {
        forgotPasswordEmail: document.getElementById('forgotPasswordEmail').value,
        securityQuestion: document.getElementById('securityQuestion').value,
        answer: document.getElementById('answer').value,
        newPassword: document.getElementById('newPassword').value,
    };

    console.log('Form data:', submitForgotPasswordForm);

    if (submitForgotPasswordForm.forgotPasswordEmail
        && submitForgotPasswordForm.securityQuestion
        && submitForgotPasswordForm.answer
        && submitForgotPasswordForm.newPassword) {
        alert('Message sent successfully!');
    } else {
        alert('Please fill out all fields.');
        return;
    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');


    fetch('http://localhost:8080/forgetpassword', {
        method: 'POST',
        body: JSON.stringify(submitForgotPasswordForm),
        headers: headers,
    })


        .then(response => response.json())
        .then(json => console.log('Response:', json))
        .catch(error => console.error('Error:', error));
}


