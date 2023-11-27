let date = new Date();
let currYear = date.getFullYear(),
    currMonth = date.getMonth();

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const currentDate = document.querySelector('.current-date');
const daysTag = document.querySelector('.days');

const renderCalendar = () => {
    currentDate.innerHTML = `${months[currMonth]} ${currYear}`;
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = '';

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive" onclick="showMemoInput(${lastDateofLastMonth - i + 1})">${
            lastDateofLastMonth - i + 1
        }</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday =
            i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear()
                ? 'active'
                : '';
        liTag += `<li class="${isToday}" onclick="showMemoInput(${i})">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive" onclick="showMemoInput(${i - lastDayofMonth + 1})">${
            i - lastDayofMonth + 1
        }</li>`;
    }
    daysTag.innerHTML = liTag;
};

const showMemoInput = (day) => {
    const memoInput = document.getElementById('memoInput');
    const memoButton = document.getElementById('memoButton');
    const calender = document.querySelector('.calender');
    memoInput.style.display = 'block';
    memoButton.style.display = 'block';
};

const memoButton = document.getElementById('memoButton').addEventListener('click', () => {
    const memoInput = document.getElementById('memoInput');
    const calender = document.querySelector('.calender');
    memoInput.style.display = 'none';
    memoButton.style.display = 'none';
});

document.getElementById('month_left').addEventListener('click', () => {
    currMonth--;
    if (currMonth < 0) {
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear();
        currMonth = date.getMonth();
    } else {
        date = new Date();
    }
    renderCalendar();
});

document.getElementById('month_right').addEventListener('click', () => {
    currMonth++;
    if (currMonth > 11) {
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear();
        currMonth = date.getMonth();
    } else {
        date = new Date();
    }
    renderCalendar();
});

renderCalendar();
