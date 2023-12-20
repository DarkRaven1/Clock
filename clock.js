let myInterval;

const hoursZero = document.querySelector('.hours-zero-js'),
      hoursElement = document.querySelector('.hours-js');

const minutesZero = document.querySelector('.minutes-zero-js'),
      minutesElement = document.querySelector('.minutes-js');

const secondsZero = document.querySelector('.seconds-zero-js'),
      secondsElement = document.querySelector('.seconds-js');

  myInterval = setInterval(() => {
    let time = new Date();
    let seconds = time.getSeconds();
    if(seconds < 10)
      secondsZero.innerHTML = 0;
    if(seconds === 10)
      secondsZero.innerHTML = '';
    secondsElement.innerHTML = seconds;
  }, 10);
  
  myInterval = setInterval(() => {
    let time = new Date();
    let minutes = time.getMinutes();
    if(minutes < 10)
      minutesZero.innerHTML = 0;
    if(minutes >= 10)
      minutesZero.innerHTML = '';
    minutesElement.innerHTML = minutes;
  }, 10);

  myInterval = setInterval(() => {
    let time = new Date();
    let hours = time.getHours();
    if(hours < 10)
      hoursZero.innerHTML = 0;
    if(hours >= 10)
      hoursZero.innerHTML = '';
    hoursElement.innerHTML = hours;
  }, 10);
  
