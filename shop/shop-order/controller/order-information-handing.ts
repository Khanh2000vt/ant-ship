/* eslint-disable prettier/prettier */
function phoneCheck(inputTxt: string) {
  const phoneNo = /^\d{10}$/;
  if (inputTxt.match(phoneNo)) {
    return true;
  }
  return false;
}
export {phoneCheck};
