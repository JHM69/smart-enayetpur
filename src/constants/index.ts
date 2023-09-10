import { i18n } from 'dateformat';

export const dInVietnamese = new Map([
  [i18n.dayNames[1], 'Monday'],
  [i18n.dayNames[2], 'Tuesday'],
  [i18n.dayNames[3], 'Wednesday'],
  [i18n.dayNames[4], 'Thursday'],
  [i18n.dayNames[5], 'Friday'],
  [i18n.dayNames[6], 'Saturday'],
  [i18n.dayNames[0], 'Sunday'],
]);

export const mInVietnamese = Array.from(new Array(12).keys()).map(
  (e) => `Month ${e + 1}`,
);

export const banksCode = ['Bkash', 'Nagad', 'Roket'];

export const PATHS = {
  USER: 'user',
  USER_PROFILE: 'profile',
  LEARNING: 'learning',
  COURSE: 'course',
  BOOK_ORDER: 'book_order_track',
  TEACHING: 'teaching',
  QUESTIONS: 'questions',
  TEST: 'test',
  BOOK: 'book',
  ARTICLE: 'article',
  DASHBOARD: 'dashboard',
  LOGIN: 'login',
  REGISTER: 'register',
  CREATE_COURSE: 'create',
  CREATE_QUESTION: 'create_question',
  CREATE_ARTICLE: 'create_article',
  CREATE_TEST: 'create_test',
  EDIT_COURSE: 'edit',
  EDIT_QUESTION: 'edit_question',
  EDIT_BOOK: 'edit_book',
  CREATE_BOOK: 'create_book',
  EDIT_ARTICLE: 'edit_article',
  EDIT_TEST: 'edit_test',
  ADMIN: 'admin',
  CART: 'cart',
  BROWSE: 'browse/course',
  PAYMENT_STATUS: 'payment_success',
  MY_LEARNING: 'my-learning',
  INSTRUCTIONS: 'instructions',
  MY_WALLET: 'my-wallet',
  MONEY: 'money',
  EXAM: 'exam',
  MERIT: 'merit',
  BROWSE_EXAM: 'browse/exam',
  BROWSE_BOOK: 'browse/book',
  BROWSE_ARTICLE: 'browse/article',
};

export const QUERY_FILTERS = {
  SORT: 'sortBy',
  CATEGORY: 'category',
  SECTION: 'section',
  SUB_CATEGORY: 'subCategory',
  OBJECT: 'object',
  PRICE: 'price',
  COURSE_STATE: 'courseState',
};

export const UPLOADER_PB_KEY = process.env.NEXT_PUBLIC_UPLOADER_KEY as string;

export const LEVELS_LABEL = ['Beginner', 'Intermediate', 'Expert', 'All'];

export const MAPPING_PUBLISH_MODE_LANGUAGE = {
  Public: 'PUBLIC',
  Private: 'PRIVATE',
};

export const MAPPING_COURSE_STATE_LANGUAGE = {
  Complete: 'FINALIZATION',
  Accumulate: 'ACCUMULATION',
};

export const MAPPING_QUESTION_STATE_LANGUAGE = {
  Complete: 'FINALIZATION',
  Accumulate: 'ACCUMULATION',
};

export const MAPPING_LEVEL_LANGUAGE = {
  [LEVELS_LABEL[0] as string]: 'BEGINNER',
  [LEVELS_LABEL[1] as string]: 'INTERMEDIATE',
  [LEVELS_LABEL[2] as string]: 'EXPERT',
  [LEVELS_LABEL[3] as string]: 'ALL',
};

export const QUESTION_LEVEL = ['EASY', 'MEDIUM', 'HARD', 'ADVANCED'];

export const webSlogan = 'স্মার্ট এনায়েতপুর';

export const playerOptions = {
  theme: '#ffad00',
  setting: true,

  autoPlayback: true,

  screenshot: true,
  moreVideoAttr: {
    crossOrigin: '*',
  },

  hotkey: true,

  // fullscreenWeb: true,

  fullscreen: true,

  // pip: true,

  playbackRate: true,

  autoSize: true,
  // autoMini: true,
  // poster:
  //   'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
};

