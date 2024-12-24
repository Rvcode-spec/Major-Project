const startYear = 2017;
const endYear = 2024;

const dateSelect = document.getElementById('date-select');

for (let year = startYear; year <= endYear; year++) {
    for (let month = 1; month <= 12; month++) {
        const daysInMonth = new Date(year, month, 0).getDate();
        for (let day = 1; day <= daysInMonth; day++) {
            const option = document.createElement('option');
            option.value = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            option.textContent = `${year} - ${String(month).padStart(2, '0')} - ${String(day).padStart(2, '0')}`;
            dateSelect.appendChild(option);
        }
    }
}