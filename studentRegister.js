function navigateToPage() {
    var selectElement = document.getElementById('userRoles');
    var selectedValue = selectElement.options[selectElement.selectedIndex].value;

    if (selectedValue === 'STUDENT') {
        window.location.href = 'student-Register.html';
    }

}


// -----------------------------------------------------------------------------------





