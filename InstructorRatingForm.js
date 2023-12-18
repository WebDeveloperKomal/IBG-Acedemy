function saveForm() {
    // Get the value of instructorRating from the input field

    var instructorRatingValue = document.getElementById('instructorRating').value;

    // Parse instructorRating as a floating-point number

    var instructorRating = parseFloat(instructorRatingValue);

    // Check if instructorRating is a valid number

    if (!isNaN(instructorRating)) {
        // Create an object with studentID, courseID, and instructorRating

        var saveFormData = {
            studentID: document.getElementById('studentID').value,
            courseID: document.getElementById('courseID').value,
            instructorRating: instructorRating
        };

        console.log(JSON.stringify(saveFormData));

        alert("Message sent successfully!");

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        fetch("http://localhost:8080/courserating", {
            method: 'POST',
            body: JSON.stringify(saveFormData),
            headers: headers,
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(error => console.error('Error:', error));
    } else {

        alert("Invalid instructorRating value. Please enter a valid number.");
    }
}
