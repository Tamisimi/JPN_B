let math = +prompt("Mời nhập điểm toán");
let language = +prompt("Mời nhập điểm văn");
let english = +prompt("Mời nhập điểm anh");

let score = (math + language + english) / 3;

if (score >= 8) {
    console.log("Học lực giỏi");
} else if (score >= 6.5 && 7.9 >= score) {
    console.log("Học lực khá");
} else if (score >= 5 && 6.4 >= score) {
    console.log("Học lực trung bình");
} else {
    console.log("Học lực yếu");
}