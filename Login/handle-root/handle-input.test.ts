/* eslint-disable prettier/prettier */
import {
  validateEmail,
  validatePassword,
  checkOTP,
  checkLogin,
  isVietnamesePhoneNumber,
  confirmPassword,
} from './handle-input';

describe('* test validate Email', () => {
  test('khanh2000vt@gmail.com is true', () => {
    const temp = validateEmail('khanh2000vt@gmail.com');
    expect(temp).toBeTruthy();
  });

  test('khanh2000vt is false', () => {
    const temp = validateEmail('khanh2000vt');
    expect(temp).toBeFalsy();
  });

  test('khanh2000vt@ is false', () => {
    const temp = validateEmail('khanh2000vt@');
    expect(temp).toBeFalsy();
  });

  test('khanh2000vt@gmail..com is false', () => {
    const temp = validateEmail('khanh2000vt@gmail..com');
    expect(temp).toBeFalsy();
  });

  test('@gmail.com is false', () => {
    const temp = validateEmail('@gmail.com');
    expect(temp).toBeFalsy();
  });
  test('khanh2000vt@.com is false', () => {
    const temp = validateEmail('khanh2000vt@.com');
    expect(temp).toBeFalsy();
  });
  test("' ' is false", () => {
    const temp = validateEmail(' ');
    expect(temp).toBeFalsy();
  });
  test("'   khanh2000vt@gmail.com    ' is false", () => {
    const temp = validateEmail('   khanh2000vt@gmail.com    ');
    expect(temp).toBeFalsy();
  });
});

describe('* test validate Passwords', () => {
  test('12345678 is true', () => {
    const temp = validatePassword('12345678');
    expect(temp).toBeTruthy();
  });

  test('123456789asaascf is true', () => {
    const temp = validatePassword('123456789asaascf');
    expect(temp).toBeTruthy();
  });

  test('123456 is false', () => {
    const temp = validatePassword('123456');
    expect(temp).toBeFalsy();
  });

  test("'123456      ' is false", () => {
    const temp = validatePassword('123456      ');
    expect(temp).toBeFalsy();
  });

  test("'      123456      ' is false", () => {
    const temp = validatePassword('      123456      ');
    expect(temp).toBeFalsy();
  });
});

describe('* test account login', () => {
  test('khanh2000vt@gmail.com - testpassthui1 is account login', () => {
    expect(checkLogin('khanh2000vt@gmail.com', 'testpassthui1')).toBeTruthy();
  });
  test('khanh2000vt@gmail.com - testpassthui2 is not account login', () => {
    expect(checkLogin('khanh2000vt@gmail.com', 'testpassthui2')).toBeFalsy();
  });
  test('khoanguyen@gmail.com - testpassthui2 is account login', () => {
    expect(checkLogin('khoanguyen@gmail.com', 'testpassthui2')).toBeTruthy();
  });
  test('khoanguyen@gmail.com - abcdefghik is not account login', () => {
    expect(checkLogin('khoanguyen@gmail.com', 'abcdefghik')).toBeFalsy();
  });
});

describe('* test validate phone number VN', () => {
  test('0983752000 is phone number', () => {
    expect(isVietnamesePhoneNumber('0983752000')).toBeTruthy();
  });
  test('0383752001 is phone number', () => {
    expect(isVietnamesePhoneNumber('0383752001')).toBeTruthy();
  });
  test('09837520123 is not phone number', () => {
    expect(isVietnamesePhoneNumber('09837520123')).toBeFalsy();
  });
  test('098375205 is not phone number', () => {
    expect(isVietnamesePhoneNumber('098375205')).toBeFalsy();
  });
});

describe('* test OTP', () => {
  test('242866 is OTP', () => {
    expect(checkOTP('242866')).toBeTruthy();
  });

  test('242865 is not OTP', () => {
    expect(checkOTP('242865')).toBeFalsy();
  });
});

describe('* test confirm password', () => {
  test('newpassword is the same as the new password', () => {
    expect(confirmPassword('newpassword')).toBeTruthy();
  });
  test('newpassword1 is not the same as the new password', () => {
    expect(confirmPassword('newpassword1')).toBeFalsy();
  });
});
