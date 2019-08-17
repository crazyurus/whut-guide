const app = getApp()
const systemInfo = wx.getSystemInfoSync();

Page({
  data: {
    article: {}
  },
  onLoad(options) {
    app.loadFontFace();
    app.request.get('https://www.easy-mock.com/mock/5d57960889a50f63cfe141ba/guide/api/v1/article/' + options.id).then(response => {
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
