function saveSubmit() {

    var nameElement = document.getElementById('name');
    var descriptionElement = document.getElementById('description');
    var instructorElement = document.getElementById('instructor');
    var coursesElement = document.getElementById('courses');
    var timingElement = document.getElementById('timing');
    var durationElement = document.getElementById('duration');


    var name = nameElement.value;
    var description = descriptionElement.value;
    var instructor = instructorElement.value;
    var courses = coursesElement.value;
    var timing = timingElement.value;
    var duration = parseInt(durationElement.value);


    var saveSubmitData = {
        name: name,
        description: description,
        instructor: instructor,
        courses: courses,
        timing: timing,
        duration: duration,
    };

    console.log(JSON.stringify(saveSubmitData));

    if (saveSubmitData != null) {
        alert("Message sent successfully!");
    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    fetch("http://localhost:8080/coursepurchase", {
        method: 'POST',
        body: JSON.stringify(saveSubmitData),
        headers: headers,
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error('Error:', error));
}
