let students = [];

let selectedIndex = -1;

function addProduct() {
    let studentName = document.getElementById("student-name").value;
    let studentSurname = document.getElementById("student-surname").value;
    let studentComment = document.getElementById("student-comment").value;

    document.getElementById("student-name").value = "";
    document.getElementById("student-surname").value = "";
    document.getElementById("student-comment").value = "";

    let newStudent = {
        name: studentName,
        surname: studentSurname,
        comment: studentComment
    };

    if (selectedIndex >= 0){
        students[selectedIndex] = newStudent;
        selectedIndex = -1
    }else {
        students.push(newStudent)
    }

    drawPage()
}

function deleteStudent(index) {
    students.splice(index, 1);
    drawPage()
}

function drawPage() {
    let result = "";
    for (let i = 0; i < students.length; i++){
        result +=
            "<div class='col-4 mt-5'>" +
            "<div class='card'>" +
            "<div class='card-header'><h3>"+ students[i].name +" "+ students[i].surname +"</h3></div>" +
            "<div class='card-body'>" +
            "<p>comment: <b>"+ students[i].comment +"</b></p>" +
            "</div>" +
            "<div class='card-footer d-flex justify-content-between align-items-center' style='background-color: black;'>" +
            "<button type='button' class='btn btn-success' onclick='editStudent("+ i +")'>Edit</button>" +
            "<button type='button' class='btn btn-danger' onclick='deleteStudent("+ i +")'>Delete</button>" +
            "</div>" +
            "</div>" +
            "</div>"
    }
    document.getElementById("result").innerHTML = result;
}
function editStudent(index) {

    document.getElementById("student-name").value = students[index].name;
    document.getElementById("student-surname").value = students[index].surname;
    document.getElementById("student-comment").value = students[index].comment;

    selectedIndex = index;
}