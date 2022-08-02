import {MAX_SIZE_MEDIA_BYTES} from '../utils';

//MAX_SIZE_MEDIA
function isSatisfyCapacity(sizeMedia: number, dataNew: any[]): boolean {
  if (dataNew === undefined) {
    return true;
  } else {
    let sum = 0;
    dataNew.forEach(value => {
      sum += value.fileSize;
    });
    return sizeMedia + sum < MAX_SIZE_MEDIA_BYTES;
  }
}

function handleSizeMedia(sizeMedia: number, dataNew: any[]): number {
  if (dataNew === undefined) {
    return sizeMedia;
  } else {
    let sum = 0;
    dataNew.forEach(value => {
      sum += value.fileSize;
    });
    return sizeMedia + sum;
  }
}

function handleReturnSize(sizeParent: number, sizeChild: number): number {
  return sizeParent - sizeChild;
}

function handleAddUriMedia(dataRoot: any[], dataNew: any[]): any[] {
  return dataRoot.concat(dataNew);
}

function handleDeleteItemMedia(arrayData: any[], index: number): any[] {
  return [
    ...arrayData.slice(0, index),
    ...arrayData.slice(index + 1, arrayData.length),
  ];
}

function isDuplicateMedia(dataRoot: any[], dataNew: any[]): boolean {
  let isDifference = true;
  let arrayTempID: string[] = [];
  dataRoot.forEach(value => {
    arrayTempID.push(value.id);
  });

  dataNew.forEach(value => {
    if (arrayTempID.indexOf(value.id) !== -1) {
      isDifference = false;
    }
  });
  return isDifference;
}

export {
  isSatisfyCapacity,
  handleSizeMedia,
  handleAddUriMedia,
  handleDeleteItemMedia,
  isDuplicateMedia,
  handleReturnSize,
};
