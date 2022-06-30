function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysDiv = clock.querySelector('.clock--days');
  const hoursDiv = clock.querySelector('.clock--hours');
  const minutesDiv = clock.querySelector('.clock--minutes');
  const secondsDiv = clock.querySelector('.clock--seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysDiv.innerHTML = t.days;
    hoursDiv.innerHTML = ('0' + t.hours).slice(-2);
    minutesDiv.innerHTML = ('0' + t.minutes).slice(-2);
    secondsDiv.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 20 * 24 * 60 * 60 * 1000);
initializeClock('clock__timer', deadline);