//Naming variables
//  Buttons
const startBtn = document.getElementById("startbtn");
const splitBtn = document.querySelector(".splitbtn");
const resetBtn = document.querySelector(".resetbtn");
const pauseBtn = document.querySelector(".pause");
const record = document.querySelector(".timerecord");
const splitText = document.querySelector(".splittext");

//  Timer
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const milisecond = document.querySelector(".count1");
const counter = document.querySelector(".count2");
let hr = 00;
let min = 00;
let sec = 00;
let msec = 0;
let c = 00;
let timer = true;
let split = false;
let reset = false;
let index = 1;
let type;
let fontClr;

//Event Listeners
startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);
pauseBtn.addEventListener("click", pauseTimer);
splitBtn.addEventListener("click", splitTimer);

//Functions
//1.    Starting Timer
function startTimer() {
  timer = true;
  stopWatch();
  startBtn.classList.add("hidden");
  pauseBtn.classList.remove("hidden");
  enableSplit();
  disableReset();
}

//2.    Pausing the timer
function pauseTimer() {
  type = "Pause";
  timer = false;
  pauseBtn.classList.add("hidden");
  startBtn.classList.remove("hidden");
  type = "Pause";
  enableReset();
  disableSplit();
  fontClr = "pauseclr";
  addingHtml();
}
//3.    Splitting the timer
function splitTimer() {
  if (split) {
    type = "Split";
    splitText.textContent = `${hr}:${min}:${sec}.${msec}${c}`;
    fontClr = "splitclr";
    addingHtml();
  }
}

//4.    Resetting the timer
function resetTimer() {
  if (reset) {
    timer = false;
    hr = 00;
    min = 00;
    sec = 00;
    msec = 0;
    c = 00;
    hour.textContent = "00";
    minute.textContent = "00";
    second.textContent = "00";
    milisecond.textContent = "0";
    counter.textContent = "00";
    disableReset();
    disableSplit();
    splitText.textContent = "SPLIT TIME";
    pauseBtn.classList.add("hidden");
    startBtn.classList.remove("hidden");
  }
}
//StopWatch
function stopWatch() {
  if (timer) {
    c++;

    if (c === 100) {
      msec++;
      c = 0;
    }
    if (msec === 10) {
      sec++;
      msec = 0;
    }
    if (sec === 60) {
      min++;
      sec = 0;
    }
    if (min === 60) {
      hr++;
      min = 0;
    }

    let hrString = hr;
    let minstring = min;
    let secString = sec;
    let msecString = msec;
    let cString = c;

    if (hrString < 10) {
      hrString = "0" + hrString;
    }
    if (minstring < 10) {
      minstring = "0" + minstring;
    }
    if (secString < 10) {
      secString = "0" + secString;
    }
    if (cString < 10) {
      cString = "0" + cString;
    }
    hour.textContent = hrString;
    minute.textContent = minstring;
    second.textContent = secString;
    milisecond.textContent = msecString;
    counter.textContent = cString;

    setTimeout(stopWatch, 0.05);
  }
}
//Adding html
function addingHtml() {
  const html = `
  <div class="timerecord-container">
  <div class="timerecord-Number">${index++}</div>
  <div class="timerecord-time ${fontClr}">${hr}:${min}:${sec}.${msec}${c}</div>
  <div class="timerecord-type">${type}</div>
  </div>
  `;
  record.insertAdjacentHTML("beforeend", html);
}
//Enabling Split
function enableSplit() {
  split = true;
  splitBtn.classList.add("split-active");
  return true;
}
//Enabling Reset
function enableReset() {
  reset = true;
  resetBtn.classList.add("reset-active");
  return true;
}
//Disabling split
function disableSplit() {
  split = false;
  splitBtn.classList.remove("split-active");
  return false;
}
//Disabling reset
function disableReset() {
  reset = false;
  resetBtn.classList.remove("reset-active");
  return false;
}
