function getDataNotRepeat(data: any[]) {
  //   return [{key: 'left-spacer'}, ...data, {key: 'right-spacer'}];
  return [null, ...data, null];
}

function getDataRepeat(data: any[]) {
  return getDataNotRepeat([...data, ...data, ...data]);
}

export {getDataNotRepeat, getDataRepeat};
