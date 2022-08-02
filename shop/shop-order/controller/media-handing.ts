const TIME_MINUTES = 60;
const TYPE_IMAGE = 'image';

function getDurationToTime(duration: number) {
  const durationFloor = Math.floor(duration);
  const minutes = Math.floor(durationFloor / TIME_MINUTES);
  const seconds = durationFloor - TIME_MINUTES * minutes;
  return `${minutes}:${seconds}s`;
}

function isImageMedia(input: string): boolean {
  return input.indexOf(TYPE_IMAGE) !== -1;
}

export {getDurationToTime, isImageMedia};
