function displayData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var skills = document.querySelectorAll('input[name="skills"]:checked');
    var skillsList = [];
    for (var i = 0; i < skills.length; i++) {
        skillsList.push(skills[i].value);
    }
    var output = "Name: " + name + "<br>Email: " + email + "<br>Password: " + password + "<br>Gender: " + gender + "<br>Skills: " + skillsList.join(", ") ;
    document.getElementById("output").innerHTML = output;
}
