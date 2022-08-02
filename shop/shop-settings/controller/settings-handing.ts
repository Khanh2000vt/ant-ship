function handleSettingsPopup(item: any, list: any[], index: number): any[] {
  const data = list[index];
  let popup = [
    ...list.slice(0, index),
    {
      ...data,
      choose: item,
    },
    ...list.slice(index + 1),
  ];
  return popup;
}

function handleSelectSettings(item: any, data: any[]) {
  let popup: any[] = [];
  data.forEach(value => {
    if (value.id === item.id) {
      popup.push({...item, isSelected: true});
    } else {
      popup.push(value);
    }
  });
  return popup;
}
export {handleSettingsPopup, handleSelectSettings};
