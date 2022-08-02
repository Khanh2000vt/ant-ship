/* eslint-disable prettier/prettier */

import {Action} from './model/shop-order-models';

enum OptionsOrder {
  ALL,
  PROCESSING,
  DELIVERING,
  COMPLETED,
  CANCELLED,
}

enum Receiver {
  NAME,
  ADDRESS,
  PHONE,
}

enum TypePage2 {
  CLASSIFY,
  VIEW,
  FORM_SHIP,
}
enum Classify {
  GOODS,
  BULKY_GOODS,
  FOOD,
}

enum ViewProduct {
  CAMERA,
  GALLERY,
}
enum FormShip {
  SAVE_MONEY,
  EXPRESS,
}

enum Email {
  SHIPPER,
  HELP,
}
const TitleOrders = {
  processing: 'Đang xử lý',
  delivering: 'Đang giao',
  completed: 'Hoàn thành',
  cancelled: 'Hủy',
};

const sizePopup = {
  width: 120,
  height: 150,
};

const titleReceiver = {
  receiverName: 'Tên người nhận',
  receiverAddress: 'Địa chỉ người nhận',
  receiverPhone: 'Số điện thoại người nhận',
};
//    type: ['Camera', 'Gallery'],

const product = {
  name: 'Tên sản phẩm',
  description: 'Mô tả sản phẩm',
  weight: 'Cân nặng',
  view: 'Hình ảnh / Video',
  formShip: {
    title: 'Hình thức giao hàng',
    dateReceipt: {
      title: 'Ngày nhận hàng',
      dateFrom: 'Từ ngày',
      dateTo: 'Đến ngày',
    },
  },
  price: 'Ước lượng',
  discountCode: 'Mã giảm giá',
  note: 'Ghi chú cho shipper',
};

const dataPopup = [
  {
    id: OptionsOrder.ALL,
    title: 'Tất cả',
    isSelected: false,
  },
  {
    id: OptionsOrder.PROCESSING,
    title: 'Đang xử lý',
    isSelected: false,
  },
  {
    id: OptionsOrder.DELIVERING,
    title: 'Đang giao',
    isSelected: false,
  },
  {
    id: OptionsOrder.COMPLETED,
    title: 'Hoàn thành',
    isSelected: false,
  },
  {
    id: OptionsOrder.CANCELLED,
    title: 'Hủy',
    isSelected: false,
  },
];

const popupClassify = [
  {
    id: Classify.GOODS,
    title: 'Hàng hóa',
    isSelected: false,
  },
  {
    id: Classify.BULKY_GOODS,
    title: 'Hàng hóa cồng kềnh',
    isSelected: false,
  },
  {
    id: Classify.FOOD,
    title: 'Thức ăn',
    isSelected: false,
  },
];

const popupView = [
  {
    id: ViewProduct.CAMERA,
    title: 'Camera',
    isSelected: false,
  },
  {
    id: ViewProduct.GALLERY,
    title: 'Gallery',
    isSelected: false,
  },
];

const popupFormShip = [
  {
    id: FormShip.SAVE_MONEY,
    title: 'Tiết kiệm',
    isSelected: false,
  },
  {
    id: FormShip.EXPRESS,
    title: 'Hỏa tốc',
    isSelected: false,
  },
];

const popupEmail = [
  {
    id: Email.SHIPPER,
    title: 'Chat shipper',
    isSelected: false,
  },
  {
    id: Email.HELP,
    title: 'Hỗ trợ',
    isSelected: false,
  },
];

const includeExtra = true;
const actions: Action[] = [
  {
    title: 'Take Image',
    type: 'capture',
    options: {
      saveToPhotos: false,
      mediaType: 'mixed',
      includeBase64: false,
      includeExtra,
      durationLimit: 10000,
      videoQuality: 'high',
    },
  },
  {
    title: 'Select Image',
    type: 'library',
    options: {
      selectionLimit: 0,
      mediaType: 'mixed',
      includeBase64: false,
      includeExtra,
      durationLimit: 10000,
      videoQuality: 'high',
    },
  },
];

// Số dung lượng max khi tải ảnh
const MAX_SIZE_MEDIA_MB = 50;
const CONST_MB_TO_BYTES = 1048576;
const MAX_SIZE_MEDIA_BYTES = MAX_SIZE_MEDIA_MB * CONST_MB_TO_BYTES;

//Confirm
const dataTestConfirm = {
  orderCreator: {
    title: 'Người gửi',
    data: {
      name: 'Nguyễn Ngọc Khánh',
      tel: '0912345521',
      address: 'Trần Duy Hưng, Cầu Giấy, Hà Nội',
    },
  },
  receiver: {
    title: 'Người nhận',
    data: {
      name: 'Nguyễn Macro',
      tel: '0912323452',
      address: 'Triều Khúc, Thanh Xuân, Hà Nội',
    },
  },
  product: {
    title: 'Sản phẩm',
    data: {
      name: 'Quần bò dài nam size L màu xanh dương xẻ gối và bó ống quần',
      weight: '500 gam',
      type: 'Quần áo',
      media: [],
    },
  },
  transport: {
    title: 'Vận chuyển',
    data: {
      formality: 'Anthelper Ship',
      note: 'Giao luôn trong ngày cho khách hàng. Giao luôn trong ngày cho khách hàng.Giao luôn trong ngày cho khách hàng. Giao luôn trong ngày cho khách hàngGiao luôn trong ngày cho khách hàng.Giao luôn trong ngày cho khách hàng. Giao luôn trong ngày cho khách hàng',
    },
  },
  money: {
    title: 'Chi tiết thanh toán',
    data: {
      productPrice: '150.000',
      ship: '10.000',
      voucher: '-1.000',
      price: '159.000',
    },
  },
};

export {
  OptionsOrder,
  Receiver,
  TypePage2,
  ViewProduct,
  FormShip,
  TitleOrders,
  sizePopup,
  titleReceiver,
  product,
  dataPopup,
  popupClassify,
  popupFormShip,
  popupView,
  popupEmail,
  actions,
  MAX_SIZE_MEDIA_BYTES,
  MAX_SIZE_MEDIA_MB,
  dataTestConfirm,
};
