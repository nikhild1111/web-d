function markAttendance() {
    var studentName = document.getElementById("studentName").value;
    if (studentName.trim() === "") {
        alert("Please enter a student name.");
        return;
    }

    var listItem = document.createElement("li");
    listItem.textContent = studentName;
    document.getElementById("attendanceItems").appendChild(listItem);

    document.getElementById("studentName").value = "";
}
