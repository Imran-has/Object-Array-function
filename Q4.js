let students = [
    { name: "saad", isSenior: true, hascompletedAssignments: true },
    { name: "Hassan", isSenior: true, hascompletedAssignments: true },
    { name: "Abbas", isSenior: false, hascompletedAssignments: false },
    { name: "Asad", isSenior: false, hascompletedAssignments: false },
];
function findSeniorStudentWithAssignments(students) {
    return students.filter(student => student.isSenior && student.hascompletedAssignments);
}
;
let seniorstudentWithAssignments = findSeniorStudentWithAssignments(students);
console.log("Senior students with completed Assignments:”,seniorStudentWithAssignments");
function removeIncompleteSeniorStudents(students) {
    return students.filter(student => !(student.isSenior && !student.hascompletedAssignments));
}
let updatedClassList = removeIncompleteSeniorStudents(students);
console.log("Updated class list:", updatedClassList);
export {};
