const startYear = 2017;
const endYear = 2024;

// Get the dropdown elements
const dateSelect = document.getElementById('date-select');
const monthSelect = document.getElementById('month-select');
const yearSelect = document.getElementById('year-select');

// Populate Year Dropdown
for (let year = startYear; year <= endYear; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
}

// Populate Month Dropdown
for (let month = 1; month <= 12; month++) {
    const option = document.createElement('option');
    option.value = month;
    option.textContent = String(month).padStart(2, '0'); // Format as 01, 02, etc.
    monthSelect.appendChild(option);
}

// Populate Date Dropdown based on selected Year and Month
function populateDates() {
    dateSelect.innerHTML = ''; // Clear existing options

    const selectedYear = parseInt(yearSelect.value, 10);
    const selectedMonth = parseInt(monthSelect.value, 10);

    if (isNaN(selectedYear) || isNaN(selectedMonth)) return;

    const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate(); // Get number of days in the month

    for (let day = 1; day <= daysInMonth; day++) {
        const option = document.createElement('option');
        option.value = day;
        option.textContent = String(day).padStart(2, '0'); // Format as 01, 02, etc.
        dateSelect.appendChild(option);
    }
}

// Update dates when Year or Month changes
yearSelect.addEventListener('change', populateDates);
monthSelect.addEventListener('change', populateDates);

// Initial population of dropdowns
yearSelect.value = startYear;
monthSelect.value = 1;
populateDates();



function openModal(month) {
    // Show modal and overlay
    document.getElementById('modal-overlay').style.display = 'block';
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal-content').innerText = `You clicked on ${month} 2024.`;
}

function closeModal() {
    // Hide modal and overlay
    document.getElementById('modal-overlay').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
}

// Close modal when clicking outside the modal content
document.getElementById('modal-overlay').addEventListener('click', closeModal);