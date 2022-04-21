const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");
  //const select = document.querySelector('h1');


  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h2").innerHTML = months[date.getMonth()];

  //document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date new">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
      days += `<div class="new">${i}</div>`;
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date new">${j}</div>`;
  }

  monthDays.innerHTML = days;

const btn = document.querySelector('button');
const alertImg = document.querySelector('.alert-img');
const alertText = document.querySelector('.alert-text');

  const selectDays = document.querySelectorAll('.new');
  selectDays.forEach(day => {
    day.style.cursor = 'pointer'
    day.addEventListener('click', () => {
        day.classList.toggle('select');
        btn.style.display = 'block';
        alertImg.style.display = 'none';
        alertText.style.display = 'none';
        })
    });

    btn.addEventListener('click', () => {
        btn.style.display = 'none';
        alertImg.style.display = 'block';
        alertText.style.display = 'block';
    })
    
}

renderCalendar();

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});


