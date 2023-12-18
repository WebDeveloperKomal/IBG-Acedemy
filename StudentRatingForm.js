
function saveSubmit() {
    var studentRatingValue = document.getElementById('studentRating').value;

    var studentRating = parseFloat(studentRatingValue);

    if (!isNaN(studentRating)) {
        var saveSubmit = {
            studentID: document.getElementById('studentID').value,
            courseID: document.getElementById('courseID').value,
            studentRating: studentRating
        };

        console.log(JSON.stringify(saveSubmit));

        alert("Message sent successfully!");

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');


        fetch("http://localhost:8080/courserating", {
            method: 'POST',
            body: JSON.stringify(saveSubmit),
            headers: headers,
        })

            .then(response => response.json())
            .then(json => console.log(json))
            .catch(error => console.error('Error:', error));
    } else {
        alert("Invalid studentRating value. Please enter a valid number.");
    }
}




