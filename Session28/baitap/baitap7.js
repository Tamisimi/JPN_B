let students = [
    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },
    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },
    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } }
];
function getAverage(scores) {
    let total = (scores.math + scores.english + scores.literature) / 3;
    return total;
}
function filterExcellentStudents(students) {
    return students.filter(student => getAverage(student.scores) >= 8);
}
let excellentStudents = filterExcellentStudents(students);
console.log("Danh sách sinh viên giỏi:", excellentStudents);
