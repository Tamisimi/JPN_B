function formatDates(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }
    if (arr.length === 0) {
        return "Mảng không có phần tử nào";
    }
    let formattedDates = arr.map(date => {
        let parts = date.split("-");
        if (parts.length === 3) {
            return `${parts[2]}/${parts[1]}/${parts[0]}`;
        }
        return null;
    }).filter(date => date !== null);

    return formattedDates;
}
formatDates(["2025-03-10", "2024-12-25", "2023-07-01"]);
formatDates([]);
formatDates("abc");
