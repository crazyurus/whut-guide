import native from './libs/native.js';
import { openUrl } from './libs/utils.js';

App({
  onLaunch() {
    this.globalData = {};
    this.loadFontFace();
  },
  loadFontFace() {
    if (native.loadFontFace) {
      native.loadFontFace({
        family: '方正大标宋',
        source: 'url(https://sf1-ttcdn-tos.pstatp.com/obj/larkdeveloper/FZCUJINLJW.woff2)'
      });
    }
  },
  about() {
    native.showModal({
      title: '理工大指北',
      content: 'Token团队出品\n产品：曹峻玮 陈骁驰\n设计：许亚婷\n开发：廖星 李劲巍 刘福鑫',
      showCancel: false,
      confirmColor: '#000'
    });
  },
  feedback() {
    const systemInfo = native.getSystemInfoSync();

    if (systemInfo.AppPlatform === 'qq') {
      const wj = 'https://wj.qq.com/s2/4309434/95ba';
      openUrl(wj);
    } else {
      native.navigateToMiniProgram({
        appId: 'wxebadf544ddae62cb',
        path: '/pages/survey/index?sid=4309434&hash=95ba'
      });
    }
  }
});
