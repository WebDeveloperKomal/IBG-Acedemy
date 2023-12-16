// function saveSubmit() {

//     var studentRatingElement = document.getElementById('studentRating');
//     var selectedStudentRating = studentRatingElement.value;

//     var saveSubmit = {
//         studentId: document.getElementById('studentId').value,
//         courseId: document.getElementById('courseId').value,
//         studentRating: selectedStudentRating,
//     };


//     console.log(JSON.stringify(saveSubmit));


//     if (saveSubmit != null) {
//         alert("Message sent successfully!");
//     }

//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     headers.append('Accept', 'application/json');


//     fetch("http://localhost:8080/courserating", {
//         method: 'POST',
//         body: JSON.stringify(saveSubmit),
//         headers: headers,
//     })


//         .then(response => response.json())
//         .then(json => console.log(json))
//         .catch(error => console.error('Error:', error));
// }


// -------------------------------------------------------------------------------------



function saveSubmit() {
    var studentIdElement = document.getElementById('studentId');
    var courseIdElement = document.getElementById('courseId');
    var studentRatingElement = document.getElementById('studentRating');


    var studentId = studentIdElement.value;
    var courseId = courseIdElement.value;
    var studentRating = parseFloat(studentRatingElement.value); // Convert to float


    var saveSubmitData = {
        studentId: studentId,
        courseId: courseId,
        studentRating: studentRating,
    };


    console.log(JSON.stringify(saveSubmitData));


    if (saveSubmitData != null) {
        alert("Message sent successfully!");
    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');


    fetch("http://localhost:8080/courserating", {
        method: 'POST',
        body: JSON.stringify(saveSubmitData),
        headers: headers,
    })

        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error('Error:', error));
}

