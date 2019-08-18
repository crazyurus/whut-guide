const app = getApp()
const systemInfo = wx.getSystemInfoSync();

Page({
  data: {
    article: {
      title: '加载中',
      content: '内容正在加载中，请稍等'
    }
  },
  onLoad(options) {
    app.loadFontFace();
    app.request.get('https://test-api-iwut.wutnews.net/api/v1/article?id=' + options.id).then(response => {
      if (systemInfo.AppPlatform === 'qq') response.miniPrograms = response.miniPrograms.qq;
      else response.miniPrograms = response.miniPrograms.wechat;

      this.setData({
        article: response
      });
    });
  },
  onShareAppMessage() {
    return {
      title: this.data.article.title
    };
  },
  feedback() {
    if (systemInfo.AppPlatform === 'qq') {
      const wj = ' https://wj.qq.com/s2/4309434/95ba';
      wx.navigateTo({
        url: '/pages/common/webview?url=' + encodeURIComponent(wj)
      });
    } else {
      wx.navigateToMiniProgram({
        appId: 'wxebadf544ddae62cb',
        path: '/pages/survey/index?sid=4309434&hash=95ba'
      });
    }
  },
  preview(e) {
    const { url } = e.target.dataset;

    wx.showLoading({
      title: '下载附件中'
    });
    wx.downloadFile({
      url,
      success(response) {
        const filePath = response.tempFilePath
        wx.openDocument({
          filePath,
          complete() {
            wx.hideLoading();
          }
        });
      }
    });
  },
  launch(e) {
    const { appid, path } = e.target.dataset;

    wx.navigateToMiniProgram({
      appId: appid,
      path
    });
  }
});
