function questionAnswerForm() {

    // Get the values of studentQuestion and instructorAnswer
    var studentQuestionValue = document.getElementById('studentQuestion').value;
    var instructorAnswerValue = document.getElementById('instructorAnswer').value;


    // Count the number of lines in studentQuestion
    var studentQuestionLines = studentQuestionValue.split(/\r\n|\r|\n/).length;


    // Count the number of lines in instructorAnswer
    var instructorAnswerLines = instructorAnswerValue.split(/\r\n|\r|\n/).length;


    var questionAnswerForm = {
        studentQuestion: {
            content: studentQuestionValue,
            numberOfLines: studentQuestionLines
        },
        instructorAnswer: {
            content: instructorAnswerValue,
            numberOfLines: instructorAnswerLines
        }
    };

    console.log(JSON.stringify(questionAnswerForm));

    if (questionAnswerForm != null) {
        alert("Message sent successfully!");
    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');


    fetch("http://localhost:8080/question", {
        method: 'POST',
        body: JSON.stringify(questionAnswerForm),
        headers: headers,
    })

        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error('Error:', error));
}
