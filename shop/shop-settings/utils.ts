const _ON = 'On';
const _OFF = 'Off';
const _SHIPPER = 'Shipper';
const _LANGUAGES = 'Languages';
const _ENGLISH = 'English';
const _VIETNAMESE = 'Vietnamese';
const _NOTIFICATION = 'Notification';
const _CLIENT = 'Client';
const _GOOGLE = 'Google';
const _FACEBOOK = 'Facebook';
const _TWITTER = 'Twitter';
const _INSTAGRAM = 'Instagram';
const _PAYMENT = 'Payment';
const _MOMO = 'Momo';
const _BANKS = 'Banks';
const _MOBILE_MONEY = 'Mobile Money';
const _SOCIALS = 'Socials';
const _TERM = 'Terms';
const _CHANGE_PASSWORD = 'Change Password';
const _UPDATED = 'Updated';
const _LIVE_CHAT = 'Live chat';
const _EMAIL = 'Email';

enum SettingsShipper {
  ON,
  OFF,
}
enum SettingsLanguages {
  ENG,
  VN,
}

enum SettingsNotifications {
  ON,
  OFF,
  CLIENT,
}

const Shipper = [
  {
    id: SettingsShipper.ON,
    title: _ON,
    isSelected: false,
  },
  {
    id: SettingsShipper.OFF,
    title: _OFF,
    isSelected: false,
  },
];

const Languages = [
  {
    id: SettingsLanguages.ENG,
    title: _ENGLISH,
    isSelected: false,
  },
  {
    id: SettingsLanguages.VN,
    title: _VIETNAMESE,
    isSelected: false,
  },
];
const Notifications = [
  {
    id: SettingsNotifications.ON,
    title: _ON,
    isSelected: false,
  },
  {
    id: SettingsNotifications.OFF,
    title: _OFF,
    isSelected: false,
  },
  {
    id: SettingsNotifications.CLIENT,
    title: _CLIENT,
    isSelected: false,
  },
];

enum SettingsSocial {
  GOOGLE,
  FACEBOOK,
  TWITTER,
  INSTAGRAM,
  TEST_1,
  TEST_2,
  TEST_3,
}
const Socials = [
  {
    id: SettingsSocial.GOOGLE,
    title: _GOOGLE,
    isSelected: false,
  },
  {
    id: SettingsSocial.FACEBOOK,
    title: _FACEBOOK,
    isSelected: false,
  },
  {
    id: SettingsSocial.TWITTER,
    title: _TWITTER,
    isSelected: false,
  },
  {
    id: SettingsSocial.INSTAGRAM,
    title: _INSTAGRAM,
    isSelected: false,
  },
  // {
  //   id: SettingsSocial.TEST_1,
  //   title: _FACEBOOK,
  //   isSelected: false,
  // },
  // {
  //   id: SettingsSocial.TEST_2,
  //   title: _TWITTER,
  //   isSelected: false,
  // },
  // {
  //   id: SettingsSocial.TEST_3,
  //   title: _INSTAGRAM,
  //   isSelected: false,
  // },
];

enum SettingsPayment {
  MOMO,
  BANKS,
  MOBILE_MONEY,
}
const Payment = [
  {
    id: SettingsPayment.MOMO,
    title: _MOMO,
    isSelected: false,
  },
  {
    id: SettingsPayment.BANKS,
    title: _BANKS,
    isSelected: false,
  },
  {
    id: SettingsPayment.MOBILE_MONEY,
    title: _MOBILE_MONEY,
    isSelected: false,
  },
];
// const Updated = ['v0.1'];

const settingsList = [
  {
    name: _SHIPPER,
    container: Shipper,
  },
  {
    name: _LANGUAGES,
    container: Languages,
  },
  {
    name: _NOTIFICATION,
    container: Notifications,
  },
  {
    name: _SOCIALS,
    container: Socials,
  },
  {
    name: _PAYMENT,
    container: Payment,
  },
];
const supportList = [
  {
    name: _LIVE_CHAT,
    container: null,
  },
  {
    name: _EMAIL,
    container: null,
  },
  {
    name: _TERM,
    container: null,
  },
  {
    name: _UPDATED,
    container: null,
  },
];

export {
  settingsList,
  supportList,
  _SHIPPER,
  _LANGUAGES,
  _NOTIFICATION,
  _PAYMENT,
  _SOCIALS,
  _TERM,
  _CHANGE_PASSWORD,
  _UPDATED,
  _LIVE_CHAT,
  _EMAIL,
  _ON,
  _OFF,
  _ENGLISH,
  _VIETNAMESE,
  _CLIENT,
  _GOOGLE,
  _FACEBOOK,
  _TWITTER,
  _INSTAGRAM,
  _MOMO,
  _BANKS,
  _MOBILE_MONEY,
  Shipper,
  Languages,
  Notifications,
  Socials,
  Payment,
};
