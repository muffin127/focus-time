const sounds = {
  workEnd: new Audio('/focus-time/sounds/work-end.mp3'),
  breakEnd: new Audio('/focus-time/sounds/break-end.mp3'),
  dayComplete: new Audio('/focus-time/sounds/day-complete.mp3'),
};

export function playWorkEnd() {
  sounds.workEnd.currentTime = 0;
  sounds.workEnd.play();
}

export function playBreakEnd() {
  sounds.breakEnd.currentTime = 0;
  sounds.breakEnd.play();
}

export function playDayComplete() {
  sounds.dayComplete.currentTime = 0;
  sounds.dayComplete.play();
}
