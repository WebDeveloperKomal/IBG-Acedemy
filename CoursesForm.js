function saveCourses() {

    var tagsInput = document.getElementById('tags').value;
    var tags = tagsInput.split(',').map(tag => tag.trim()); // Split and trim tags

    var saveCoursesData = {
        "courseName": [
            {
                "moduleName": document.getElementById('moduleName').value,
                "lesson1": document.getElementById('lesson1').value,
                "lesson2": document.getElementById('lesson2').value,
                "lesson3": document.getElementById('lesson3').value,
                "tags": tags
            }
        ]
    };

    console.log(JSON.stringify(saveCoursesData));


    if (saveCoursesData != null) {
        alert("Message sent successfully!");
    }


    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');


    fetch("http://localhost:8080/addmore", {
        method: 'POST',
        body: JSON.stringify(saveCoursesData),
        headers: headers,
    })

        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error('Error:', error));
}