export const categories = [
  { title: 'কৃষি', url: `/agriculture` },
  { title: 'শিক্ষা', url: `/browse/course` },
  { title: 'স্বাস্থ্য সেবা', url: `/health` },
  { title: 'যানবাহন', url: `/trans` },
  { title: 'দুর্যোগ সতর্কতা', url: `/digester` },
  { title: 'সরকারি সেবা', url: `/gov_service` },
  { title: 'পরিবেশ বার্তা', url: `/env` },
  { title: 'গ্রামীণ উদ্যোগ ও অর্থনীতি', url: `/economy` },
  { title: 'গ্রামীণ সম্প্রদায়', url: `/social_media` },
  { title: 'প্রয়োজনীয় সেবা', url: `/utility` },
  { title: 'দক্ষতা ও কর্ম', url: `/browse/course` },
  { title: 'সাংস্কৃতিক সংরক্ষণ', url: `/culture` },
];

export const swiperBreakPoints = {
  1: {
    slidesPerView: 2,
    spaceBetween: 2,
  },
  320: {
    spaceBetween: 5,
    slidesPerView: 3,
  },
  480: {
    slidesPerView: 4,
  },
  640: {
    slidesPerView: 5,
    spaceBetween: 10,
  },
  1300: {
    spaceBetween: 20,
    slidesPerView: 7,
  },
};

export const MathSection = {
  title: 'গণিত',
  sections: ['সকল অংশ', 'বীজগণিত', 'পাটিগণিত', 'জ্যামিতি', 'মানসিক দক্ষতা'],
};

export const JobPreparation = {
  title: '',
  fields: [
    'কৃষি',
    'শিক্ষা',
    'স্বাস্থ্য সেবা',
    'যানবাহন',
    'দুর্যোগ সতর্কতা',
    'সরকারি সেবা',
    'পরিবেশ বার্তা',
    'গ্রামীণ উদ্যোগ ও অর্থনীতি',
    'গ্রামীণ সম্প্রদায়',
    'প্রয়োজনীয় সেবা',
    'দক্ষতা ও কর্ম',
    'সাংস্কৃতিক সংরক্ষণ',
  ],
};
export const SkillDevelopment = {
  title: 'দক্ষতা উন্নয়ন',
  fields: ['ওয়েব ডেভেলপমেন্ট', 'মোবাইল এপ ডেভেলপমেন্ট', 'গ্রাফিক্স ডিজাইন'],
};
export const HSC = {
  title: 'এইচ এস সি',
  fields: [
    'সকল বিষয় - HSC',
    'পদার্থবিজ্ঞান - HSC',
    'রসায়ন - HSC',
    'গণিত - HSC',
    'উচ্চতর গণিত - HSC',
    'আইসিটি - HSC',
    'জীবিবিজ্ঞান - HSC',
    'ইংরেজী - HSC',
  ],
};

export const SSC = {
  title: 'এস এস সি',
  fields: [
    'পদার্থবিজ্ঞান - SSC',
    'রসায়ন - SSC',
    'গণিত - SSC',
    'উচ্চতর গণিত - SSC',
    'আইসিটি - SSC',
    'জীবিবিজ্ঞান - SSC',
    'ইংরেজী - SSC',
    'বাংলা - SSC',
  ],
};
export const CLASS_8 = {
  title: 'অষ্টম শ্রেণী',
  fields: [
    'সকল বিষয় - 8',
    'গণিত - 8',
    'আইসিটি - 8',
    'বিজ্ঞান - 8',
    'ইংরেজী - 8',
  ],
};
export const CLASS_7 = {
  title: 'সপ্তম শ্রেণী',
  fields: [
    'সকল বিষয় - 7',
    'গণিত - 7',
    'আইসিটি - 7',
    'বিজ্ঞান - 7',
    'ইংরেজী - 7',
  ],
};
export const CLASS_5 = {
  title: 'পঞ্চম শ্রেণী',
  fields: ['সকল বিষয় - 5', 'গণিত - 5', 'বিজ্ঞান - 5', 'ইংরেজী - 5'],
};
export const CLASS_6 = {
  title: 'ষষ্ঠ শ্রেণী',
  fields: ['সকল বিষয় - 6', 'গণিত - 6', 'বিজ্ঞান - 6', 'ইংরেজী - 6'],
};

export const CLASS_4 = {
  title: 'চতুর্থ শ্রেণী',
  fields: ['সকল বিষয় - 4', 'গণিত - 4', 'বিজ্ঞান - 4', 'ইংরেজী - 4'],
};

export const categories_detail = [
  JobPreparation,
  HSC,
  SSC,
  CLASS_8,
  CLASS_7,
  CLASS_6,
  CLASS_5,
  CLASS_4,
];
