/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */

function validateEmail(emailCheck: string) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test(emailCheck)) {
    return true;
  }
  return false;
}

function validatePassword(passwordCheck: string) {
  const temp = passwordCheck.trim();
  if (temp.length < 8) {
    return false;
  }
  return true;
}

const dataLogin = [
  {
    email: 'khanh2000vt@gmail.com',
    password: 'testpassthui1',
  },
  {
    email: 'khoanguyen@gmail.com',
    password: 'testpassthui2',
  },
];
function checkLogin(username: string, password: string) {
  let passSuccess = false;
  dataLogin.forEach(item => {
    if (username === item.email && password === item.password) {
      passSuccess = true;
    }
  });
  return passSuccess;
}

function isVietnamesePhoneNumber(number: string) {
  return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
}

function checkOTP(OTPinput: string) {
  const OTPpass = '242866';
  return OTPpass === OTPinput;
}

function confirmPassword(password: string) {
  const temp = 'newpassword';
  return password === temp;
}

export {
  validateEmail,
  validatePassword,
  checkOTP,
  checkLogin,
  isVietnamesePhoneNumber,
  confirmPassword,
};
