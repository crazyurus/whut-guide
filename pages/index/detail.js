const app = getApp()
const systemInfo = wx.getSystemInfoSync();

Page({
  data: {
    article: {}
  },
  onLoad(options) {
    app.loadFontFace();
    app.request.get('https://test-api-iwut.wutnews.net/api/v1/article?id=' + options.id).then(response => {
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
      const wj = 'https://wj.qq.com/';
      wx.navigateTo({
        url: '/pages/common/webview?url=' + encodeURIComponent(wj)
      });
    } else {
      wx.navigateToMiniProgram({
        appId: 'wxebadf544ddae62cb',
        path: '/pages/survey/index?sid=1439943&hash=f9db'
      });
    }
  }
});
