let day = Number(prompt("Nhập ngày sinh:"));
let month = Number(prompt("Nhập tháng sinh:"));

if (!Number.isInteger(day) || !Number.isInteger(month) || month < 1 || month > 12 || day < 1 || day > 31) {
    console.log("Vui lòng nhập ngày tháng hợp lệ!");
} else {
    let zodiac = "";

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        zodiac = "Bạch Dương";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        zodiac = "Kim Ngưu";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        zodiac = "Song Tử";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        zodiac = "Cự Giải";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        zodiac = "Sư Tử ";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        zodiac = "Xử Nữ ";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        zodiac = "Thiên Bình ";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        zodiac = "Bọ Cạp";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        zodiac = "Nhân Mã";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        zodiac = "Ma Kết";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        zodiac = "Bảo Bình";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        zodiac = "Song Ngư";
    } else {
        zodiac = "Ngày tháng không hợp lệ!";
    }

    console.log(`Cung hoàng đạo của bạn là: ${zodiac}`);
}
