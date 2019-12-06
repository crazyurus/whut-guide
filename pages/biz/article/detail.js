import regeneratorRuntime from 'regenerator-runtime';
import request from '../../../libs/request.js';
import native from '../../../libs/native.js';
import app from '../../../libs/app.js';
import { getPagePath } from '../../../libs/utils.js';

const systemInfo = native.getSystemInfoSync();

Page({
  data: {
    article: {
      title: '加载中',
      content: '内容正在加载中，请稍等'
    },
    showShare: true
  },
  async onLoad(options) {
    const response = await request.get('/article?id=' + options.id);

    if (systemInfo.AppPlatform === 'qq') response.miniPrograms = response.miniPrograms.qq;
    else response.miniPrograms = response.miniPrograms.wechat;

    this.setData({
      article: response
    });
  },
  onShareAppMessage() {
    return {
      title: this.data.article.title,
      path: getPagePath(this),
    };
  },
  feedback() {
    app.feedback();
  },
  async preview(e) {
    const { url } = e.target.dataset;

    native.showLoading({
      title: '打开附件中'
    });
    const response = await native.downloadFile({
      url
    });
    const filePath = response.tempFilePath;
    const document = await native.openDocument({
      filePath,
    });
    native.hideLoading();
  },
  launch(e) {
    const { appid, path } = e.target.dataset;

    native.navigateToMiniProgram({
      appId: appid,
      path
    });
  },
  scroll(e) {
    const { scrollTop } = e.detail;

    this.setData({
      showShare: scrollTop < 20
    });
  },
  location(e) {
    const { name, area, longitude, latitude } = e.target.dataset;

   if (systemInfo.AppPlatform === 'qq') {
     native.navigateTo({
       url: '/pages/common/webview?url=' + encodeURIComponent(`https://3gimg.qq.com/lightmap/v1/marker/index.html?marker=coord%3A${latitude}%2C${longitude}%3Btitle%3A${encodeURIComponent(name)}%3Baddr%3A${encodeURIComponent(area)}`),
     });
   } else {
     native.openLocation({
       name,
       address: area,
       latitude,
       longitude,
     });
   }
  }
});
