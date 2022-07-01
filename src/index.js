const calendar = document.getElementById('date');
const button = document.getElementById('button');
let countDate = null;

calendar.addEventListener('input', (event) => {
  const result = new Date(event.target.value).getTime();
  countDate = result;
  countdown();
})

button.addEventListener('click', () => {
  setInterval(countdown, 1000);
})

const countdown = () => {
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);
  
  document.querySelector('.clock--days').innerText = textDay;
  document.querySelector('.clock--hours').innerText = textHour;
  document.querySelector('.clock--minutes').innerText = textMinute;
  document.querySelector('.clock--seconds').innerText = textSecond;
}
