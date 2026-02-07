// Picker Logic

export function initPickers() {
    initDatePickers();
    initTimePickers();
}

function initDatePickers() {
    const datePickers = document.querySelectorAll('.l-datepicker');

    datePickers.forEach(picker => {
        const input = picker.querySelector('.l-input-date');
        const dropdown = picker.querySelector('.l-datepicker-dropdown');

        // Toggle Dropdown
        input.addEventListener('click', (e) => {
            e.stopPropagation();
            closeAllPickers(dropdown);
            dropdown.classList.toggle('active');
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!picker.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });

        // Basic Calendar Logic (Demo)
        renderCalendar(picker);
    });
}

function renderCalendar(picker) {
    const grid = picker.querySelector('.l-datepicker-grid');
    const currentMonthLabel = picker.querySelector('.l-current-month');
    const input = picker.querySelector('.l-input-date');

    if (!grid) return;

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    if (currentMonthLabel) currentMonthLabel.textContent = `${monthNames[month]} ${year}`;

    // Simple 30-day grid for demo
    // Clear existing
    // grid.innerHTML = ''; // Keep headers if any

    // Add Days
    for (let i = 1; i <= 31; i++) {
        const dayEl = document.createElement('div');
        dayEl.className = 'l-day';
        dayEl.textContent = i;

        if (i === date.getDate()) dayEl.classList.add('today');

        dayEl.addEventListener('click', (e) => {
            e.stopPropagation();
            // Deselect others
            const selected = grid.querySelector('.selected');
            if (selected) selected.classList.remove('selected');

            dayEl.classList.add('selected');
            input.value = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
            picker.querySelector('.l-datepicker-dropdown').classList.remove('active');
        });

        grid.appendChild(dayEl);
    }
}

function initTimePickers() {
    const timePickers = document.querySelectorAll('.l-timepicker');

    timePickers.forEach(picker => {
        const input = picker.querySelector('.l-input-time');
        const dropdown = picker.querySelector('.l-timepicker-dropdown');

        if (!input || !dropdown) return;

        // Toggle
        input.addEventListener('click', (e) => {
            e.stopPropagation();
            closeAllPickers(dropdown);
            dropdown.classList.toggle('active');
        });

        // Close outside
        document.addEventListener('click', (e) => {
            if (!picker.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });

        // Populate Times
        const hoursCol = picker.querySelector('.l-time-hours');
        const minsCol = picker.querySelector('.l-time-minutes');

        if (hoursCol && hoursCol.children.length === 0) {
            for (let i = 0; i < 24; i++) {
                const opt = document.createElement('div');
                opt.className = 'l-time-option';
                opt.textContent = String(i).padStart(2, '0');
                opt.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const currentSel = hoursCol.querySelector('.selected');
                    if (currentSel) currentSel.classList.remove('selected');
                    opt.classList.add('selected');
                    updateTimeInput(picker);
                });
                hoursCol.appendChild(opt);
            }
        }

        if (minsCol && minsCol.children.length === 0) {
            for (let i = 0; i < 60; i += 5) { // 5 min intervals
                const opt = document.createElement('div');
                opt.className = 'l-time-option';
                opt.textContent = String(i).padStart(2, '0');
                opt.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const currentSel = minsCol.querySelector('.selected');
                    if (currentSel) currentSel.classList.remove('selected');
                    opt.classList.add('selected');
                    updateTimeInput(picker);
                });
                minsCol.appendChild(opt);
            }
        }
    });
}

function updateTimeInput(picker) {
    const input = picker.querySelector('.l-input-time');
    const hourSel = picker.querySelector('.l-time-hours .selected');
    const minSel = picker.querySelector('.l-time-minutes .selected');

    if (hourSel && minSel) {
        input.value = `${hourSel.textContent}:${minSel.textContent}`;
        // Auto close? maybe not
    }
}

function closeAllPickers(except) {
    document.querySelectorAll('.l-datepicker-dropdown.active, .l-timepicker-dropdown.active').forEach(el => {
        if (el !== except) el.classList.remove('active');
    });
}
