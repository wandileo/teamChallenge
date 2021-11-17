var names = [];
var gender = [];
var age = [];

function findNameA() {

    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const displayTeamA = document.getElementById("displayTeamA");

    if (name == "") {
        alert("Name cannot be empty!!!");
        return;
    }

    if (age < 20) {
        alert("You are not allowed because you are under 20");
        return;
    }

    displayTeamA.innerHTML += "<p>" + name + " " + gender + " " + age + "</p>";

}

function findNameB() {

    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const displayTeamB = document.getElementById("displayTeamB");

    if (name == "") {
        alert("Name cannot be empty!!!");
        return;
    }

    if (age < 20) {
        alert("You are not allowed because you are under 20");
        return;
    }

    displayTeamB.innerHTML += "<p>" + name + " " + gender + " " + age + "</p>";

}
    
        


