const submitBtn = document.querySelector('.submit-btn');

const dayErrorMsg = document.querySelector('.day-error-msg');
const monthErrorMsg = document.querySelector('.month-error-msg');
const yearErrorMsg = document.querySelector('.year-error-msg');

const input_day = document.querySelector('#input-day');
const input_month = document.querySelector('#input-month');
const input_year = document.querySelector('#input-year');
let validate = false;

const output_day = document.querySelector('.output-days');
const output_month = document.querySelector('.output-months');
const output_year = document.querySelector('.output-years');

input_day.addEventListener('input', () => {
    if (input_day.value >= 32 || input_day.value <= 0) {
        dayErrorMsg.textContent = 'Must be a valid day';
        input_day.classList.add('input-error');
        dayErrorMsg.classList.add('error');
        dayErrorMsg.parentElement.firstElementChild.classList.add('error');
    } else {
        dayErrorMsg.textContent = "";
        input_day.classList.remove('input-error');
        dayErrorMsg.classList.remove('error');
        dayErrorMsg.parentElement.firstElementChild.classList.remove('error');
        validate = true;
    }
})

input_month.addEventListener('input', () => {
    if (input_month.value >= 13 || input_month.value <= 0) {
        monthErrorMsg.textContent = 'Must be a valid month';
        input_month.classList.add('input-error');
        monthErrorMsg.classList.add('error');
        monthErrorMsg.parentElement.firstElementChild.classList.add('error');
    } else {
        monthErrorMsg.textContent = "";
        input_month.classList.remove('input-error');
        monthErrorMsg.classList.remove('error');
        monthErrorMsg.parentElement.firstElementChild.classList.remove('error');
        validate = true;
    }
})

input_year.addEventListener('input', () => {
    if (input_year.value >= 2024 || input_year.value <= 1970) {
        yearErrorMsg.textContent = 'Must be a valid year';
        input_year.classList.add('input-error');
        yearErrorMsg.classList.add('error');
        yearErrorMsg.parentElement.firstElementChild.classList.add('error');
    } else {
        yearErrorMsg.textContent = "";
        input_year.classList.remove('input-error');
        yearErrorMsg.classList.remove('error');
        yearErrorMsg.parentElement.firstElementChild.classList.remove('error');
        validate = true;
    }
})

submitBtn.addEventListener('click', () => {
    calculateAge();
})

const calculateAge = () => {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let inputDate = new Date(`${input_year.value}-${input_month.value}-${input_day.value}`);

    if (!input_day.value && !input_month.value && !input_year.value) {
        dayErrorMsg.textContent = 'This Field is required';
        input_day.classList.add('input-error');
        dayErrorMsg.classList.add('error');
        dayErrorMsg.parentElement.firstElementChild.classList.add('error');

        monthErrorMsg.textContent = 'This Field is required';
        input_month.classList.add('input-error');
        monthErrorMsg.classList.add('error');
        monthErrorMsg.parentElement.firstElementChild.classList.add('error');

        yearErrorMsg.textContent = 'This Field is required';
        input_year.classList.add('input-error');
        yearErrorMsg.classList.add('error');
        yearErrorMsg.parentElement.firstElementChild.classList.add('error');
        validate = false;
    }

    if (!input_day.value) {
        dayErrorMsg.textContent = 'This Field is required';
        input_day.classList.add('input-error');
        dayErrorMsg.classList.add('error');
        dayErrorMsg.parentElement.firstElementChild.classList.add('error');
        validate = false;
    }

    if (!input_month.value) {
        monthErrorMsg.textContent = 'This Field is required';
        input_month.classList.add('input-error');
        monthErrorMsg.classList.add('error');
        monthErrorMsg.parentElement.firstElementChild.classList.add('error');
        validate = false;
    }

    if (!input_year.value) {
        yearErrorMsg.textContent = 'This Field is required';
        input_year.classList.add('input-error');
        yearErrorMsg.classList.add('error');
        yearErrorMsg.parentElement.firstElementChild.classList.add('error');
        validate = false;
    } else if (input_year.value % 4 === 0) {
        months[1] = 29;
        console.log('month changed to leap year');
    } else if (input_day.value > months[input_month.value - 1]) {
        dayErrorMsg.textContent = 'Must be a valid day';
        input_day.classList.add('input-error');
        dayErrorMsg.classList.add('error');
        dayErrorMsg.parentElement.firstElementChild.classList.add('error');
        validate = false;
        console.log('inside day checking if block');
    }

    if (validate) {
        let ageDifference = Date.now() - inputDate;
        let ageDate = new Date(ageDifference);
        output_day.textContent = ageDate.getUTCDate();
        output_month.textContent = ageDate.getUTCMonth();
        output_year.textContent = ageDate.getUTCFullYear() - 1970;
    }

    
}
