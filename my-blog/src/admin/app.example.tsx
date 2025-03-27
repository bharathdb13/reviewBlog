import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: [
      //7189c677303abbea3dfa9bca82d65abcfa551254f296dc023b67aab25124620d8a9ced4c890344ef84b4bb14b5ec7ef79aed9e5d0b143fd2bea220e3715f40c35c9f574b62584c0f3b533df7f94dc2bdffe6c9e57b24c2e7687a786e0d21593f01b5cdc965399849a021d5ba2328c0cf922b5866b584314e948c6e2697729232
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
