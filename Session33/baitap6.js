const weatherData = {
    "Hà Nội": { temperature: 25, humidity: 70, windSpeed: 5, description: "Có mây", icon: "☁️" },
    "Hồ Chí Minh": { temperature: 32, humidity: 75, windSpeed: 7, description: "Nắng", icon: "☀️" },
    "Đà Nẵng": { temperature: 28, humidity: 82, windSpeed: 12, description: "Mưa rào", icon: "🌧️" }
};
function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const resultDiv = document.getElementById("weatherResult");

    if (weatherData[city]) {
        const data = weatherData[city];
        resultDiv.innerHTML = `
                    <h2>${city}</h2>
                    <p>${data.icon} ${data.temperature}°C</p>
                    <p>${data.description}</p>
                    <p>Độ ẩm: ${data.humidity}%</p>
                    <p>Tốc độ gió: ${data.windSpeed} km/h</p>
                `;
    } else {
        resultDiv.innerHTML = "<p>Không tìm thấy thông tin thời tiết cho thành phố này!</p>";
    }
}